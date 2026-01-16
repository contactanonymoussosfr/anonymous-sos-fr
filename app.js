/* =========================
   AUTH SIMPLE (LOCAL)
========================= */

function login() {
  const username = document.getElementById("user").value.trim();
  if (!username) {
    alert("Entre un pseudo");
    return;
  }
  localStorage.setItem("user", username);
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "connexion.html";
}

function requireAuth() {
  const user = localStorage.getItem("user");
  if (!user) {
    window.location.href = "connexion.html";
  }
}

/* =========================
   UTILISATEUR COURANT
========================= */

function currentUser() {
  return localStorage.getItem("user");
}

/* =========================
   LIKES (LOCAL)
========================= */

function like(btn) {
  let count = parseInt(btn.dataset.count || "0", 10);
  count++;
  btn.dataset.count = count;
  btn.innerText = "❤️ " + count;
}

/* =========================
   AUTO PLAY VIDÉOS
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.muted = true;
    video.loop = true;

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});

/* =========================
   DEBUG (OPTIONNEL)
========================= */

// console.log("User:", currentUser());
