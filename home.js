const apiContent = "https://68aac601909a5835049cf632.mockapi.io/contents";

fetch(apiContent)
    .then(res => res.json())
    .then(data => {
        const home = data[0];

        // ==================== NEWS SECTION (có content) ====================
        // News 1
        document.getElementById("news1").innerText = home.news[0].title;
        document.getElementById("clubImage").src = home.news[0].image;
        // Lưu content vào data attribute để sau này có thể dùng modal hoặc link
        document.getElementById("news1").dataset.content = home.news[0].content;

        // News 2
        document.getElementById("news2").innerText = home.news[1].title;
        document.getElementById("clubImage2").src = home.news[1].image;
        document.getElementById("news2").dataset.content = home.news[1].content;

        // News 3
        document.getElementById("news3").innerText = home.news[2].title;
        document.getElementById("clubImage3").src = home.news[2].image;
        document.getElementById("news3").dataset.content = home.news[2].content;

        // ==================== EVENTS SECTION (giữ nguyên) ====================
        const eventsContainer = document.getElementById("events-container");
        eventsContainer.innerHTML = home.events.map(event => `
            <article class="news-card blog-card event-card">
                <img src="${event.image}" alt="${event.title}">
                <div class="news-content">
                    <div class="blog-tag date">${event.date}</div>
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <div class="event-meta">
                        <span>🕒 ${event.time}</span>
                        <span>📍 ${event.location}</span>
                    </div>
                    <a href="events.html" class="btn-register">Đăng ký ngay</a>
                </div>
            </article>
        `).join('');
    })
    .catch(err => console.error("Lỗi tải dữ liệu:", err));

// Phần còn lại giữ nguyên (updateMemberCount + mobile menu)
function updateMemberCount() {
    fetch("https://68aac601909a5835049cf632.mockapi.io/login")
        .then(res => res.json())
        .then(data => {
            document.getElementById("members").innerText = data.length;
        })
        .catch(err => console.error("Lỗi cập nhật thành viên:", err));
}

updateMemberCount();
setInterval(updateMemberCount, 5000);

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});