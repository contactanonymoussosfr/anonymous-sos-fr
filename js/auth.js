function register() {
  const email = document.getElementById("email").value;
  const age = parseInt(document.getElementById("age").value);

  if (!email || !age) {
    document.getElementById("error").innerText = "Tous les champs sont obligatoires";
    return;
  }

  if (age < 18) {
    document.getElementById("error").innerText = "Accès interdit aux mineurs";
    return;
  }

  localStorage.setItem("user", JSON.stringify({
    email: email,
    age: age,
    subscribed: false
  }));

  window.location.href = "index.html";
}

function checkAuth() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "login.html";
  }
}
