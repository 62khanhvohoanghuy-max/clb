document.getElementById("submit").addEventListener("click", (event)=>{
    event.preventDefault();

    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    var users = JSON.parse(localStorage.getItem("list_member"))


    if (!password||!email) {
        alert ("Vui lòng nhập đầy đủ thông tin người dùng")
        return
    }
    for(let i =0; i < users.length; i++) {
        if(users[i].email ===emailInput && users[i].password=== passwordInput){
            alert("Đăng nhập thành công!")
            window.location.href="bai8.html"
            return;
        }    
    } 
    // không tìm thấy người dùng trùng khớp với email và password đăng nhậpnhập
    alert("Sai thông tin đăng nhập hoặc thông tin này chưa được đăng ký")
    return;

})