let arr_hinhAnh=[
    "image/image_1.jpg",
    "image/image_2.jpg",
    "image/image_3.jpg",
    "image/image_4.jpg",
    "image/image_5.jpg",
    
]
let image=document.getElementById('hinhAnh')
let index=0;
function next(){
    index++;
    if(index==arr_hinhAnh.length) index=0;
    image.src=arr_hinhAnh[index]
}

function auto(){
    setInterval('next()',1500)
}

auto()
function datMua(){
    let thongBao=document.getElementsByClassName('thongBao')
    
    let hoTen=document.getElementById('hoTen')
    if(hoTen.value=="" || hoTen.value==null){
        thongBao[0].innerHTML="Vui lòng nhập họ tên"
        return;
    }
    else{
        thongBao[0].innerHTML=""
    }

    let loaihang=document.getElementById('loaihang')
    if(loaihang.value=="0"){
        thongBao[1].innerHTML="Vui lòng chọn loại hàng"
        return;
    }
    else{
        thongBao[1].innerHTML=""
    }

    let donGia=document.getElementById('donGia')
    if(donGia.value=="" || donGia.value==null){
        thongBao[2].innerHTML="Vui lòng nhập đơn giá"
        return;
    }
    else{
        thongBao[2].innerHTML=""
    }

    let soLuong=document.getElementById('soLuong')
    if(soLuong.value=="" || soLuong.value==null){
        thongBao[3].innerHTML="Vui lòng nhập số lượng"
        return;
    }
    else{
        thongBao[3].innerHTML=""
    }
    let thanhTien=document.getElementById('thanhTien')
    if(thanhTien.value=="" || thanhTien.value==null){
        thongBao[4].innerHTML="Không được bỏ trống"
        return;
    }
    else{
        thongBao[4].innerHTML=""
    }
    let pvc=document.getElementById('pvc')
    if(pvc.value=="" || pvc.value==null){
        thongBao[5].innerHTML="Vui lòng nhập phí vận chuyển"
        return;
    }
    else{
        thongBao[5].innerHTML=""
    }
    
    
    
    
    thanhTien.value=Number(soLuong.value)*Number(donGia.value)
    alert('đặt mua thành công')
    
}
function thayHang(){
    let loaihang=document.getElementById('loaihang')
    let donGia=document.getElementById('donGia')
    if(loaihang.value=="1"){
        donGia.value=500000
    }
    if(loaihang.value=="2"){
        donGia.value=300000
    }
    if(loaihang.value=="3"){
        donGia.value=100000
    }
}
function thayNNH(){
    let pvc=document.getElementById('pvc')
    let nnh=document.getElementsByName('nnh')
    if(nnh[0].checked){
        pvc.value=0
    }
    if(nnh[1].checked){
        pvc.value=30000
    }
}
function tinhTien(){
    let soLuong=document.getElementById('soLuong')

    let donGia=document.getElementById('donGia')
    let thanhTien=document.getElementById('thanhTien')
    thanhTien.value=Number(soLuong.value)*Number(donGia.value)
}