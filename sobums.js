

// Goi Fetch API lay du lieu


const token = "Bearer BQAQXrGvmARwydHkeb22CSzNqj36cPxzINurvuNEN1GbWspoKHZk4J8NN0L5MeDyqLf67jIS8fIuyslYNzPEW3q8V4mkVEeGjabkgjSvVHF-IzDClYlR2iBAX-By2EWRMjfTqoaBurI";
const root = document.getElementById("container");
const albumIds = [
    "4a6NzYL1YHRUgx9e3YZI6I",
    "5H7ixXZfsNMGbIE5OBSpcb",
    "0S0KGZnfBGSIssfF54WSJh",
    "2MHUaRi9OCyTN02SoyRRBJ",
    "1hmW4opQGq4hIYTbEWsyqW",
    "6Lp82GTJXzgtIopT0g7N7k",
    "6yetqbA9vli7RLoUWYZLsq",
    "1ne2D0NxoGyZd31gAM4HNd",
    "01sfgrNbnnPUEyz6GZYlt9",
    "5zClcGCSWj926AMjvBNSLc",
    "3iPSVi54hsacKKl1xIR2eH",
    "21jF5jlMtzo94wbxmJ18aa",
    "4ASxFYWyk2216OloHoaSh8",
    "1nAQbHeOWTfQzbOoFrvndW",
    "5EYKrEDnKhhcNxGedaRQeK",
    "2fYhqwDWXjbpjaIJPEfKFw",
    "0S4pP8MBY9p7ngFWIZQAJv",
    "3eZPoSq3mp4X22bvX9s3E4",
    "5VoeRuTrGhTbKelUfwymwu",
    "7kFyd5oyJdVX2pIi6P4iHE",
    "4eLPsYPBmXABThSJ821sqY",
    "0hvT3yIEysuuvkK73vgdcW",
    "34OkZVpuzBa9y40DCy0LPR",
    "7aJuG4TFXa2hmE4z1yxc3n",
    "7tyTggfGeRZGGUiSK2lN7q",
    "4PgleR09JVnm3zY1fW3XBA",
    "5MwcmF8NLNA5NJHRUAGRD4",
    "2UZre9rniPNke0bwRs1SMf",
    "1R9fympoRsZJGpgNvMcJr2",
    "12QFrU7SbQXV60gqjevhKw",
    "2jNxIyiGLvQz7UPCRUuU76",
    "2pD2Hn4NPvf58NDSdWmUAk",
    "2ODvWsOgouMbaA5xf0RkJe",
    "4yP0hdKOZPNshxUOjY0cZj",
    "0hBRqPYPXhr1RkTDG3n4Mk",
    "5Xd0KCzb0EJtPbUEiyxYVH",
    "5MQBzs5YlZlE28mD9yUItn",
    "3RRrDxe2LPTII2ySlOvlh6",
    "4BbsHmXEghoPPevQjPnHXx",
    "4g1ZRSobMefqF6nelkgibi",
    "3T4tUhGYeRNVUGevb0wThu",
    "1xn54DMo2qIqBuMqHtUsFd",
    "2ANVost0y2y52ema1E9xAZ",
    "1vWMw6pu3err6qqZzI3RhH",
    "6FJxoadUE4JNVwWHghBwnb",
    "3ROfBX6lJLnCmaw1NrP5K9",
    "6s84u2TUpR3wdUv4NgKA2j",
    "1D06fz3cuob62ysTS8k6gu",
    "6rePArBMb5nLWEaY9aQqL4",
    "2fenSS68JI1h4Fo296JfGr"
  ]
  
  const style = document.createElement("style");
  style.textContent = `
  :root { --card-bd:#e8e8e8; --link:#0a58ca; --btn:#0d6efd; --muted:#444; }
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:22px}
  .card{background:#fff;border:1px solid var(--card-bd);border-radius:16px;padding:16px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
  .card img{width:100%;height:auto;border-radius:12px;display:block}
  .card .title{display:block;margin:10px 0 6px;font-weight:800;color:var(--link);text-decoration:underline}
  .card .meta{color:var(--muted);font-size:14px}
  .btn{display:inline-block;margin-top:10px;background:var(--btn);color:#fff;padding:8px 12px;border-radius:10px;font-size:14px;text-decoration:none}
  .btn:hover{filter:brightness(0.95)}
  .tracks{margin-top:10px;padding-top:10px;border-top:1px dashed #ddd;text-align:left}
  .tracks ol{padding-left:18px;margin:0}
  .tracks li{margin:6px 0}
  .tracks .tname{font-weight:700;color:var(--link);text-decoration:underline}
  .tracks audio{display:block;margin-top:4px;width:100%}
  .empty{color:#666;padding:24px 0}
  `;
  document.head.appendChild(style);
  
  Object.assign(root.style, {
    maxWidth: "1200px", margin: "0 auto", padding: "24px",
    fontFamily: "system-ui, -apple-system, Arial, sans-serif"
  });
  

  const getAuthHeader = (t) => t.startsWith("Bearer ") ? t : `Bearer ${t}`;
  const isBase62Id = (s) => /^[A-Za-z0-9]{22}$/.test(s || "");
  const cleanIds = (ids) => ids.map(x => (x||"").trim()).filter(isBase62Id);
  const chunk = (arr, size) => arr.reduce((a,_,i)=> (i%size?a:[...a,arr.slice(i,i+size)]),[]);
  
  async function fetchJSON(url){
    const r = await fetch(url, {
      headers:{ Authorization:getAuthHeader(token), Accept:"application/json" }
    });
    if (!r.ok) {
      const body = await r.text().catch(()=> "");
      console.error("Fetch error:", r.status, url, body);
      throw new Error(`${r.status} ${url}`);
    }
    return r.json();
  }
  

  async function fetchAlbumsByIds(ids){
    const valid = cleanIds(ids);
    if (valid.length === 0) return [];
  
    if (valid.length === 1) {
      const one = await fetchJSON(`https://api.spotify.com/v1/albums/${valid[0]}`);
      return [one];
    }
  
    const batches = chunk(valid, 20); 
    const res = await Promise.all(batches.map(b =>
      fetchJSON(`https://api.spotify.com/v1/albums?ids=${b.join(",")}`).catch(()=>({albums:[]}))
    ));
    return res.flatMap(r => r.albums || []);
  }
  
  
  async function fetchAllAlbumTracks(albumId){
    let url = `https://api.spotify.com/v1/albums/${albumId}/tracks?limit=50`;
    const out = [];
      const data = await fetchJSON(url);
      (data.items || []).forEach(t => out.push(t));
      url = data.next || null;
    return out;
  }
  
  
  function renderTracks(container, tracks){
    const ol = document.createElement("ol");
    tracks.forEach(t => {
      const li = document.createElement("li");
  
      const a = document.createElement("a");
      a.href = t.external_urls?.spotify || `https://open.spotify.com/track/${t.id}`;
      a.target = "_blank"; a.rel = "noopener noreferrer";
      a.textContent = `${t.track_number}. ${t.name}`;
      a.className = "tname";
      li.appendChild(a);
  
      const em = document.createElement("em");
      em.textContent = " — " + (t.artists||[]).map(a=>a.name).join(", ");
      em.style.marginLeft = "6px";
      li.appendChild(em);
  
      if (t.preview_url){
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = t.preview_url;
        li.appendChild(audio);
      }
  
      ol.appendChild(li);
    });
    container.innerHTML = "";
    container.appendChild(ol);
  }
  
  function renderAlbumCard(grid, album){
    const url = album.external_urls?.spotify || `https://open.spotify.com/album/${album.id}`;
    const card = document.createElement("div"); card.className = "card";
  
    const img = document.createElement("img");
    img.src = album.images?.[0]?.url || ""; img.alt = album.name;
  
    const title = document.createElement("a");
    title.href = url; title.target = "_blank"; title.rel = "noopener noreferrer";
    title.textContent = album.name; title.className = "title";
  
    const meta = document.createElement("div"); meta.className = "meta";
    const artistsText = (album.artists||[]).map(a=>a.name).join(", ");
    const year = (album.release_date||"").slice(0,4);
    meta.textContent = `By ${artistsText} • ${year} • ${album.total_tracks} tracks`;
  
    const btn = document.createElement("a");
    btn.href = "#"; btn.className = "btn"; btn.textContent = "Xem bài hát";
  
    const tracksWrap = document.createElement("div");
    tracksWrap.className = "tracks"; tracksWrap.hidden = true;
  
    btn.addEventListener("click", async (e)=>{
      e.preventDefault();
      if (!tracksWrap.dataset.loaded){
        btn.textContent = "Đang tải...";
        try{
          const tracks = await fetchAllAlbumTracks(album.id);
          renderTracks(tracksWrap, tracks);
          tracksWrap.dataset.loaded = "1";
          btn.textContent = "Thu gọn";
          tracksWrap.hidden = false;
        }catch{
          btn.textContent = "Thử lại";
        }
      } else {
        const show = tracksWrap.hidden;
        tracksWrap.hidden = !show;
        btn.textContent = show ? "Thu gọn" : "Xem bài hát";
      }
    });
  
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(btn);
    card.appendChild(tracksWrap);
    grid.appendChild(card);
  }
  
  
  (async function(){
    const grid = document.createElement("div");
    grid.className = "grid";
    root.appendChild(grid);
  
    try {
      const albums = await fetchAlbumsByIds(albumIds);
      if (!albums.length) {
        const msg = document.createElement("div");
        msg.className = "empty";
        msg.textContent = "Không có album hợp lệ. Kiểm tra lại danh sách ID (22 ký tự).";
        root.appendChild(msg);
        return;
      }
      albums.forEach(al => renderAlbumCard(grid, al));
    } catch (e) {
      console.error(e);
      const msg = document.createElement("div");
      msg.className = "empty";
      msg.textContent = "Không tải được dữ liệu (kiểm tra token hoặc ID).";
      root.appendChild(msg);
    }
  })();


