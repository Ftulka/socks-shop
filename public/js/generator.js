const form = document.querySelector("form");
const sock = document.querySelector("#sock0");
const sockColorStyles = sock.querySelector(".color-rect").style;
sockColorStyles.fill = "#FFFFFF";
const pictureNode = sock.querySelector(".picture-image");
const printNode = sock.querySelector(".print-image");
const btnCart = form.querySelector("#btn-cart");

const rgb2Hex = (s) => {
  return s
    .match(/[0-9]+/g)
    .reduce((a, b) => a + (b | 256).toString(16).slice(1), "#")
    .toUpperCase();
};

const colorsCodes = {
  "btn-white": "#FFFFFF",
  "btn-yellow": "#FFFF00",
  "btn-purple": "#800080",
  "btn-pink": "#FF69B4",
  "btn-lightGreen": "#7CFC00",
  "btn-lightBlue": "#00BFFF",
};

form.addEventListener("change", (event) => {
  if (event.target.name === "color") {
    const color = colorsCodes[event.target.id];
    sockColorStyles.fill = color;
  }

  if (event.target.name === "picture") {
    const picName = event.target.id.slice(4);
    const pictureUrl = `/img/pictures/${picName}.png`;
    console.log(pictureUrl);
    pictureNode.setAttribute("href", pictureUrl);
    console.log(pictureNode);
  }

  if (event.target.name === "print") {
    const printName = event.target.id.slice(4);
    const printUrl = `/img/prints/${printName}.png`;
    printNode.setAttribute("href", printUrl);
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nameInput = form.querySelector("#name");
  if (!form.dataset.userid) {
    window.location = "/login";
    return;
  }

  const reqData = {
    name: nameInput.value,
    pictureUrl: pictureNode.href.baseVal,
    printUrl: printNode.href.baseVal,
    colorCode: rgb2Hex(sockColorStyles.fill),
    userId: form.dataset.userid,
  };

  const response = await fetch("/designs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqData),
  });

  if (response.status === 200) {
    const designData = await response.json();
    const res2 = await fetch("/favourites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: form.dataset.userid,
        designId: designData.id,
      }),
    });
    window.location = "/favorites";
  } else {
    alert("Ошибка сервера");
    window.location = "/";
  }
});

btnCart.addEventListener("click", async (event) => {
  event.preventDefault();
  const nameInput = form.querySelector("#name");
  if (!form.dataset.userid) {
    window.location = "/login";
    return;
  }
  const reqData = {
    name: nameInput.value,
    pictureUrl: pictureNode.href.baseVal,
    printUrl: printNode.href.baseVal,
    colorCode: rgb2Hex(sockColorStyles.fill),
    userId: form.dataset.userid,
  };

  const response = await fetch("/designs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqData),
  });

  if (response.status === 200) {
    const designData = await response.json();
    console.log(designData);
    const res2 = await fetch(`/positions/${form.dataset.userid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        designId: designData.id,
      }),
    });
    window.location = "/bucket";
  } else {
    alert("Ошибка сервера");
    window.location = "/";
  }
});
