let arr_hinhAnh=[
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png"
]
let index=0;
function prev(){
    let img=document.getElementById('hinh')
}
function dangKy(){
    let thongBao=document.getElementsByClassName('thongBao')
    let hoTen=document.getElementById('hoTen')
    let loaiHang=document.getElementById('loaiHang')
    let donGia=document.getElementById('donGia')
    let soLuong=document.getElementById('soLuong')
    
    let nnh=document.getElementById('nnh')
    let pvc=document.getElementById('pvc')
    //check họ tên
    if(hoTen.value==""){
        thongBao[0].innerHTML="Vui lòng nhập khách hàng"
        return;
    }
    else{
        thongBao[0].innerHTML=""
    }
    //check loại hàng
    if(loaiHang.value==0){
        thongBao[1].innerHTML="Vui lòng chọn loại hàng"
        return;
    }
    else{
        thongBao[1].innerHTML=""
    }
    //check đơn giá
    if(donGia.value==""){
        thongBao[2].innerHTML="Vui lòng nhập đơn giá"
        return;
    }
    else{
        thongBao[2].innerHTML=""
    }
    //check số lượng
    if(soLuong.value==""){
        thongBao[3].innerHTML="Vui lòng nhập số lượng"
        return;
    }
    else{
        thongBao[3].innerHTML=""
    }
    //check thành tiền
    // if(thanhTien.value==""){
    //     thongBao[4].innerHTML="Vui lòng nhập thành tiền"
    //     return;
    // }
    // else{
    //     thongBao[4].innerHTML=""
    // }
    //check nơi nhận hàng
    if(nnh.value==""){
        thongBao[4].innerHTML="Vui lòng nhập nơi nhận hàng"
        return;
    }
    else{
        thongBao[4].innerHTML=""
    }
}
function thaydoiHang(){
    let loaiHang=document.getElementById('loaiHang')
    let donGia=document.getElementById('donGia')
    if(loaiHang.value==1){
        donGia.value=500000
    }
    if(loaiHang.value==2){
        donGia.value=300000
    }
    if(loaiHang.value==3){
        donGia.value=100000
    }
}
function thaydoinnh(){
    let nnh=document.getElementsByName('nnh')
    let pvc=document.getElementById('pvc')
    if(nnh[0].checked){
        pvc.value=0
    }
    if(nnh[1].checked){
        pvc.value=30000
    }
}
function tinhTien(){
    let donGia=document.getElementById('donGia')
    let soLuong=document.getElementById('soLuong')
    document.getElementById('thanhTien').value= Number(donGia.value)*Number(soLuong.value)

}