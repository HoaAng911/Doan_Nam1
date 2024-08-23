function singup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var password = document.getElementById("password").value;
    var user ={
        username : username,
        email : email,
        phonenumber : phonenumber,
        password:password
    }
    var json = JSON.stringify(user)
    localStorage.setItem(username,json)
    alert('Dang ky thanh cong')
}
function login(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user==null){
        alert("Vui long nhap username")
    }else if(username==data.username && password==data.password){
        alert('Dang nhap thanh cong')
        window.location.href="https://www.facebook.com/profile.php?id=100021713453563"
    }
    else{
        alert("Dang nhap that bai")
    }
}