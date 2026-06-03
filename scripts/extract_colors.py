import os
from collections import Counter
from pathlib import Path
from PIL import Image

def get_dominant_color(image_path, resize=150):
    img = Image.open(image_path)
    img = img.convert('RGB')
    img.thumbnail((resize, resize))
    pixels = list(img.getdata())
    most_common = Counter(pixels).most_common(1)[0][0]
    return '#%02x%02x%02x' % most_common

image_dir = Path('public/extracted_images')
result = {}
for img_file in image_dir.iterdir():
    if img_file.suffix.lower() in ['.png', '.jpg', '.jpeg', '.gif']:
        hex_color = get_dominant_color(img_file)
        result[img_file.name] = hex_color

# Output results
for name, hexc in result.items():
    print(f"{name}: {hexc}")
