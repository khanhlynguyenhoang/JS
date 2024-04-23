
// btvn
let arr=["Quang" ,"Tú", "Huy" ,"Thành","Nam"];
let ten=prompt("Nhập tên nyc");
let checkTen= arr.indexOf(ten);
let check=false;
//  bài 1
//  nhập vào 1 tên bất kỳ
// kiểm tra nếu tên đó đã có thì xóa cái tên đó ra khỏi mảng
// kiểm tra nếu chưa có thì thông báo ko có tên nyc là + tên

// for(let item of arr){
//     if(item == ten){
//         check=true;
//         break;
//     }
// }
// if(check==false){
//     console.log(`Bạn không có nyc tên là ${ten}`);
// }
// else{
//    arr.splice(checkTen,0,"");
//    console.log(arr);
// }
/

// bải 2
// nhập vào 1 tên bất kỳ
// kiểm tra nếu tên đó đã có thì in ra vị trí của tên đó
// kiểm tra nếu chưa có thì thông báo chưa có tên đó
// for(let item of arr){
//     if(item== ten){
//         check=true;
//         break;
//     }
// }
// if(check==false){
//     console.log(`Chưa có  tên  ${ten}`);
// }
// else{
//     console.log(`Vị trí tên là: ${checkTen}`);
   
//    console.log(arr);
// }
// bài 3
// khai báo 1 hàm là dienTich để tính diện tích hcn
// y/c: nhập chiều dài và chiều rộng 
// giải bài này bằng 2 cách: hàm kh tham số và hàm có tham số
// cách 1: hàm không tham số
// function dienTich() {
//     let chieudai=prompt("Nhập chiều dài");
//     let chieurong=prompt("Nhập chiều rộng");
//     let dienTichhcn=chieudai*chieurong;
//     console.log(`Diện tích hình chữ nhật = ${dienTichhcn}`);
// }
// // cách2: hàm có tham số
// function dienTich(chieudai,chieurong) {
//     let dienTichhcn=chieudai*chieurong;
//     console.log(`Diện tích hình chữ nhật = ${dienTichhcn}`);
// }
