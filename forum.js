const postsDiv = document.getElementById("posts");

// Charger les messages
function loadPosts() {
  const data = JSON.parse(localStorage.getItem("forumPosts")) || [];
  postsDiv.innerHTML = "";

  data.reverse().forEach(p => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <div class="author">${p.pseudo}</div>
      <div class="time">${p.time}</div>
      <div class="content">${p.message}</div>
    `;
    postsDiv.appendChild(div);
  });
}

// Publier un message
function publish() {
  const pseudo = document.getElementById("pseudo").value.trim() || "Anonymous";
  const message = document.getElementById("message").value.trim();

  if (!message) {
    alert("Écris quelque chose.");
    return;
  }

  const data = JSON.parse(localStorage.getItem("forumPosts")) || [];

  data.push({
    pseudo,
    message,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("forumPosts", JSON.stringify(data));
  document.getElementById("message").value = "";
  loadPosts();
}

// Initialisation
loadPosts();
