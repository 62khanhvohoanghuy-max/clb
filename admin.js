// ===== NTH EC ADMIN DASHBOARD JS =====
const API_CONTENT = "https://68aac601909a5835049cf632.mockapi.io/contents";
const API_LOGIN   = "https://68aac601909a5835049cf632.mockapi.io/login";

// Fetch club info
fetch(API_CONTENT)
  .then(res => res.json())
  .then(data => {
    const home = data[0];

    // Stats
    if (home.foundedYear) document.getElementById("dash-founded").innerText = home.foundedYear;
    if (home.meetingTime) document.getElementById("dash-meeting").innerText = home.meetingTime;
    if (home.location)    document.getElementById("dash-location").innerText = home.location;

    // Info rows
    if (home.clubName)    document.getElementById("info-name").innerText = home.clubName;
    if (home.slogan)      document.getElementById("info-slogan").innerText = home.slogan;
    if (home.contactEmail) document.getElementById("info-email").innerText = home.contactEmail;
    if (home.description) document.getElementById("info-desc").innerText = home.description;

    // News mini list
    const newsList = document.getElementById("news-mini-list");
    newsList.innerHTML = home.news.map((item, i) => `
      <a href="news-detail.html?id=${i}" class="news-mini-item">
        <img src="${item.image}" alt="${item.title}" class="news-mini-img">
        <span class="news-mini-title">${item.title}</span>
      </a>
    `).join('');

    // Events table
    const tbody = document.getElementById("events-tbody");
    tbody.innerHTML = home.events.map(event => `
      <tr>
        <td><strong>${event.title}</strong></td>
        <td>${event.date}</td>
        <td>${event.time}</td>
        <td>${event.location}</td>
      </tr>
    `).join('');
  })
  .catch(err => console.error("Lỗi tải club info:", err));

// Fetch member count
function loadMemberCount() {
  fetch(API_LOGIN)
    .then(res => res.json())
    .then(data => {
      document.getElementById("total-members").innerText = data.length;
    })
    .catch(err => console.error(err));
}
loadMemberCount();
setInterval(loadMemberCount, 5000);

// Sidebar toggle (mobile)
document.getElementById("sidebar-toggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});
