/*btvn
// bt1: nhập vào số: hiển thị ra thứ tương ứng
// bt2: tính pt b2
*/
//bài 1
var date=prompt("Nhập vao thứ:");
switch(Number(date)){
    case 1:
        console.log("Chủ nhật");
        break;
    case 2:
        console.log("Thứ hai");
        break;

    case 3:
        console.log("Thứ ba");
        break;

    case 4:
        console.log("Thứ tư");
        break;

    case 5:
        console.log("Thứ năm");
        break;
    case 6:
        console.log("Thứ sáu");
        break;
    case 7:
        console.log("Thứ bảy");
        break;
    default:
        console.log("Không có ngày này");
            
    }
//bai2:tính pt b2
/*var a=prompt("Mời nhập a:");
var b=prompt("Mời nhập b:");
var c=prompt("Mời nhập c:");
delta=b*b-(4*a*c);
if(delta>0){
    console.log("Phương trình có hai nghiệm phân biệt:");
    console.log("x1="+((-b-Math.sqrt(delta))/(2*a)));
    console.log("x2="+((-b+Math.sqrt(delta))/(2*a)));
}
else if(delta==0){
    console.log("Phương trình có 2 nghiệm kép x1=x2="+(-b/(2*a)));

}
else{
    console.log("Phương trình vô nghiệm");
}*/