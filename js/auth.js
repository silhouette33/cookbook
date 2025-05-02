// js/auth.js
document.addEventListener("DOMContentLoaded", () => {
    const currentUser = localStorage.getItem("cookbookUser");
    const nav = document.querySelector("nav.menu");
  
    if (nav) {
      // 로그인된 경우
      if (currentUser) {
        // 기존 Login 링크 제거
        const loginLink = nav.querySelector("a[href='login.html']");
        if (loginLink) loginLink.remove();
  
        // My Page 추가
        const myPage = document.createElement("a");
        myPage.href = "mypage.html";
        myPage.textContent = "My Page";
        nav.appendChild(myPage);
  
        // Logout 추가
        const logout = document.createElement("a");
        logout.href = "#";
        logout.textContent = "Logout";1 
        logout.onclick = () => {
          localStorage.removeItem("cookbookUser");
          location.reload();
        };
        nav.appendChild(logout);
      }
    }
  });
  