import os
import re
import urllib.request

base_url = 'https://oyearsh.vercel.app/'
public_dir = r'c:\Users\tarun\OneDrive\Desktop\portfolio\public'

with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

urls = re.findall(r'url\((?!data:)([\'"]?)([^'" )]+)\1\)', css)
for _, src in urls:
    if src.startswith('/') or src.startswith('http'):
        continue
    
    full_url = base_url + src
    local_path = os.path.join(public_dir, src)
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    
    if not os.path.exists(local_path):
        try:
            print(f'Downloading {full_url} to {local_path}')
            urllib.request.urlretrieve(full_url, local_path)
        except Exception as e:
            print(f'Failed to download {full_url}: {e}')
print('Done downloading CSS assets.')
