
let TOKEN = "BQAQXrGvmARwydHkeb22CSzNqj36cPxzINurvuNEN1GbWspoKHZk4J8NN0L5MeDyqLf67jIS8fIuyslYNzPEW3q8V4mkVEeGjabkgjSvVHF-IzDClYlR2iBAX-By2EWRMjfTqoaBurI ";
const container = document.getElementById("container");


const artistIds = [
    "06HL4z0CvFAxyc27GXpf02",
    "3TVXtAsR1Inumwj472S9r4",
    "1Xyo4u8uXC1ZmMpatF05PJ",
    "6eUKZXaKkcviH0Ku9w2n3V",
    "1uNFoZAHBGtllmzznpCI3s",
    "6qqNVTkY8uBg9cP3Jd7DAH",
    "66CXWjxzNUsdJxJ2JdwvnR",
    "7dGJo4pcD2V6oG8kP0tJRR",
    "00FQb4jTyendYWaN8pK0wa",
    "41MozSoPIsD1dJM0CLPjZF",
    "4kYSro6naA4h99UJvo89HB",
    "2yNNYQBChuox9A5Ka93BIn",
    "1McMsnEElThX1knmY4oliG",
    "2YZyLoL8N0Wb9xBt1NhZWg",
    "0du5cEVh5yTK9QJze8zA0C",
    "1HY2Jd0NmPuamShAr6KMms",
    "63SNH9m8M034lCGELVC1dm",
    "5FWPIKz9czXWaiNtw45KQs",
    "7gW0r5CkdEUMm42w9XpyZO",
    "5dfZ5uSmzR7VQK0udbAVpf",
    "3eVa5w3URK5duf6eyVDbu9",
    "6UZ0ba50XreR4TM8u322gs",
    "5L1lO4eRHmJ7a0Q6csE5cT",
    "5pKCCKE2ajJHZ9KAiaK11H",
    "4tuJ0bMpJh08umKkEXKUI5",
    "74KM79TiuVKeVCqs8QtB0B",
    "6jJ0s89eD6GaHleKKya26X",
    "4dpARuHxo51G3z768sgnrY",
    "250b0Wlc5Vk0CoUsaCY84M",
    "4gzpq5DPGxSnKTe4SA8HAU",
    "5WUlDfRSoLAfcVSX1WnrxN",
    "26dSoYclwsYLMAKD3tpOr4",
    "4iHNK0tOyZPYnBU7nGAgpQ",
    "5cj0lLjcoR7YOSnhnX0Po5",
    "21trGUfOb8qkRjI4EyF1qm",
    "7at0gkjCnhOBrxwQlJPJ4s",
    "6vWDO969PvNqNYHIOW5v0m",
    "3fMbdgg4jU18AjLCKBhRSm",
    "0hCNtLu0JehylgoiP8L4Gh",
    "1RyvyyTE3xzB2ZywiAwp0i"
  ];
  
  
  fetch("https://api.spotify.com/v1/artists?ids=" + artistIds.join(","), {
    headers: { Authorization: `Bearer ${TOKEN}` }
  })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(({ artists }) => {
      artists.forEach(artist => {
        const artistUrl = artist.external_urls?.spotify || `https://open.spotify.com/artist/${artist.id}`;
  
        const card = document.createElement("div");
        card.style.border = "1px solid #ddd";
        card.style.margin = "20px 0";
        card.style.padding = "12px";
        card.style.borderRadius = "10px";
  
        card.innerHTML = `
          <h2 style="margin:6px 0;">
            <a href="${artistUrl}" target="_blank" rel="noopener">${artist.name}</a>
          </h2>
          ${
            artist.images?.[0]?.url
              ? `<a href="${artistUrl}" target="_blank" rel="noopener"><img src="${artist.images[0].url}" width="220" style="border-radius:8px;"></a>`
              : ""
          }
          <p>Followers: ${artist.followers.total.toLocaleString()}</p>
          <p>Popularity: ${artist.popularity}</p>
          <p>
            <a href="${artistUrl}" target="_blank" rel="noopener">Open on Spotify ↗</a>
          </p>
        `;
  
        // Nút Top Tracks
        const btn = document.createElement("button");
        btn.textContent = "Top Tracks";
        btn.style.marginTop = "8px";
        btn.style.padding = "6px 12px";
        btn.style.cursor = "pointer";
  
        btn.addEventListener("click", async (e) => {
          e.stopPropagation();
  
          let trackList = card.querySelector(".tracks");
          if (trackList) {
            trackList.style.display = trackList.style.display === "none" ? "block" : "none";
            return;
          }
  
          // Fetch top tracks
          const res = await fetch(`https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=VN`, {
            headers: { Authorization: `Bearer ${TOKEN}` }
          });
          if (!res.ok) {
            console.error("Top tracks HTTP", res.status);
            return;
          }
          const data = await res.json();
  
          trackList = document.createElement("div");
          trackList.className = "tracks";
          trackList.style.marginTop = "10px";
          trackList.innerHTML = "<h3>Top Tracks:</h3>";
  
          data.tracks.slice(0, 5).forEach((t, i) => {
            const trackUrl = t.external_urls?.spotify || `https://open.spotify.com/track/${t.id}`;
            const albumUrl = t.album?.external_urls?.spotify || (t.album?.id ? `https://open.spotify.com/album/${t.album.id}` : "#");
  
            const artistsLinks = (t.artists || [])
              .map(a => {
                const aUrl = a.external_urls?.spotify || `https://open.spotify.com/artist/${a.id}`;
                return `<a href="${aUrl}" target="_blank" rel="noopener">${a.name}</a>`;
              })
              .join(", ");
  
            const row = document.createElement("div");
            row.style.margin = "8px 0";
            row.innerHTML = `
              <strong>${i + 1}. <a href="${trackUrl}" target="_blank" rel="noopener">${t.name}</a></strong><br>
              <em>${artistsLinks}</em><br>
              Album: ${t.album?.name ? `<a href="${albumUrl}" target="_blank" rel="noopener">${t.album.name}</a>` : "—"}<br>
              ${
                t.preview_url
                  ? `<audio controls src="${t.preview_url}"></audio>`
                  : `<small>No preview</small>`
              }
            `;
            trackList.appendChild(row);
          });
  
          card.appendChild(trackList);
        });
  
        card.appendChild(btn);
        container.appendChild(card);
      });
    })
    .catch(err => console.error("Artists fetch error:", err));
// let container = document.getElementById("container")
// let artistDiv = document.getElementById("artist");
// fetch(`https://api.spotify.com/v1/artists/${ARTIST_ID}`, {
//     method: "GET",
//     headers: {
//         Authorization: `Bearer ${TOKEN}`
//     }
// })
// fetch(`https://api.spotify.com/v1/artists/${ARTIST_ID}`, {
//     headers: { Authorization: `Bearer ${TOKEN}` }
// })
//     .then(res => res.json())
//     .then(json => {
//         artistDiv.innerHTML = `
//         <h2>${json.name}</h2>
//         ${json.images && json.images[0] ? `<img src="${json.images[0].url}" width="200">` : ""}
//         <p>Followers: ${json.followers.total.toLocaleString()}</p>
//         <p>Popularity: ${json.popularity}</p>
//       `;
//         return fetch(`https://api.spotify.com/v1/artists/${ARTIST_ID}/top-tracks?market=VN`, {
//             headers: { Authorization: `Bearer ${TOKEN}` }
//         });
//     })
//     .then(res => res.json())
//     .then(data => {
//         data.tracks.forEach((t, i) => {
//             let div = document.createElement("div");
//             div.style.margin = "10px 0";
//             div.innerHTML = `
//         <strong>${i + 1}. ${t.name}</strong><br>
//         <em>${t.album.name}</em><br>
//         ${t.preview_url ? `<audio controls src="${t.preview_url}"></audio>` : "<small>No preview</small>"}
//       `;
//             container.appendChild(div);
//         });
//     })

//     .catch(error => console.error("Fetch error:", error));