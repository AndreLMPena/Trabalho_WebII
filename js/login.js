document
  .getElementById("loginForm")
  .addEventListener("submit", function autenticacao(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      window.open("../html/cadastra_testes.html", "_self");
    } else {
      alert("Usuario ou senha incorreto!");
      window.open("../html/home.html", "_self");
    }
  });
