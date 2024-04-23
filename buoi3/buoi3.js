//let cũng dc dùng để khai báo biến trong js
// let hoTen='Nguyễn Ly';
// let tuoi=18;
// let ngaySinh='10/06/2004';
// console.log(hoTen);
// console.log(tuoi);
// console.log(ngaySinh);
//Khác nhau giữa var và let
//1.Var có thể bị khai báo trùng biến, có thể bị khai báo lại
//let không được khai báo trùng tên biến, không khai báo lại được
// var a='Nguyễn Ly';
// var a=3;
// console.log(a);
// let a='Nguyễn Ly'
// let a=3;
// console.log(a);
//var và let đều có thể gán lại được giá trị
// var a=2023;
// a=18;
// console.log(a);
// var b=2023;
// b=18;
// console.log(b);
//var là biến toàn cục có thể sử dụng bên ngoài scope
// var a=2023;
// if(1<2){
//     console.log(a);
// }
// console.log(a);
//let là biến cục  bộ và không thể sử dụng bên ngoài scope
// if(1<2){
//     let b=2023;

//     if(2<3){
//         let c=45;
//         console.log(b);
//     }console.log(c);//Không thể truy cập ngoài scope
// }
// console.log(c);//Không thể truy cập ngoài scope
//Nhập vào tên, năm sinh, giới tính(nam là 0,nữ là 1)
//Kiểm tra xem người này có đủ tuổi đi nghĩa vụ không
//Ông/bà có/không đủ tuổi đi nghĩa vụ quân sự
//tuoi=năm hiện tại-năm sinh// get current year in js
//tuoi>=18 và tuoi<=27 thì đủ tuổ đi nvqs
// let hoten = prompt("Nhập vào họ tên:");
// let namsinh = prompt("Nhập vào năm sinh:");
// let tuoi = new Date().getFullYear() - namsinh;
// let gioitinh = prompt("Nhập số giơí tính:");
// switch (Number(gioitinh)) {
//     case 0: console.log("Giới tính: Nam");
//         if (tuoi >= 18 && tuoi <= 27) {
//             console.log("Ông đủ tuổi đi nvqs");
//         }
//         else {
//             console.log("Ông chưa đủ tuổi đi nvqs");
//         }
//         break;
//     case 1: console.log("Giới tính: Nữ");
//         if (tuoi >= 18 && tuoi <= 27) {
//             console.log("Bà đủ tuổi đi nvqs");
//         }
//         else {
//             console.log("Bà chưa đủ tuổi đi nvqs");
//         }
//         break;
//     default:
//         break;
// }
// if (tuoi>=18 && tuoi<=27 )
// {
//     if(gioitinh==0){console.log("Ông đủ tuổi đi nvqs");}
//     if(gioitinh==1){console.log("Bà đủ tuổi đi nvqs");}
// }
// else{
//     if(gioitinh==0){console.log("Ông không đủ tuổi đi nvqs");}
//     if(gioitinh==1){console.log("Bà không đủ tuổi đi nvqs");}
// }
// if(gioiTinh==0 && tuoi>=18 && tuoi<=27){
//     console.log(`Ông ${hoten} đủ tuổi đi nvqs`);
// }else if(gioiTinh==1 && tuoi>=18 && tuoi<=27){
//     console.log(`Bà ${hoten} đủ tuổi đi nvqs`);

// }else if(gioitinh==0 && tuoi<18|| tuoi>27){
//     console.log(`Ông ${hoten} không đủ tuổi đi nvqs`);
    
// }else{
//     console.log(`Bà ${hoten}không đủ tuổi đi nvqs`);

// }
//dùng toán tử 3 ngôi
//let a= (ĐK)?"Gtd":"GTs"
// let ongBa = gioitinh == 0 ? "Ông":"Bà";
// let checktuoi = tuoi>=18 && tuoi<=27 ? "Đủ":"Không đủ"
// console.log(`${ongBa} ${hoten} ${checktuoi}  tuổi đi nvqs`);
//Các kiểu dữ liệu trong js
let hoTen = "        Nguyễn Ly";
let chucVu="Sinh viên"
let test="abc"
console.log(hoTen.length);//Đếm số ký tự trong chuỗi
console.log(hoTen.substring(7,9));//cắt chuỗi từ vị trí x đến vị trí y
console.log(`'${hoTen}'`);
console.log(`'${hoTen.trim()}'`);//bỏ khoảng trắng thừa ở đầu và cuối
console.log(`'${hoTen.trimStart()}'`);//bỏ khoảng trắng thừa ở đầu
console.log(`'${hoTen.trimEnd()}'`);//bỏ khoảng trắng thừa ở cuối
console.log(chucVu.concat("",hoTen).concat("",test));//nối chuỗi
console.log(hoTen.toUpperCase());//viết hoa tất cả các ký tự
console.log(hoTen.toLowerCase());//viết thường tất cả các ký tự
//Number type
let so1=3;
let so2=2.56789;
console.log(isNaN(so1));//nếu là false thì là kiểu số
console.log(Number.isInteger(so1));//Nếu là True thì là kiểu Number
console.log(so2.toFixed(3));//làm tròn đến phần tử x ở sau dấu chấm
console.log(so2.toPrecision(3));//làm tròn đến ptu x đếm từ phần nguyên
//BigInt type
//những số nằm ngoài kiểu number
let isBigInt= 954333453n;
console.log(typeof isBigInt);
//boolean type
let a= true;
let b= false;
//undefined type
let isUndefined;
console.log(isUndefined);
//Null type
let isNull = null;
console.log(isNull);
