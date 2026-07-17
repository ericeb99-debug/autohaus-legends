"""Create the two in-game paint variants from a cyan paint-mask vehicle cutout."""

from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np
from PIL import Image, ImageColor


PAINT_COLORS = {
    "schwarz": "#111111",
    "silber": "#aeb8c7",
}

OUTPUT_SIZE = (960, 540)


def rgb_to_hsv(rgb: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    maximum = rgb.max(axis=2)
    minimum = rgb.min(axis=2)
    delta = maximum - minimum
    saturation = np.divide(delta, maximum, out=np.zeros_like(delta), where=maximum > 1e-6)
    hue = np.zeros_like(maximum)
    nonzero = delta > 1e-6
    red = nonzero & (maximum == rgb[:, :, 0])
    green = nonzero & (maximum == rgb[:, :, 1])
    blue = nonzero & (maximum == rgb[:, :, 2])
    hue[red] = ((rgb[:, :, 1][red] - rgb[:, :, 2][red]) / delta[red]) % 6
    hue[green] = (rgb[:, :, 2][green] - rgb[:, :, 0][green]) / delta[green] + 2
    hue[blue] = (rgb[:, :, 0][blue] - rgb[:, :, 1][blue]) / delta[blue] + 4
    return hue / 6, saturation, maximum


def smoothstep(low: float, high: float, value: np.ndarray) -> np.ndarray:
    scaled = np.clip((value - low) / (high - low), 0, 1)
    return scaled * scaled * (3 - 2 * scaled)


def paint_mask(rgb: np.ndarray, alpha: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    hue, saturation, value = rgb_to_hsv(rgb)
    cyan_distance = np.minimum(np.abs(hue - 0.555), 1 - np.abs(hue - 0.555))
    hue_weight = 1 - smoothstep(0.075, 0.18, cyan_distance)
    saturation_weight = smoothstep(0.08, 0.26, saturation)
    value_weight = smoothstep(0.06, 0.18, value)
    weight = hue_weight * saturation_weight * value_weight * alpha
    return np.clip(weight, 0, 1), value


def remove_magenta_spill(source: np.ndarray) -> np.ndarray:
    """Remove chroma that remains visible through tinted glass after keying."""
    result = source.copy()
    rgb = result[:, :, :3].astype(np.float32) / 255
    alpha = result[:, :, 3].astype(np.float32) / 255
    hue, saturation, value = rgb_to_hsv(rgb)
    magenta_distance = np.minimum(np.abs(hue - 0.833), 1 - np.abs(hue - 0.833))
    hue_weight = 1 - smoothstep(0.055, 0.16, magenta_distance)
    saturation_weight = smoothstep(0.10, 0.46, saturation)
    value_weight = smoothstep(0.04, 0.24, value)
    spill = np.clip(hue_weight * saturation_weight * value_weight, 0, 1)
    luminance = (rgb[:, :, 0] * 0.24 + rgb[:, :, 1] * 0.68 + rgb[:, :, 2] * 0.08)[:, :, None]
    neutral = np.repeat(luminance, 3, axis=2)
    rgb = rgb * (1 - spill[:, :, None] * 0.88) + neutral * spill[:, :, None] * 0.88
    alpha *= 1 - spill * 0.82
    result[:, :, :3] = np.clip(rgb * 255, 0, 255).astype(np.uint8)
    result[:, :, 3] = np.clip(alpha * 255, 0, 255).astype(np.uint8)
    return result


def recolor(source: np.ndarray, target_hex: str) -> np.ndarray:
    rgb = source[:, :, :3].astype(np.float32) / 255
    alpha = source[:, :, 3].astype(np.float32) / 255
    mask, value = paint_mask(rgb, alpha)
    target = np.array(ImageColor.getrgb(target_hex), dtype=np.float32) / 255
    shading = np.clip(0.45 + value * 0.55, 0.48, 1.0)[:, :, None]
    colored = np.clip(target[None, None, :] * shading, 0, 1)
    specular = smoothstep(0.91, 1.0, value)[:, :, None]
    colored = colored * (1 - specular * 0.24) + specular * 0.24
    mixed = rgb * (1 - mask[:, :, None]) + colored * mask[:, :, None]
    result = np.empty_like(source)
    result[:, :, :3] = np.clip(mixed * 255, 0, 255).astype(np.uint8)
    result[:, :, 3] = source[:, :, 3]
    return result


def build_variants(source_path: Path, output_dir: Path, asset_key: str) -> list[Path]:
    image = Image.open(source_path).convert("RGBA").resize(OUTPUT_SIZE, Image.Resampling.LANCZOS)
    source = remove_magenta_spill(np.asarray(image))
    output_dir.mkdir(parents=True, exist_ok=True)
    written = []
    for color_slug, target_hex in PAINT_COLORS.items():
        output_path = output_dir / f"{asset_key}--{color_slug}.webp"
        Image.fromarray(recolor(source, target_hex), "RGBA").save(
            output_path, "WEBP", quality=86, method=3, lossless=False
        )
        written.append(output_path)
    return written


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, default=Path("assets/vehicles/colors"))
    parser.add_argument("--key", required=True)
    args = parser.parse_args()
    for path in build_variants(args.input, args.output_dir, args.key):
        print(path)


if __name__ == "__main__":
    main()
