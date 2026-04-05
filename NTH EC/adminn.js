fetch("https://68aac601909a5835049cf632.mockapi.io/contents")
  .then(res => res.json())
  .then(data => {
    const admin = data[0];

    clubName.innerText = admin.clubName;
    slogan.innerText = admin.slogan;
    desc.innerText = admin.description;
    meetingTime.innerText = admin.meetingTime;
    locationn.innerText = admin.location;
    members.innerText = admin.members;
    events.innerText = admin.events;
    foundedYear.innerText = admin.foundedYear;
    contactEmail.innerText = admin.contactEmail;
    news1.innerText = admin.news1;
    clubImage.src = admin.image;
    news2.innerText = admin.news2;
    clubImage2.src = admin.image2;
    news3.innerText = admin.news3;
    clubImage3.src = admin.image3;
  });