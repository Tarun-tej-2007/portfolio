import os

base_dir = r"c:\Users\tarun\OneDrive\Desktop\portfolio\src"
dirs = [
    "components/common",
    "components/layout",
    "components/navigation",
    "components/sections",
    "components/ui",
    "pages",
    "assets",
    "hooks",
    "data",
    "utils",
    "styles",
]

for d in dirs:
    os.makedirs(os.path.join(base_dir, d), exist_ok=True)

print("Directories created.")
