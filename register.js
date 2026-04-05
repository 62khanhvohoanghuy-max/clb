ocument.getElementById("submit").addEventListener("click", (e)=>{
    e.preventDefault()
    // lấy thông tin người dùng nhập vào ô input để đăng ký tài khoảnkhoản
    var Username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var email= document.getElementById("email").value
    
    var usernameValid = Username.length >=6 && Username.length <=18
    var passwordValid = password.length >=8 && password.length <=20
    var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!Username||!password||!email) {
        alert ("Vui lòng nhập đầy đủ thông tin người dùng")
        return
    }

    if (!usernameValid){ 
        alert("tên ít nhất có độ dài từ 6 đến 18 kí tự")
        return
    }
    if (!passwordValid){
        alert("mật khẩu ít nhất có độ dài từ 8 đến 20 kí tự")
        return
    }

    if(!emailValid) {
        alert("Email không hợp lệ. Vui lòng nhập email theo đúng định dạng")
        return;
    }
    if (usernameValid && passwordValid && emailValid) {
            currentMember = localStorage.getItem("list_member");
            if (currentMember) {
                // nếu danh sách người dùng không rỗng
                const list_member = JSON.parse(currentMember)// chuyen du lieu thanh dang object
                list_member.push({
                    name: Username,
                    email:email,
                    password: password
                })
                localStorage.removeItem("list_member")//xoa du lieu ng dung cu
                localStorage.setItem("list_member", JSON.stringify(list_member))
            }
            else {
                // danh sách người dùng hiện tại rỗng => chưa có ai đkđk
                const list_member = []
                list_member.push({//them du lieu moi
                    name: Username,
                    email:email,
                    password: password
                })
                localStorage.setItem("list_member", JSON.stringify(list_member))
                alert("Đăng ký thành công!")
            }
            window.location.href="login.html"
    }
});
