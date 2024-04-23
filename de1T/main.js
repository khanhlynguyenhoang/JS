function datmua(){
    let thongBao=document.getElementsByClassName('thongBao')
    //check họ tên
    let hoTen=document.getElementById('hoTen')
    if(hoTen.value==""){
        thongBao[0].innerHTML="Vui lòng điền họ tên"
        return;
    }
    else{
        thongBao[0].innerHTML=""
    }
    //check loại hàng
    let loaiHang=document.getElementById('loaiHang')
    if(loaiHang.value=="0"){
        thongBao[1].innerHTML="Vui lòng chọn loại hàng"
        return;
    }
    else{
        thongBao[1].innerHTML=""
    }
    //check đơn giá
    let donGia=document.getElementById('donGia')
    if(donGia.value==""){
        thongBao[2].innerHTML="Vui lòng điền đơn giá"
        return;
    }
    else{
        thongBao[2].innerHTML=""
    }
    //check số lượng
    let soLuong=document.getElementById('soLuong')
    if(soLuong.value==""){
        thongBao[3].innerHTML="Vui lòng điền số lượng"
        return;
    }
    else{
        thongBao[3].innerHTML=""
    }
    //check Thành tiền
    let thanhTien=document.getElementById('thanhTien')
    // if(thanhTien.value==""){
    //     thongBao[4].innerHTML="Vui lòng điền số lượng"
    //     return;
    // }
    // else{
    //     thongBao[4].innerHTML=""
    // }
    //check nơi nhận hàng
    //check phí vận chuyển
    let pvc=document.getElementById('pvc')
    if(pvc.value==""){
        thongBao[6].innerHTML="Vui lòng điền Phí vận chuyển "
        return;
    }
    else{
        thongBao[6].innerHTML=""
    }
    //tính tiền
    
}
function thayHang(){
    let donGia=document.getElementById('donGia')
    let loaiHang=document.getElementById('loaiHang')
    if(loaiHang.value=="1"){
        donGia.value=500000;
    }
    if(loaiHang.value=="2"){
        donGia.value=300000;
    }
    if(loaiHang.value=="3"){
        donGia.value=100000;
    }
}
function thayNNH(){
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
    let thanhTien=document.getElementById('thanhTien')
    let soLuong=document.getElementById('soLuong')
    let donGia=document.getElementById('donGia')
    document.getElementById('thanhTien').value=Number(soLuong.value)*Number(donGia.value)
}