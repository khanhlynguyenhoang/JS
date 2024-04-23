let arr_hinhAnh=[
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png"
]
let image=document.getElementById('hinhAnh')
let index=0;
function prev(){
    index--;
    if(index<-0) index=arr_hinhAnh.length-1
    image.src=arr_hinhAnh[index]
}
function next(){
    index++;
    if(index==arr_hinhAnh.length) index=0
    image.src=arr_hinhAnh[index]
}
function auto(){
    setInterval('next()',2000)
}
// auto()
function datHang(){
    let thongBao=document.getElementsByClassName('thongBao')
    //check khách hàng
    let hoTen=document.getElementById('hoTen')
    if(hoTen.value==""){
        thongBao[0].innerHTML="Vui lòng nhập họ tên"
        return;
    }
    else{
        thongBao[0].innerHTML=""
    }
    //check loại hàng
    let loaiHang=document.getElementById('loaiHang')
    if(loaiHang.value=="0"){
        thongBao[1].innerHTML="Vui lòng nhập Loại hàng"
        return;
    }
    else{
        thongBao[1].innerHTML=""

    }
    
}