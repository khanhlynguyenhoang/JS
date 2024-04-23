let arr_hinhAnh=[
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png"
]
let index=0;
function prev(){
    index--
    if(index<-0) index=arr_hinhAnh.length-1
    document.getElementById('hinhAnh').src=arr_hinhAnh[index]

}
function next(){
    index++
    if(index==arr_hinhAnh.length) index= 0;
    document.getElementById('hinhAnh').src=arr_hinhAnh[index]
}
let o;
function auto(){
    o=setInterval('next()',2000)
}
// auto()
function stop(){
    clearInterval(o)
}
function dangKy(){
    let thongBao=document.getElementsByClassName('thongBao')
    let hoTen=document.getElementById('hoTen')
    let email=document.getElementById('email')
    let sdt=document.getElementById('sdt')
    let user=document.getElementById('user')
    let pass=document.getElementById('pass')
    let repass=document.getElementById('repass')
    //check ho ten
    if(hoTen.value=="" ){
        thongBao[0].innerHTML="Vui lòng nhập họ tên"
        return;
    }
    else{
        thongBao[0].innerHTML=""
    }
    //check email
    let regexemail=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    let checkemail=regexemail.test(email.value)
    if(email.value=="" ){
        thongBao[1].innerHTML="Vui lòng nhập email"
        return;
    }
    else if(!checkemail){
        thongBao[1].innerHTML="Email không hơp lệ"
        return;
    }
    else{
        thongBao[1].innerHTML=""
    }
    //check sdt
    let regexSDT= /((09|03|07|08|05)+([0-9]{8})\b)/g;
    let checkSDT=regexSDT.test(sdt.value);
    if(sdt.value=="" || sdt.value==null){
        thongBao[2].innerHTML="Vui lòng nhập số điện thoại";
        return;
    }
    else if(!checkSDT){
        thongBao[2].innerHTML="Số điện thoại không hợp lệ";
        return;
    }
    else{
        thongBao[2].innerHTML="";
    }
    //check user
    let checkuser=user.value.trim()
    if(user.value=="" ){
        thongBao[3].innerHTML="Vui lòng nhập user"
        return;
    }
    else if(checkuser.length<8){
        thongBao[3].innerHTML="User phải có ít nhất 8 ký tự"
        return;
    }
    else{
        thongBao[3].innerHTML=""
    }
    //check pass
    if(pass.value==""){
        thongBao[4].innerHTML="Vui lòng nhập pass"
        return;
    }
    else{
        thongBao[4].innerHTML=""

    }
    //check pass, repass
    let checkpass= pass.value.trim();
    let checkrepass= repass.value.trim();
    if(repass.value==""){
        thongBao[5].innerHTML="Vui lòng nhập repass"
        return;
    }
    else if(checkpass != checkrepass){
        thongBao[5].innerHTML="Mật khẩu không trùng khớp"
        return; 

    }else{
        thongBao[5].innerHTML=""

    }

}