const grid = document.getElementById("articlesGrid");

articles.forEach(article => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${article.image}" alt="${article.title}">
    <div class="card-content">
      <div class="category">${article.category}</div>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <a href="${article.link}" class="btn-primary">Read More</a>
    </div>
  `;

  grid.appendChild(card);
});

function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
}

function goHome(){
  window.location.href = "/";
}
