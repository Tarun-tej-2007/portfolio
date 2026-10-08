import os
import urllib.request
import bs4

base_url = "https://oyearsh.vercel.app/"
public_dir = r"c:\Users\tarun\OneDrive\Desktop\portfolio\public"

with open("reference_structure.html", "r", encoding="utf-8") as f:
    soup = bs4.BeautifulSoup(f.read(), "html.parser")

imgs = soup.find_all("img")
for img in imgs:
    src = img.get("src")
    if src and not src.startswith("http") and not src.startswith("data:"):
        full_url = base_url + src
        local_path = os.path.join(public_dir, src)
        
        # Create directories
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        
        # Download
        if not os.path.exists(local_path):
            try:
                print(f"Downloading {full_url} to {local_path}")
                urllib.request.urlretrieve(full_url, local_path)
            except Exception as e:
                print(f"Failed to download {full_url}: {e}")

print("Done downloading images.")
