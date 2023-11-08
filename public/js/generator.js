function updatePreview() {
    const color = document.getElementById("color").value;
    const pattern = document.getElementById("pattern").value;
    const image = document.getElementById("image").value;

    const sock = document.getElementById('sock');
    console.log(sock)
    sock.querySelector('use').setAttribute('style', `fill:${color};`);

    const preview = document.querySelector(".preview");
    preview.innerHTML = `<img src="${image}.jpg" alt="Изображение" style="width: 100%; height: 100%; background-color: ${color}; mix-blend-mode: ${pattern}">`;
}

function addToFavorites() {
    alert("Носок добавлен в избранное!");
}

function addToCart() {
    alert("Носок добавлен в корзину!");
}

document.getElementById("color").addEventListener("change", updatePreview);
document.getElementById("pattern").addEventListener("change", updatePreview);
document.getElementById("image").addEventListener("change", updatePreview);

updatePreview();
