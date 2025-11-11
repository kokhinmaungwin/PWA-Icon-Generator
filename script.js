let images = {};
let deferredPrompt;

document.getElementById("genBtn").onclick = async () => {
  const file = document.getElementById("upload").files[0];
  function getSelectedSizes() {
  const select = document.getElementById("sizeSelect");
  return [...select.selectedOptions].map(o => parseInt(o.value));
}
  
  if(!file) return alert("Upload PNG first!");

  const img = new Image();
  img.src = URL.createObjectURL(file);
  await img.decode();

  const preview = document.getElementById("preview");
  preview.innerHTML = "";

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
    preview.appendChild(im);
  }

  alert("✅ Icons Generated");
};

document.getElementById("zipBtn").onclick = async () => {
  const zip = new JSZip();
  Object.entries(images).forEach(([size,data])=>{
    zip.file(`icon-${size}.png`, data.split(",")[1], {base64:true});
  });

  const blob = await zip.generateAsync({type:"blob"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "pwa-icons.zip";
  a.click();
};

// ---- Install PWA Button
window.addEventListener('beforeinstallprompt', (e)=>{
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById("installBtn").style.display="block";
});

document.getElementById("installBtn").onclick = async () => {
  deferredPrompt.prompt();
  deferredPrompt = null;
  document.getElementById("installBtn").style.display="none";
};
