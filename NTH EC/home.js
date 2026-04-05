
fetch("https://68aac601909a5835049cf632.mockapi.io/contents")
  .then(res => res.json())
  .then(data => {
    const home = data[0];

    clubName.innerText = home.clubName;
    slogan.innerText = home.slogan;
    desc.innerText = home.description;
    meetingTime.innerText = home.meetingTime;
    locationn.innerText = home.location;
    members.innerText = home.members;
    events.innerText = home.events;
    foundedYear.innerText = home.foundedYear;
    contactEmail.innerText = home.contactEmail;
    instagram.innerText = home.instagram;
    news1.innerText = home.news1;
    clubImage.src = home.image;
    news2.innerText = home.news2;
    clubImage2.src = home.image2;
    news3.innerText = home.news3;
    clubImage3.src = home.image3;
  });
  function updateMemberCount() {
    fetch(api)
    .then(response => response.json())
    .then(data => {
        document.getElementById("members").innerText = data.length;
    })
    .catch(error => console.log(error));
}

updateMemberCount();

/* tự cập nhật mỗi 3 giây */
setInterval(updateMemberCount, 3000);
