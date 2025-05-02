// js/login.js
function login() {
    const nickname = document.getElementById("nicknameInput").value.trim();
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
      return;
    }
  
    // 현재 유저 저장
    localStorage.setItem("cookbookUser", nickname);
  
    // 사용자 데이터 구조 만들기
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (!users[nickname]) {
      users[nickname] = { favorites: [] };
    }
    localStorage.setItem("users", JSON.stringify(users));
  
    alert(nickname + "님 환영합니다!");
    location.href = "index.html";
  }
  