function openFilm(adult){
  if(!adult){
    location.href="watch.html";
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));
  if(!user){
    alert("Compte obligatoire pour ce contenu");
    location.href="login.html";
    return;
  }

  const age = new Date().getFullYear() - new Date(user.birth).getFullYear();
  if(age < 18){
    alert("Contenu adulte interdit. Contactez le service client.");
    location.href="contact.html";
    return;
  }

  location.href="watch.html";
}
