// 1. URL에서 category 파라미터 읽기
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get('category');

// 2. 선택된 카테고리명 표시
document.getElementById('selected-category-name').textContent = selectedCategory;

// 3. 레시피 필터링
const recipeList = document.getElementById('recipe-list');

const filteredRecipes = Object.entries(recipes).filter(([_, recipe]) => recipe.category === selectedCategory);

// 4. 카드 렌더링
filteredRecipes.forEach(([key, recipe]) => {
  const card = document.createElement('a');
  card.className = 'recipe-card';
  card.href = `recipe.html?menu=${key}`;
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}">
    <div class="card-body">
      <h3>${recipe.title}</h3>
      <p>${recipe.description}</p>
    </div>
  `;
  recipeList.appendChild(card);
});
