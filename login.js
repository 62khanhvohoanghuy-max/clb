// ===== NTH EC LOGIN PAGE JS =====
const API_LOGIN = "https://68aac601909a5835049cf632.mockapi.io/login";

// Toggle password visibility
document.getElementById("toggle-pw").addEventListener("click", () => {
  const pw = document.getElementById("password");
  pw.type = pw.type === "password" ? "text" : "password";
});

// Allow Enter key to submit
document.getElementById("password").addEventListener("keydown", (e) => {
  if (e.key === "Enter") login();
});
document.getElementById("username").addEventListener("keydown", (e) => {
  if (e.key === "Enter") login();
});

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorEl  = document.getElementById("login-error");
  const loginBtn = document.getElementById("login-btn");
  const loginText    = document.getElementById("login-text");
  const loginSpinner = document.getElementById("login-spinner");

  // Clear previous error
  errorEl.style.display = "none";

  if (!username || !password) {
    errorEl.innerText = "⚠️ Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.";
    errorEl.style.display = "flex";
    return;
  }

  // Loading state
  loginBtn.disabled = true;
  loginText.style.display = "none";
  loginSpinner.style.display = "inline";

  fetch(API_LOGIN)
    .then(res => res.json())
    .then(data => {
      const user = data.find(u => u.username === username && u.password === password);

      if (user) {
        if (user.role === "admin") {
          window.location.href = "admin.html";
        } else {
          window.location.href = "mem.html";
        }
      } else {
        errorEl.innerText = "❌ Tên đăng nhập hoặc mật khẩu không đúng.";
        errorEl.style.display = "flex";
        loginBtn.disabled = false;
        loginText.style.display = "inline";
        loginSpinner.style.display = "none";
      }
    })
    .catch(() => {
      errorEl.innerText = "⚠️ Lỗi kết nối máy chủ. Vui lòng thử lại.";
      errorEl.style.display = "flex";
      loginBtn.disabled = false;
      loginText.style.display = "inline";
      loginSpinner.style.display = "none";
    });
}