const api="https://68aac601909a5835049cf632.mockapi.io/login"

function loadMembers(){

fetch(api)

.then(res=>res.json())

.then(data=>{

    let html = ""; 

    data.forEach(m => {
        html += ` 
        <tr>
            <td>${m.username}</td>
            <td>${m.role}</td>
            <td>${m.email}</td>
            <td>
                <button onclick="deleteMember('${m.id}')">Delete</button>
            </td>
        </tr>
        `;

})

memberList.innerHTML=html

})

}

loadMembers()
async function addMember() {
    let username = document.getElementById("name").value.trim();
    let role = document.getElementById("role").value.trim().toLowerCase(); 
    let email = document.getElementById("email").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username === "") {
        alert("Vui lòng nhập tên thành viên!");
        return;
    }
    if (username.includes("@")) {
        alert("Tên thành viên không được là địa chỉ email!");
        return;
    }

    if (role !== "admin" && role !== "member") {
        alert("Role chỉ có thể là 'admin' hoặc 'member'!");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Định dạng Email không hợp lệ!");
        return;
    }

    try {
        let response = await fetch(api);
        let currentMembers = await response.json();

        let isDuplicate = currentMembers.some(m => m.email.toLowerCase() === email.toLowerCase());
        if (isDuplicate) {
            alert("Email này đã tồn tại trong danh sách!");
            return;
        }

        let postResponse = await fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                role: role, 
                email: email
            })
        });

        if (postResponse.ok) {
            alert("Thêm thành viên thành công!");
            loadMembers(); 

            document.getElementById("name").value = "";
            document.getElementById("role").value = "";
            document.getElementById("email").value = "";
        }
    } catch (error) {
        console.error("Lỗi:", error);
        alert("Lỗi kết nối máy chủ!");
    }
}
async function deleteMember(id) {
    if (!confirm("Bạn có chắc chắn muốn xóa thành viên này không?")) {
        return;
    }

    try {
        let response = await fetch(`${api}/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            alert("Đã xóa thành công!");
            loadMembers(); 
        } else {
            alert("Không tìm thấy thành viên để xóa hoặc lỗi server!");
        }
    } catch (error) {
        console.error("Lỗi xóa:", error);
        alert("Lỗi kết nối mạng!");
    }
}