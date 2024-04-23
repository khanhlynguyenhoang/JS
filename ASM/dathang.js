//Tạo mã sinh tự động
function generateCode(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
             charactersLength)));
           }
   return result.join('');
}
console.log(generateCode(10));
let code=generateCode(10);
//hàm làm bài
function kiemTra(){
    let thongBao=document.getElementsByClassName('thongbao');
    let hoTen=document.getElementById('hovaten');
    let cmt=document.getElementById('cmt');
    let email=document.getElementById('email');
    let gioitinh=document.getElementsByClassName('gioitinh')
    let sdt=document.getElementById('sdt');
    let khoahoc=document.getElementById('khoaHoc');
    let ngaysinh=document.getElementById('date');
    let thanhtoan=document.getElementById('thanhtoan');
//Kiểm tra họ tên
    console.log(hoTen.value);
    if(hoTen.value==""){
        thongBao[0].innerHTML="Vui lòng nhập họ tên";
        return;
    }else{
        thongBao[0].innerHTML="";

    }
//Kiểm tra chứng minh thư
    console.log(cmt.value);
    let regexCMT=/^\d+$/;
    let checkCmt=regexCMT.test(cmt.value);
    console.log("Kiểm tra cmt:",regexCMT.test(cmt.value));
    if(cmt.value=="" || cmt.value==null){
        thongBao[1].innerHTML="Vui lòng nhập chứng minh thư";
        return;
    }
    else if(!checkCmt){
        thongBao[1].innerHTML="Chứng minh thư phải là số";
        return;
    }
    else{
        thongBao[1].innerHTML="";
    }
//Kiểm tra email
    console.log(email.value);
    let regexEmail= /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    let checkEmail=regexEmail.test(email.value);
    console.log("Kiểm tra email:",regexEmail.test(email.value));
    if(email.value=="" || email.value==null){
        thongBao[2].innerHTML="Vui lòng nhập Email";
        return;
    }
    else if(!checkEmail){
        thongBao[2].innerHTML="Email không hợp lệ";
        return;
    }
    else{
        thongBao[2].innerHTML="";
    }
//Kiểm tra giới tính
//lấy giá trị của radio
for(let item of gioitinh){
    if(item.checked==true){
        var gender=item.value;
    }
}
console.log(gender);
//Kiểm tra số điện thoại
    let regexSDT= /((09|03|07|08|05)+([0-9]{8})\b)/g;
    let checkSDT=regexSDT.test(sdt.value);
    if(sdt.value=="" || sdt.value==null){
        thongBao[3].innerHTML="Vui lòng nhập số điện thoại";
        return;
    }
    else if(!checkSDT){
        thongBao[3].innerHTML="Số điện thoại không hợp lệ";
        return;
    }
    else{
        thongBao[3].innerHTML="";
    }
//Kiểm tra khóa học
    // if(khoahoc.value=="0"){
    //     thongBao[4].innerHTML='Vui lòng chọn khóa học';
    //     return;
    // }else{
    //     thongBao[4].innerHTML="";
    // }
    // if(khoaHoc.value=="1"){
    //     console.log("Khóa học Digital Marketing");
    // }
    // else if(khoaHoc.value=="2"){
    //     console.log("Khóa học Marketing Online");
    // }
    // else if(khoaHoc.value=="3"){
    //     console.log("Khóa học bán hàng Online");
    // }
    let inKhoaHoc= document.getElementsByClassName('kh');
    for(let i=0;i<inKhoaHoc.length;i++){
        if(khoahoc.value==i){
            var kh=inKhoaHoc[i].outerHTML;
        }
    }
//Kiểm tra ngày sinh

    if(ngaysinh.value=="" || ngaysinh.value==null){
        thongBao[5].innerHTML="Vui lòng nhập ngày sinh";
        return;
    }
    else{
        thongBao[5].innerHTML="";
    }
//kiểm tra hình thức thanh toán
    if(thanhtoan.value=="0"){
        thongBao[6].innerHTML='Vui lòng chọn hình thức thanh toán';
        return;
    }else{
        thongBao[6].innerHTML="";
    }
    let thanhToan= document.getElementsByClassName('tt');
    for(let i=0;i<thanhToan.length;i++){
        if(thanhtoan.value==i){
            var tt=thanhToan[i].outerHTML;
        }
    }
//Hiển thị thông báo khi toàn bộ nội dung chính xác
swal({
    title: "Bạn đã đặt thành công khóa học",
    text:"Vui lòng kiểm tra lại thông tin đặt hàng ở phía dưới",
    icon:"success"
}

)

//In ra bảng đặt hàng
let result=`
<h2>Xác nhận thông tin</h2>
<table id="xacnhan" border="1">
<tr>
                                <td>Họ và tên</td>
                                <td>Chứng minh thư</td>
                                <td>Email</td>
                                <td>Giới tính</td>
                                <td>Số điện thoại</td>
                                <td>Khóa học đăng ký</td>
                                <td>Ngày sinh</td>                                
                                <td>Hình thức thanh toán</td>
                                <td>Mã đơn hàng</td>
                            </tr>
                            <tr>
                                <td>${hoTen.value}</td>
                                <td>${cmt.value}</td>
                                <td>${email.value}</td>
                                <td>${gender}</td>
                                <td>${sdt.value}</td>                            
                                <td>${kh}</td>
                                <td>${ngaysinh.value}</td>                               
                                <td>${tt}</td>
                                <td>${code}</td>
                            </tr>
                            
</table>`
document.getElementById('xacnhan').innerHTML=result;
}
