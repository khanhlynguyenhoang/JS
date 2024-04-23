let slideIndex=0;
//Mặc định khi vào trang web sẽ hiển thị ảnh đầu tiên
slide(slideIndex);
//Bắt đầu 
function nextSlide(){
    slide(slideIndex++)
}
function slide(){
    //Dùng DOM truy cập đến phần tử ảnh
    let image= document.getElementsByClassName('mySlide');
    //Nếu chạy hết mảng thì về phần tử đầu tiên
    if(slideIndex>=image.length){
        slideIndex=0;
    }
    //reset toàn bộ ảnh về trạng thái ẩn
    for(let i=0;i<image.length;i++){
        image[i].style.display='none';
    }
    //hiển thị ảnh sau mỗi lần click
    image[slideIndex].style.display='block';
    slideIndex++;
    
    
    
}
let auto;
function autoSlide(){
    //Dùng DOM truy cập đến phần tử ảnh
    let image= document.getElementsByClassName('mySlide');
    //Nếu chạy hết mảng thì về phần tử đầu tiên
    if(slideIndex>=image.length){
        slideIndex=0;
    }
    //reset toàn bộ ảnh về trạng thái ẩn
    for(let i=0;i<image.length;i++){
        image[i].style.display='none';
    }
    //hiển thị ảnh sau mỗi lần click
    image[slideIndex].style.display='block';
    slideIndex++;
    //Truyền vào 2 tham số
    //1 là tên hàm cần chạy lại
    //2 là thời gian lặp lại(*1000)
    auto = setTimeout(autoSlide,2000)
    
    
}

//dừng slide
function stopSlide(){
    clearInterval(auto);
}
//bài 2
function dangKy(){
    let thongBao=document.getElementsByClassName('thongBao');
    let hoTen=document.getElementById('hoTen')
    let email=document.getElementById('email')
    let sdt=document.getElementById('sdt')
    let khoaHoc=document.getElementById('khoaHoc')
    let hocPhi=document.getElementById('hocPhi')
    // let htHoc=document.getElementByclass('htHoc')
    //check rỗng
    console.log(hoTen.value);
    if(hoTen.value==""){
        thongBao[0].innerHTML="Vui lòng nhập họ tên";
        return;
    }else{
        thongBao[0].innerHTML="";
    }
    //check email
    console.log(email.value);
    let regexEmail= /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    let checkEmail=regexEmail.test(email.value);
    console.log("Kiểm tra email:",regexEmail.test(email.value));
    if(email.value=="" || email.value==null){
        thongBao[1].innerHTML="Vui lòng nhập Email";
        return;
    }
    else if(!checkEmail){
        thongBao[1].innerHTML="Email không hợp lệ";
        return;
    }
    else{
        thongBao[1].innerHTML="";
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
    //check khóa học
    console.log(khoaHoc.value);
    if(khoaHoc.value==0){
        thongBao[3].innerHTML="Vui lòng chọn khóa học";
        return;
    }else{
        thongBao[3].innerHTML="";
    }
    


}
function khchange(){
    let thaydoikh=document.querySelector('#khoaHoc')
    let thaydohp=document.querySelector('#hocPhi')
    
    
    if(khoaHoc.value==1){
        hocPhi.value=500;
    }
    if(khoaHoc.value==2){
        hocPhi.value=800;
    }if(khoaHoc.value==3){
        hocPhi.value=1000;
    }
}