import os
import json
from pathlib import Path


def add_image_to_json(json_file, id, picture_url, path):
    data = {
        "id": id,
        "pictureURL": picture_url,
        "isAlta": False,
        "isAncha": False,
        "path": path
    }
    with open(json_file, 'r') as f:
        images = json.load(f)
    images.append(data)
    with open(json_file, 'w') as f:
        json.dump(images, f, indent=4)


def main(folder_path, start_id):
    json_file = 'images.json'
    images = []
    with open(json_file, 'w') as f:
        json.dump(images, f, indent=4)
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.jpg'):
                picture_url = "../images/" + file
                add_image_to_json(json_file, start_id,
                                  picture_url, '/galeria/taller')
                start_id += 1


if __name__ == "__main__":
    folder_path = Path(r"C:\Users\Jorge\Pictures\montessori\galeria taller")
    start_id = 166
    main(folder_path, start_id)
