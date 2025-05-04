function renderRecipes(type, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !recipes[type]) return;
  
    container.innerHTML = ""; // 기존 내용 제거
    recipes[type].forEach(r => {
      const card = document.createElement("a");
      card.href = `recipe.html?menu=${r.menu}`;
      card.className = "popular-card";
      card.innerHTML = `
        <img src="${r.image}" alt="${r.name}" />
        <div class="overlay"><p>${r.desc}</p></div>
        <span class="recipe-name">${r.name}</span>
      `;
      container.appendChild(card);
    });
  }