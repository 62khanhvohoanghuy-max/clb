// ===== NTH EC MEMBERS PAGE JS =====
const API = "https://68aac601909a5835049cf632.mockapi.io/login";

let allMembers = [];

// Load & render members
function loadMembers() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      allMembers = data;

      // Stats
      document.getElementById("total-members").innerText = data.length;
      document.getElementById("count-admin").innerText  = data.filter(m => m.role === "admin").length;
      document.getElementById("count-member").innerText = data.filter(m => m.role === "member").length;

      renderTable(data);
    })
    .catch(err => console.error("Lỗi load thành viên:", err));
}

function renderTable(data) {
  const tbody = document.getElementById("member-list");

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:32px; color:var(--muted);">Không có thành viên nào.</td></tr>`;
    return;
  }

  tbody.innerHTML = data.map((m, i) => `
    <tr>
      <td style="color:var(--muted); font-size:0.8rem;">${i + 1}</td>
      <td>
        <div class="member-name-cell">
          <div class="member-avatar">${(m.username || '?')[0].toUpperCase()}</div>
          <strong>${m.username}</strong>
        </div>
      </td>
      <td>${m.email}</td>
      <td><span class="role-tag ${m.role}">${m.role === 'admin' ? 'Admin' : 'Member'}</span></td>
      <td><button class="btn-delete" onclick="confirmDelete('${m.id}', '${m.username}')">Xóa</button></td>
    </tr>
  `).join('');
}

// Search filter
function filterTable() {
  const q = document.getElementById("search-input").value.toLowerCase();
  const filtered = allMembers.filter(m =>
    m.username.toLowerCase().includes(q) || m.email.toLowerCase().includes(q)
  );
  renderTable(filtered);
}

// Add member
async function addMember() {
  const name     = document.getElementById("new-name").value.trim();
  const role     = document.getElementById("new-role").value;
  const email    = document.getElementById("new-email").value.trim();
  const password = document.getElementById("new-password").value.trim();
  const msgEl    = document.getElementById("form-message");
  const addBtn   = document.getElementById("add-btn");

  msgEl.style.display = "none";

  // Basic validation
  if (!name) return showMsg("Vui lòng nhập họ tên thành viên.", "error");
  if (name.includes("@")) return showMsg("Tên không được là email.", "error");
  if (!role) return showMsg("Vui lòng chọn vai trò.", "error");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showMsg("Email không hợp lệ.", "error");
  if (!password) return showMsg("Vui lòng nhập mật khẩu.", "error");

  // Check duplicate email
  const existing = await fetch(API).then(r => r.json());
  if (existing.some(m => m.email.toLowerCase() === email.toLowerCase())) {
    return showMsg("Email này đã tồn tại trong danh sách.", "error");
  }

  // Loading
  addBtn.disabled = true;
  document.getElementById("add-text").style.display = "none";
  document.getElementById("add-spinner").style.display = "inline";

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: name, role: role, email: email, password: password })
  })
    .then(res => res.json())
    .then(() => {
      showMsg("✅ Thêm thành viên thành công!", "success");
      // Clear form
      document.getElementById("new-name").value = "";
      document.getElementById("new-role").value = "";
      document.getElementById("new-email").value = "";
      document.getElementById("new-password").value = "";
      loadMembers();
    })
    .catch(() => showMsg("Lỗi kết nối máy chủ.", "error"))
    .finally(() => {
      addBtn.disabled = false;
      document.getElementById("add-text").style.display = "inline";
      document.getElementById("add-spinner").style.display = "none";
    });
}

function showMsg(text, type) {
  const msgEl = document.getElementById("form-message");
  msgEl.innerText = text;
  msgEl.className = "form-message " + type;
  msgEl.style.display = "block";
}

// Delete with modal
let pendingDeleteId = null;

function confirmDelete(id, name) {
  pendingDeleteId = id;
  document.getElementById("modal-text").innerText = `Bạn có chắc muốn xóa thành viên "${name}" không? Hành động này không thể hoàn tác.`;
  document.getElementById("modal-overlay").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal-overlay").style.display = "none";
  pendingDeleteId = null;
}

document.getElementById("confirm-delete-btn").addEventListener("click", () => {
  if (!pendingDeleteId) return;
  fetch(`${API}/${pendingDeleteId}`, { method: "DELETE" })
    .then(res => {
      if (res.ok) {
        closeModal();
        loadMembers();
        showToast("Đã xóa thành viên thành công.", "success");
      } else {
        showToast("Không thể xóa. Thử lại sau.", "error");
      }
    })
    .catch(() => showToast("Lỗi kết nối mạng.", "error"));
});

// Close modal on overlay click
document.getElementById("modal-overlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modal-overlay")) closeModal();
});

// Toast notification
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// Sidebar toggle
document.getElementById("sidebar-toggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

// Init
loadMembers();