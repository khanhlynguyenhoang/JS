
//nhập vào 1 số, kiểm tra số đấy là dương hay âm , chăn hay lẻ
// let a=Number(prompt("Nhập vào số cần kiểm tra:"));
// let amduong=(a>0)?"Số dương":"Số âm";
// let chanle=(a%2==0)?"Số chẵn":"Số lẻ";
// console.log(`${amduong}`);
// console.log(`${chanle+}`);
//Mảng là 1 tập hợp các phần tử có  hoặc không cùng kiểu dữ liệu
// cách khai báo ra 1 mảng
//cách 1:
// let arr=["Java","JS","php",2023];
// console.log(arr);
// //cách 2:
// let arr2=new Array("Java","JS","C++",2023);
// console.log(arr2);
//khai báo mảng
let mang=["Toán","lý","Hóa","Vật Lý đại cương","Triết","Phaps luật đại cương",1,2,3,4];
// mang[1,2,3,4,5];
// console.log(mang[1]);
// console.log(mang[2]);
// console.log(mang[3]);
// console.log(mang[4]);
// console.log(mang[5]);
// console.log(mang[9]);

// console.log(mang[mang.length-1]);//lấy ra giá trị của phần tử cuối cùng
// console.log(mang.length);//lấy ra độ dài của mảng
// 

//thêm phần tử
// 

//thêm 1 hay nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
// mang.unshift("My");
// console.log(mang.unshift("My"));

// //thêm 1 hay nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
// mang.push("My","Lan");

//xóa phần tử


//xóa phần tử cuối mảng và trả về giá trị của phần tử đã xóa
// mang.pop();
// console.log(mang.pop());


//xóa phần tử đầu mảng và trả về giá trị của phần tử đã xóa
//mang.shift();
//console.log(mang.shift());

//xoas phần tử theo vị trí
//x là vị trí bắt đầu xóa
//y là tổng số phần tử muốn xóa
// mang.splice(0,2);
//thay thế
// mang.splice(0,1 ,"Toán");
//mang.splice(3,2,"giải tích","oop")
//cắt lấy 1 phần tưr bất kỳ trong mang
//x là vị trí bắt đầu muốn cắt
//y là vị trí kết thúc
//console.log(mang.slice(1,3));
//tìm kiếm
console.log(mang.indexOf("hóa"));
//nêys có thì trả về vị trí cuối cùng ptu xuất hiện
//console.log(mang.lastIndexOf("Toán"));
//nối mảng
//nối 2 mảng
let mangnew=["thể dục","Sinh học"];
console.log(mang.concat(mangnew));
//nối 2 mảng và chèn thêm 1 phânf tử vào giữa 2 mảng đó
console.log(mang.concat("test",mangnew));
//đổi từ arr sang string
//mặc định các phần tử đươcj ngăn cách bởi dấu phẩy
console.log(mang.toString());
//ngăn cách bởi cái gì gì đấy
console.log(mang.join(", "));
//string to array
let nganhhoc="JavaScrpit php java";
console.log(nganhhoc.split(", "));
console.log(mang);