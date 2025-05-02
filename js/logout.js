function logout() {
    localStorage.removeItem("cookbookUser");
    location.href = "login.html";
  }
  