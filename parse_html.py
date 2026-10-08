import bs4
import json

file_path = r"C:\Users\tarun\.gemini\antigravity-ide\brain\df322b70-d13d-4977-a9b9-0688473b1f98\.system_generated\steps\15\content.md"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract the HTML part
html_start = content.find("<!doctype html>")
if html_start != -1:
    html_content = content[html_start:]
    soup = bs4.BeautifulSoup(html_content, "html.parser")
    
    # Let's extract style tag to a css file for reference
    styles = soup.find_all("style")
    with open("reference_styles.css", "w", encoding="utf-8") as style_file:
        for style in styles:
            style_file.write(style.string or "")
            style_file.write("\n")
            
    # Remove svg and style from soup for cleaner output
    for svg in soup.find_all("svg"):
        svg.decompose()
    for style in soup.find_all("style"):
        style.decompose()
    for script in soup.find_all("script"):
        script.decompose()

    with open("reference_structure.html", "w", encoding="utf-8") as html_file:
        html_file.write(soup.prettify())
        
    print("Extracted styles and structure.")
else:
    print("Could not find HTML start.")
