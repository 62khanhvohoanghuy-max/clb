// ===== NTH EC CMS PAGE JS =====
// MockAPI stores everything in contents[0] as one big JSON object.
// To CRUD news/events, we: fetch → modify the array → PUT back.

const API_CONTENTS = "https://68aac601909a5835049cf632.mockapi.io/contents";
let currentData = null;  // data[0] object cached here
let currentDataId = null; // the mockapi ID of data[0]

// ========================
// LOAD DATA
// ========================
function loadData() {
  document.getElementById("news-list").innerHTML   = '<div class="cms-loading">⏳ Đang tải...</div>';
  document.getElementById("events-list").innerHTML = '<div class="cms-loading">⏳ Đang tải...</div>';

  fetch(API_CONTENTS)
    .then(res => res.json())
    .then(data => {
      currentData   = data[0];
      currentDataId = data[0].id;

      renderNewsList(currentData.news || []);
      renderEventsList(currentData.events || []);
    })
    .catch(() => showToast("Lỗi kết nối máy chủ!", "error"));
}

// ========================
// PUT (save whole data[0] back)
// ========================
function putData(updatedData) {
  return fetch(`${API_CONTENTS}/${currentDataId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData)
  }).then(res => res.json());
}

// ========================
// TABS
// ========================
document.querySelectorAll(".cms-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".cms-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".cms-panel").forEach(p => p.style.display = "none");
    tab.classList.add("active");
    document.getElementById("panel-" + tab.dataset.tab).style.display = "block";
  });
});

// ========================
// IMAGE PREVIEW helper
// ========================
document.getElementById("news-image").addEventListener("input", function() {
  const preview = document.getElementById("news-img-preview");
  const img = document.getElementById("news-preview-img");
  if (this.value) {
    img.src = this.value;
    preview.style.display = "block";
  } else {
    preview.style.display = "none";
  }
});

// ========================
// NEWS – RENDER LIST
// ========================
function renderNewsList(news) {
  document.getElementById("news-count").innerText = news.length;
  const list = document.getElementById("news-list");

  if (news.length === 0) {
    list.innerHTML = `
      <div class="cms-empty">
        <div class="cms-empty-icon">📭</div>
        <p>Chưa có bài viết nào. Thêm bài đầu tiên!</p>
      </div>`;
    return;
  }

  list.innerHTML = news.map((item, i) => `
    <div class="cms-item" id="news-item-${i}">
      ${item.image
        ? `<img src="${item.image}" alt="" class="cms-item-thumb" onerror="this.style.display='none'">`
        : `<div class="cms-item-thumb-placeholder">📰</div>`
      }
      <div class="cms-item-body">
        <div class="cms-item-title">${item.title || 'Chưa có tiêu đề'}</div>
        <div class="cms-item-meta">
          <span>${(item.content || '').substring(0, 80)}${item.content && item.content.length > 80 ? '...' : ''}</span>
        </div>
      </div>
      <div class="cms-item-actions">
        <button class="cms-edit-btn" onclick="editNews(${i})">✏️ Sửa</button>
        <button class="cms-delete-btn" onclick="confirmDeleteNews(${i}, '${(item.title || '').replace(/'/g, "\\'")}')">🗑️ Xóa</button>
      </div>
    </div>
  `).join('');
}

// ========================
// NEWS – SAVE (Add or Edit)
// ========================
function saveNews() {
  const title   = document.getElementById("news-title").value.trim();
  const image   = document.getElementById("news-image").value.trim();
  const content = document.getElementById("news-content").value.trim();
  const editIdx = parseInt(document.getElementById("news-edit-index").value);

  if (!title) return showToast("Vui lòng nhập tiêu đề!", "error");
  if (!content) return showToast("Vui lòng nhập nội dung!", "error");

  const btn = document.querySelector("#panel-news .btn-primary");
  btn.disabled = true;
  document.getElementById("news-save-text").style.display = "none";
  document.getElementById("news-save-spinner").style.display = "inline";

  const newsItem = { title, image, content };
  const newsList = [...(currentData.news || [])];

  if (editIdx >= 0) {
    newsList[editIdx] = newsItem;
  } else {
    newsList.push(newsItem);
  }

  const updated = { ...currentData, news: newsList };

  putData(updated)
    .then(() => {
      currentData = updated;
      renderNewsList(newsList);
      clearNewsForm();
      showToast(editIdx >= 0 ? "✅ Đã cập nhật bài viết!" : "✅ Đã thêm bài viết mới!", "success");
    })
    .catch(() => showToast("Lỗi khi lưu dữ liệu!", "error"))
    .finally(() => {
      btn.disabled = false;
      document.getElementById("news-save-text").style.display = "inline";
      document.getElementById("news-save-spinner").style.display = "none";
    });
}

// ========================
// NEWS – EDIT (populate form)
// ========================
function editNews(index) {
  const item = currentData.news[index];
  document.getElementById("news-edit-index").value = index;
  document.getElementById("news-title").value   = item.title   || '';
  document.getElementById("news-image").value   = item.image   || '';
  document.getElementById("news-content").value = item.content || '';

  if (item.image) {
    document.getElementById("news-preview-img").src = item.image;
    document.getElementById("news-img-preview").style.display = "block";
  }

  document.getElementById("news-form-title").innerText  = "✏️ Chỉnh sửa bài viết";
  document.getElementById("news-save-text").innerText   = "💾 Lưu thay đổi";
  document.getElementById("news-cancel-btn").style.display = "inline-flex";

  // Scroll to form
  document.querySelector("#panel-news .cms-form-card").scrollIntoView({ behavior: "smooth", block: "start" });
}

function cancelNewsEdit() {
  clearNewsForm();
}
function clearNewsForm() {
  document.getElementById("news-edit-index").value = -1;
  document.getElementById("news-title").value   = '';
  document.getElementById("news-image").value   = '';
  document.getElementById("news-content").value = '';
  document.getElementById("news-img-preview").style.display = "none";
  document.getElementById("news-form-title").innerText  = "✏️ Thêm tin tức mới";
  document.getElementById("news-save-text").innerText   = "+ Thêm bài viết";
  document.getElementById("news-cancel-btn").style.display = "none";
}

// ========================
// NEWS – DELETE
// ========================
function confirmDeleteNews(index, title) {
  document.getElementById("modal-text").innerText = `Xóa bài viết "${title}"? Hành động này không thể hoàn tác.`;
  document.getElementById("modal-overlay").style.display = "flex";

  document.getElementById("modal-confirm-btn").onclick = () => {
    const newsList = [...(currentData.news || [])];
    newsList.splice(index, 1);
    const updated = { ...currentData, news: newsList };

    putData(updated).then(() => {
      currentData = updated;
      renderNewsList(newsList);
      closeModal();
      showToast("🗑️ Đã xóa bài viết.", "info");
    }).catch(() => showToast("Lỗi khi xóa!", "error"));
  };
}

// ========================
// EVENTS – RENDER LIST
// ========================
function renderEventsList(events) {
  document.getElementById("events-count").innerText = events.length;
  const list = document.getElementById("events-list");

  if (events.length === 0) {
    list.innerHTML = `
      <div class="cms-empty">
        <div class="cms-empty-icon">📭</div>
        <p>Chưa có sự kiện nào. Thêm sự kiện đầu tiên!</p>
      </div>`;
    return;
  }

  list.innerHTML = events.map((item, i) => `
    <div class="cms-item" id="event-item-${i}">
      ${item.image
        ? `<img src="${item.image}" alt="" class="cms-item-thumb" onerror="this.style.display='none'">`
        : `<div class="cms-item-thumb-placeholder">🎉</div>`
      }
      <div class="cms-item-body">
        <div class="cms-item-title">${item.title || 'Chưa có tên sự kiện'}</div>
        <div class="cms-item-meta">
          ${item.date ? `<span>📅 ${item.date}</span>` : ''}
          ${item.time ? `<span>🕒 ${item.time}</span>` : ''}
          ${item.location ? `<span>📍 ${item.location}</span>` : ''}
        </div>
      </div>
      <div class="cms-item-actions">
        <button class="cms-edit-btn" onclick="editEvent(${i})">✏️ Sửa</button>
        <button class="cms-delete-btn" onclick="confirmDeleteEvent(${i}, '${(item.title || '').replace(/'/g, "\\'")}')">🗑️ Xóa</button>
      </div>
    </div>
  `).join('');
}

// ========================
// EVENTS – SAVE
// ========================
function saveEvent() {
  const title       = document.getElementById("event-title").value.trim();
  const date        = document.getElementById("event-date").value.trim();
  const time        = document.getElementById("event-time").value.trim();
  const location    = document.getElementById("event-location").value.trim();
  const image       = document.getElementById("event-image").value.trim();
  const description = document.getElementById("event-description").value.trim();
  const editIdx     = parseInt(document.getElementById("event-edit-index").value);

  if (!title) return showToast("Vui lòng nhập tên sự kiện!", "error");
  if (!description) return showToast("Vui lòng nhập mô tả!", "error");

  const btn = document.querySelector("#panel-events .btn-primary");
  btn.disabled = true;
  document.getElementById("event-save-text").style.display = "none";
  document.getElementById("event-save-spinner").style.display = "inline";

  const eventItem = { title, date, time, location, image, description };
  const eventsList = [...(currentData.events || [])];

  if (editIdx >= 0) {
    eventsList[editIdx] = eventItem;
  } else {
    eventsList.push(eventItem);
  }

  const updated = { ...currentData, events: eventsList };

  putData(updated)
    .then(() => {
      currentData = updated;
      renderEventsList(eventsList);
      clearEventForm();
      showToast(editIdx >= 0 ? "✅ Đã cập nhật sự kiện!" : "✅ Đã thêm sự kiện mới!", "success");
    })
    .catch(() => showToast("Lỗi khi lưu dữ liệu!", "error"))
    .finally(() => {
      btn.disabled = false;
      document.getElementById("event-save-text").style.display = "inline";
      document.getElementById("event-save-spinner").style.display = "none";
    });
}

// ========================
// EVENTS – EDIT
// ========================
function editEvent(index) {
  const item = currentData.events[index];
  document.getElementById("event-edit-index").value     = index;
  document.getElementById("event-title").value          = item.title       || '';
  document.getElementById("event-date").value           = item.date        || '';
  document.getElementById("event-time").value           = item.time        || '';
  document.getElementById("event-location").value       = item.location    || '';
  document.getElementById("event-image").value          = item.image       || '';
  document.getElementById("event-description").value    = item.description || '';

  document.getElementById("event-form-title").innerText  = "✏️ Chỉnh sửa sự kiện";
  document.getElementById("event-save-text").innerText   = "💾 Lưu thay đổi";
  document.getElementById("event-cancel-btn").style.display = "inline-flex";

  document.querySelector("#panel-events .cms-form-card").scrollIntoView({ behavior: "smooth", block: "start" });
}

function cancelEventEdit() {
  clearEventForm();
}
function clearEventForm() {
  document.getElementById("event-edit-index").value = -1;
  ["event-title","event-date","event-time","event-location","event-image","event-description"]
    .forEach(id => document.getElementById(id).value = '');
  document.getElementById("event-form-title").innerText  = "✏️ Thêm sự kiện mới";
  document.getElementById("event-save-text").innerText   = "+ Thêm sự kiện";
  document.getElementById("event-cancel-btn").style.display = "none";
}

// ========================
// EVENTS – DELETE
// ========================
function confirmDeleteEvent(index, title) {
  document.getElementById("modal-text").innerText = `Xóa sự kiện "${title}"? Hành động này không thể hoàn tác.`;
  document.getElementById("modal-overlay").style.display = "flex";

  document.getElementById("modal-confirm-btn").onclick = () => {
    const eventsList = [...(currentData.events || [])];
    eventsList.splice(index, 1);
    const updated = { ...currentData, events: eventsList };

    putData(updated).then(() => {
      currentData = updated;
      renderEventsList(eventsList);
      closeModal();
      showToast("🗑️ Đã xóa sự kiện.", "info");
    }).catch(() => showToast("Lỗi khi xóa!", "error"));
  };
}

// ========================
// MODAL CLOSE
// ========================
function closeModal() {
  document.getElementById("modal-overlay").style.display = "none";
}
document.getElementById("modal-overlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modal-overlay")) closeModal();
});

// ========================
// TOAST
// ========================
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// ========================
// SIDEBAR TOGGLE
// ========================
document.getElementById("sidebar-toggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

// ========================
// INIT
// ========================
loadData();
