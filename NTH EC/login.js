const style = document.createElement("style");

style.innerHTML = `

body{
font-family:Arial;
background:linear-gradient(135deg,#4facfe,#00f2fe);
height:100vh;
display:flex;
justify-content:center;
align-items:center;
margin:0;
}

.login-container{
background:white;
padding:40px;
border-radius:10px;
width:320px;
box-shadow:0 10px 25px rgba(0,0,0,0.2);
text-align:center;
}

.login-container h2{
margin-bottom:20px;
}

.login-container input{
width:100%;
padding:12px;
margin:10px 0;
border-radius:6px;
border:1px solid #ccc;
}

.login-container button{
width:100%;
padding:12px;
background:#4facfe;
color:white;
border:none;
border-radius:6px;
cursor:pointer;
}

.login-container button:hover{
background:#2b7de9;
}

#message{
margin-top:10px;
color:red;
}

`;

document.head.appendChild(style);

function login(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

fetch("https://68aac601909a5835049cf632.mockapi.io/login")
.then(res=>res.json())
.then(data=>{

let user=data.find(u =>
u.username===username && u.password===password
);

if(user){

if(user.role==="admin"){
window.location.href="/music/NTH EC/admin.html";
}

else if(user.role==="member"){
window.location.href="/music/NTH EC/home.html";
}

}

else{
document.getElementById("message").innerText="Login failed";
}

});

}