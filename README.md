## 📦 PWA Icon Generator

This web tool lets you upload one PNG image and automatically generate multiple PWA icon sizes (72×72, 96×96, 128×128, 192×192, 256×256, 384×384, 512×512).
You can preview and download all icons as a ZIP file instantly.


---

## 🚀 Features
| ----------------------------------------------------|
| ✅ Upload PNG & auto-generate icons                 |
| ✅ Preview each generated icon                      |
| ✅ Select sizes you want                            |
| ✅ Download all icons in one .zip                   |
| ✅ Supports PWA install (Add-To-Home-Screen) prompt |
| ✅ 100% Client-side, No upload to server            |
| ✅ Works on mobile & desktop                        |


---


## 🖼️ Supported Icon Sizes

| Size      | Purpose                         |
|-----------|---------------------------------|
| 72×72     | Low-density devices             |
| 96×96     | Standard display                |
| 128×128   | General icon                    |
| 192×192   | PWA Install icon (Required ✅)  |
| 256×256   | High-res icon                   |
| 384×384   | Play Store suggested            |
| 512×512   | Primary PWA icon (Required ✅)  |

---

## 📥 How To Use

1. Upload your PNG logo (prefer 512×512 for best result)


2. Choose icon sizes


3. Click Generate


4. Preview icons


5. Click Download ZIP




---

## 📂 Output Files

icon-72.png
icon-96.png
icon-128.png
icon-192.png
icon-256.png
icon-384.png
icon-512.png


---

## 🛠️ Tech Used

HTML, CSS, Vanilla JavaScript

Canvas API (for image resizing)

JSZip (ZIP download)

PWA Service Worker support



---

## 📱 Works Offline (PWA)

This project supports Add to Home Screen.
When installed, you can generate icons offline.


---

## 📄 Manifest Example

Add generated icons inside your manifest.json:
```json

{
  "name": "My PWA App",
  "short_name": "PWA App",
  "icons": [
    {"src":"icon-72.png","sizes":"72x72","type":"image/png"},
    {"src":"icon-96.png","sizes":"96x96","type":"image/png"},
    {"src":"icon-128.png","sizes":"128x128","type":"image/png"},
    {"src":"icon-192.png","sizes":"192x192","type":"image/png"},
    {"src":"icon-256.png","sizes":"256x256","type":"image/png"},
    {"src":"icon-384.png","sizes":"384x384","type":"image/png"},
    {"src":"icon-512.png","sizes":"512x512","type":"image/png"}
  ]
}
```

---

## 📬 License

MIT — free to use & modify.


---

## ❤️ Support / Feedback

If you like it, ⭐ the repo!
Issues & improvements welcome.
