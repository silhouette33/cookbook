// js/search.js
import { recipes } from "./recipe.js";  // ES Module 방식 or 전역 객체로 가져오면 생략

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");

  document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim().toLowerCase();

    let foundKey = null;

    for (const key in recipes) {
      const title = recipes[key].title.toLowerCase();
      if (query === title) {
        foundKey = key;
        break;
      }
    }

    if (foundKey) {
      // 해당 레시피로 이동
      window.location.href = `recipe.html?key=${foundKey}`;
    } else {
      alert("일치하는 레시피를 찾을 수 없습니다.");
    }
  });
});
