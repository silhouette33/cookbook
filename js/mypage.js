// js/mypage.js
document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("cookbookUser");
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    const list = document.getElementById("favorites-list");
    const title = document.getElementById("mypage-title");
  
    if (!user || !users[user]) {
      title.textContent = "로그인이 필요합니다.";
      list.innerHTML = "";
      return;
    }
  
    title.textContent = `${user}님의 마이페이지`;
  
    const favorites = users[user].favorites || [];
    if (favorites.length === 0) {
      list.innerHTML = "<li>즐겨찾기한 레시피가 없습니다.</li>";
    } else {
      favorites.forEach(menu => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `recipe.html?menu=${menu}`;
        link.textContent = menu;
        li.appendChild(link);
        list.appendChild(li);
      });
    }
  });
  