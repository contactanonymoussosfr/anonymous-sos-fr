function saveUser() {
  const user = {
    name: document.getElementById("name").value,
    birth: document.getElementById("birth").value,
    gender: document.getElementById("gender").value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Compte créé");
  location.href = "index.html";
}

function checkAdult() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Compte obligatoire. Contactez le service client.");
    location.href = "contact.html";
    return;
  }

  const age = new Date().getFullYear() - new Date(user.birth).getFullYear();
  if (age < 18) {
    alert("Contenu adulte interdit. Contactez le service client.");
    location.href = "contact.html";
    return;
  }

  alert("Accès autorisé (exemple)");
}
