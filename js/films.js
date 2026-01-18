function openFilm(id) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user.subscribed) {
    alert("Abonnement requis (2 €)");
    window.location.href = "subscribe.html";
    return;
  }

  window.location.href = "watch.html?id=" + id;
}
