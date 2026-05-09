// ===== NTH EC HUB PAGE JS =====
const API_CONTENT = "https://68aac601909a5835049cf632.mockapi.io/contents";

fetch(API_CONTENT)
  .then(res => res.json())
  .then(data => {
    const home = data[0];
    const grid = document.getElementById("hub-grid");
    let html = '';

    // Render News cards
    home.news.forEach((item, i) => {
      html += `
        <a href="news-detail.html?id=${i}" class="hub-card" data-type="news">
          <div class="img-wrap">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="hub-card-body">
            <span class="tag tag-rose">📰 Tin tức</span>
            <h3>${item.title}</h3>
            <p>${item.content}</p>
          </div>
          <div class="hub-card-footer">
            <span></span>
            <span class="hub-read-more">Đọc tiếp →</span>
          </div>
        </a>
      `;
    });

    // Render Event cards
    home.events.forEach((item, i) => {
      html += `
        <a href="event-detail.html?id=${i}" class="hub-card" data-type="event">
          <div class="img-wrap">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="hub-card-body">
            <span class="tag tag-lavender">🎉 Sự kiện</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <div class="hub-card-footer">
            <div class="hub-event-meta">
              <span>📅 ${item.date}</span>
              <span>🕒 ${item.time}</span>
            </div>
            <span class="hub-read-more">Xem chi tiết →</span>
          </div>
        </a>
      `;
    });

    grid.innerHTML = html;

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        let visible = 0;

        document.querySelectorAll('.hub-card').forEach(card => {
          const show = filter === 'all' || card.dataset.type === filter;
          card.style.display = show ? 'flex' : 'none';
          if (show) visible++;
        });

        // Show empty state if no results
        document.getElementById("empty-state").style.display = visible === 0 ? 'block' : 'none';
      });
    });
  })
  .catch(err => console.error("Lỗi tải Hub:", err));

// Navbar scroll
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
});

// Hamburger
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("hamburger").classList.toggle("active");
  document.getElementById("nav-menu").classList.toggle("open");
});