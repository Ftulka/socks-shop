const form = document.querySelector("#loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.email || !res.password || !res.login) {
    alert("Введите свои данные!");
  } else {
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      });

      const result = await response.json();

      const divReg = document.querySelector(".regDiv");
      if (response.status === 200) {
        window.location.replace("/");
      } else if (response.status === 403) {
        divReg.innerText = result.err;
        divReg.style.color = "red";
      } else {
        alert("Ошибка сервера");
        window.location.replace("/");
      }

      //   const nav = document.querySelector(".myNav");

      //   document.querySelector("#navbarNav").remove();

      //   const html = `
      //   <div class="collapse navbar-collapse" id="navbarNav">
      //   <ul class="navbar-nav">
      //     <li class="nav-item">
      //       <span class="nav-link">
      //         Hi, ${result.login}
      //       </span>
      //     </li>
      //     <li class="nav-item">
      //       <a class="nav-link" href="/logout">Logout</a>
      //     </li>
      //   </ul>
      //  </div>
      //   `;
      //   nav.insertAdjacentHTML("beforeend", html);
    } catch (error) {
      console.log(`Что-то сломалось ==> ${error}`);
      alert(`Что-то сломалось ==> ${error}`);
    }
  }
});
