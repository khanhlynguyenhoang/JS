var arr_hinh=[
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.png"
];
let arr_chu=[
  "1/7",
  "2/7",
  "3/7",
  "4/7",
  "5/7",
  "6/7",
  "7/7"
]
var index =0;
function Previous(){
  index--;
  if(index<-0) index=arr_hinh.length-1
  document.getElementById("hinh").src=arr_hinh[index];
  document.getElementById("chu").innerText=arr_chu[index]
}
function Next(){
  index++;
  if(index==arr_hinh.length) index = 0 ;
  document.getElementById("hinh").src=arr_hinh[index];
  document.getElementById("chu").innerText=arr_chu[index]
}
function stop(){
  clearInterval(o);
}
function start() {
  o = setInterval('Next()',1000);
}
var HoTen = document.getElementById("HoTen")
var Email = document.getElementById("Email")
var Sdt = document.getElementById("SDT")
var User = document.getElementById("User")
var Pass = document.getElementById("Pass")
var Repss = document.getElementById("Repss")
var Bgt = document.getElementById("Bgt")
var Fb = document.getElementById("Fb")
var bth = document.getElementById("btn_submit")

var err_HoTen = document.getElementById("loi1")
var err_Email = document.getElementById("loi2")
var err_Sdt = document.getElementById("loi3")
var err_User = document.getElementById("loi4")
var err_Pass = document.getElementById("loi5")
var err_Repss = document.getElementById("loi6")
var err_loi7 =document.getElementById("loi7")
function check(element, err,mess){
  if(element.value.length == 0){
    err.innerHTML =mess;
    err.style.color="red";
    return false;
  }
  else{
    err.innerHTML="";
    return true;
  }
}
function hthuc() {
  if(Bgt.checked == false && Fb.checked == false){
    err_loi7.innerHTML="Vui long nhap phuong thuc"
    err_loi7.style.color="red";
    return false;
  }
  else{
    err_loi7.innerHTML=""
    return true;
  }
}
function validate(){
  check(HoTen,err_HoTen,"vui log nhap ten")
  validateEmail()
  check(Sdt,err_Sdt,"nhap so dt")
  validateUser()
  check(Pass,err_Pass,"nhap pass")
  check(Repss,err_Repss,"nhap lai mat khau")
  hthuc();
  if(check(HoTen,err_HoTen,"vui log nhap ten")&&
  check(Email,err_Email,"nhap email")&&
  check(Sdt,err_Sdt,"nhap so dt")&&
  check(User,err_User,"nhap user")&&
  check(Pass,err_Pass,"nhap pass")&&
  check(Repss,err_Repss,"nhap lai mat khau")&&
  hthuc()&&
  validateEmail()&&
  validateUser()&&
  validatePass()){
    return true
  }
  else{
    return false
  }
}
bth.addEventListener("click", function(e){
  e.preventDefault();
  if(validate()){
    alert("Dang ki thanh cong")
  }
})
var emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/; // regex kiểm tra đúng định dạng email

function validateEmail() {
var email = Email.value.trim();
if (!email.match(emailRegex)) {
err_Email.innerHTML = "Email không hợp lệ";
err_Email.style.color = "red";
return false;
} else {
err_Email.innerHTML = "";
return true;
}
}

function validateUser() {
var user = User.value.trim();
if (user.length < 8) {
err_User.innerHTML = "User phải ít nhất 8 kí tự";
err_User.style.color = "red";
return false;
} else {
err_User.innerHTML = "";
return true;
}
}

function validatePass() {
var pass = Pass.value.trim();
var repass = Repss.value.trim();
if (pass !== repass) {
err_Pass.innerHTML = "Mật khẩu không trùng khớp";
err_Pass.style.color = "red";
return false;
} else {
err_Pass.innerHTML = "";
return true;
}
}

