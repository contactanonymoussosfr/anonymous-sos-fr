let mode = "";

function openLogin() {
  mode = "login";
  document.getElementById("modalTitle").textContent = "Connexion";
  document.getElementById("modal").classList.remove("hidden");
}

function openRegister() {
  mode = "register";
  document.getElementById("modalTitle").textContent = "Créer un compte";
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;

  if (!name || !password || (mode === "register" && (!email || !gender))) {
    alert("Champs manquants");
    return;
  }

  if (mode === "register") {
    localStorage.setItem("user", JSON.stringify({
      name,
      email,
      password,
      gender
    }));
    alert("Compte créé");
  }

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.name === name && user.password === password) {
    document.getElementById("status").textContent =
      "🟢 Connecté : " + name;
    document.getElementById("logoutBtn").classList.remove("hidden");
    closeModal();
  } else {
    alert("Erreur de connexion");
  }
}

function logout() {
  location.reload();
}
