let images = {};
let deferredPrompt;

// Toast UI
function toast(msg){
  let t=document.createElement("div");
  t.innerText=msg;
  t.style.cssText=
    "position:fixed;bottom:18px;left:50%;transform:translateX(-50%);"+
    "background:#0f62fe;color:#fff;padding:10px 18px;border-radius:8px;"+
    "font-size:14px;z-index:9999;box-shadow:0 3px 10px rgba(0,0,0,.2)";
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),2000);
}

// Generate Icons
document.getElementById("genBtn").onclick = async () => {
  const file = document.getElementById("upload").files[0];
  const sizeSelect = document.getElementById("sizeSelect");
  const selected = [...sizeSelect.selectedOptions].map(o => +o.value);

  if(!file) return toast("⚠️ Upload PNG first");

  const img = new Image();
  img.src = URL.createObjectURL(file);
  await img.decode();

  const preview = document.getElementById("preview");
  preview.innerHTML = "";
  images = {};

  for (let size of selected) {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, size, size);

    const data = canvas.toDataURL("image/png");
    images[size] = data;

    const im = new Image();
    im.src = data;
    im.width = size / 2;
    im.height = size / 2;
    im.style.borderRadius = "10px";

    const label = document.createElement("div");
    label.style.textAlign = "center";
    label.style.fontSize = "12px";
    label.textContent = `${size}x${size}`;
    
    const box = document.createElement("div");
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.alignItems = "center";
    box.appendChild(im);
    box.appendChild(label);
    preview.appendChild(box);
  }

  toast("✅ Icons Generated");
};

// Download ZIP
document.getElementById("zipBtn").onclick = async () => {
  if(!Object.keys(images).length) return toast("⚠️ Generate icons first");

  const zip = new JSZip();
  Object.entries(images).forEach(([size,data])=>{
    zip.file(`icon-${size}.png`, data.split(",")[1], {base64:true});
  });

  const blob = await zip.generateAsync({type:"blob"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "pwa-icons.zip";
  a.click();

  toast("📦 ZIP Downloaded");
};

// ---- PWA Install Button
window.addEventListener('beforeinstallprompt', (e)=>{
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById("installBtn").style.display="block";
});

document.getElementById("installBtn").onclick = async () => {
  deferredPrompt.prompt();
  deferredPrompt = null;
  document.getElementById("installBtn").style.display="none";
  toast("✅ App Installed");
};

// ---- Select All & Clear selected helper (optional support)
window.selectAllSizes = () => {
  [...document.getElementById("sizeSelect").options].forEach(o=>o.selected=true);
  toast("✅ All Sizes Selected");
};

window.clearSizes = () => {
  [...document.getElementById("sizeSelect").options].forEach(o=>o.selected=false);
  toast("🧹 Selection Cleared");
};
