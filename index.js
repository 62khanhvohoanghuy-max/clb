// ===== NTH EC HOME PAGE JS =====
const API_CONTENT = "https://68aac601909a5835049cf632.mockapi.io/contents";
const API_LOGIN   = "https://68aac601909a5835049cf632.mockapi.io/login";

// ---- Fetch club info & render ----
fetch(API_CONTENT)
  .then(res => res.json())
  .then(data => {
    const home = data[0];

    // Hero slogan
    if (home.slogan) {
      document.getElementById("hero-slogan").innerText = home.slogan;
    }

    // Stats strip
    if (home.meetingTime) document.getElementById("stat-meeting").innerText = home.meetingTime;
    if (home.location)    document.getElementById("stat-location").innerText = home.location;
    if (home.foundedYear) document.getElementById("stat-founded").innerText = home.foundedYear;

    // About
    if (home.description) document.getElementById("about-desc").innerText = home.description;

    // Contacts
    if (home.contactEmail) {
      document.getElementById("contact-email").innerText = home.contactEmail;
      document.getElementById("contact-email-link").href = "mailto:" + home.contactEmail;
      document.getElementById("footer-email").innerText = home.contactEmail;
      document.getElementById("footer-email").href = "mailto:" + home.contactEmail;
    }
    if (home.instagram) {
      document.getElementById("contact-instagram").innerText = "@" + home.instagram;
      document.getElementById("contact-insta-link").href = "https://instagram.com/" + home.instagram;
      document.getElementById("footer-instagram").innerText = "@" + home.instagram;
    }

    // News grid
    const newsGrid = document.getElementById("news-grid");
    const tagColors = ["tag-rose", "tag-gold", "tag-sage"];//mảng màu tag: chứa class css//
    const tagNames  = ["Sự kiện", "Workshop", "Cộng đồng"];//map() dùng để lặp từng phần trong mảng//
    newsGrid.innerHTML = home.news.map((item, i) => ` 
      <article class="news-card"> 
        <div class="img-wrap">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="news-body">
          <span class="tag ${tagColors[i % tagColors.length]}">${tagNames[i % tagNames.length]}</span>
          <h3>${item.title}</h3>
          <p>${item.content.substring(0, 120)}...</p>
          <a href="news-detail.html?id=${i}" class="read-more">Đọc thêm →</a>
        </div>
      </article>
    `).join('');//Template string// //${} cho chèn dũ liệu js vào chuỗi html// //substring cắt chuỗi lấy 120 kí tự đầu tiên//

    // Events list
    const eventsList = document.getElementById("events-list");
    eventsList.innerHTML = home.events.map((event, i) => {
      const dateParts = event.date ? event.date.split('/') : ['', ''];
      const day   = dateParts[0] || '??';
      const month = dateParts[1] ? 'Tháng ' + dateParts[1] : '';
      return `
      <div class="event-row">
        <div class="event-date-col">
          <div class="event-day">${day}</div>
          <div class="event-month">${month}</div>
        </div>
        <div class="event-info">
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <div class="event-meta">
            <span>🕒 ${event.time}</span>
            <span>📍 ${event.location}</span>
          </div>
        </div>
        <div class="event-action">
          <a href="event-detail.html?id=${i}" class="btn-register">Xem chi tiết</a>
        </div>
      </div>
      `;
    }).join('');
  })
  .catch(err => console.error("Lỗi tải dữ liệu:", err));

// ---- Fetch member count ----
  function loadMemberCount() {
    fetch(API_LOGIN) //gửi request tới api//
      .then(res => res.json()) //Chuyển dữ liệu JSON thành object/mảng JavaScript.//
      .then(data => {
        document.getElementById("stat-members").innerText = data.length;//đếm số phần tử trong mảng//
      }) //getElementById("stat-members"): tìm phần tử trong html//
      .catch(err => console.error("Lỗi đếm thành viên:", err));
  }
loadMemberCount();
setInterval(loadMemberCount, 5000); //5s là hiện lại members//

// ---- Navbar scroll effect ----
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ---- Hamburger menu ----
const hamburger = document.getElementById("hamburger");
const navMenu   = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("open");
});
