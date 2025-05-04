document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("cookbookUser");
  const users = JSON.parse(localStorage.getItem("users") || "{}");

  const title = document.getElementById("mypage-title");
  const favoritesList = document.getElementById("favorites-list");
  const noFavorites = document.getElementById("no-favorites");

  if (!user || !users[user]) {
    title.textContent = "로그인이 필요합니다.";
    favoritesList.innerHTML = "";
    noFavorites.style.display = "block";
    return;
  }

  title.textContent = `${user}님의 마이페이지`;

  const favorites = users[user].favorites || [];

  if (favorites.length === 0) {
    noFavorites.style.display = "block";
  } else {
    noFavorites.style.display = "none";

    favorites.forEach(menuKey => {
      const recipe = recipes[menuKey];
      if (!recipe) return;

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <a href="recipe.html?menu=${menuKey}">
          <img src="${recipe.image}" alt="${recipe.title}">
          <div class="card-body">
            <h4>${recipe.title}</h4>
            <p>${recipe.description}</p>
          </div>
        </a>
      `;

      favoritesList.appendChild(card);
    });
  }
});
