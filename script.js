const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");

const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");
const btnLogout = document.getElementById("btnLogout");
const status = document.getElementById("status");

const submit = document.getElementById("submit");

let mode = "";

btnRegister.onclick = () => openModal("register");
btnLogin.onclick = () => openModal("login");
btnLogout.onclick = logout;

function openModal(type) {
  mode = type;
  modal.classList.remove("hidden");
  modalTitle.textContent = type === "register"
    ? "Créer un compte"
    : "Connexion";
}

function closeModal() {
  modal.classList.add("hidden");
}

submit.onclick = () => {
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
      email,     // stocké mais JAMAIS affiché
      password,
      gender
    }));
    alert("Compte créé");
  }

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.password === password) {
    localStorage.setItem("logged", "true");
    updateUI(user.name);
    closeModal();
  } else {
    alert("Erreur de connexion");
  }
};

function updateUI(name) {
  status.textContent = "● Connecté : " + name;
  status.className = "status online";
  btnLogin.classList.add("hidden");
  btnRegister.classList.add("hidden");
  btnLogout.classList.remove("hidden");
}

function logout() {
  localStorage.removeItem("logged");
  location.reload();
}

if (localStorage.getItem("logged")) {
  const user = JSON.parse(localStorage.getItem("user"));
  updateUI(user.name);
}
