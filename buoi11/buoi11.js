//DOM là gì
//Đây là 1 cách để truy cập và tương tác với các phần tử trên trang web
//DOM được tảo a để giúp các lập trình viên tương tác với các phần tử là HTML, CSS trên trang web
let a = document.getElementsByTagName('h1'); //Đây là 1 mảng đối tượng
// console.log(a);
// console.log(a[0].outerText);//lấy ra text của vị trí thứ nhất trong mảng
//a[0].outerText='HIHI';//thay đổi text
// a[0].innerText="hihi";//thây đổi text nhưng vẫn giữ nguyên thẻ
// a[0].style.color="red";// thay đổi thuộc tính style dùng để cna thiệt vào css thay đổi màu
//hiển thị 5 tên nyc
//dùng document.getElementsByTagName để in ra tên của 5 nyc
//dùng style để đổi màu(mỗi nyc 1 màu)
// console.log(a[2].outerText);
// console.log(a[3].outerText);
// console.log(a[4].outerText);
// console.log(a[5].outerText);
// console.log(a[6].outerText);
// a[2].style.color="black";
// a[3].style.color="gray";
// a[4].style.color="blue";
// a[5].style.color="red";
// a[6].style.color="yellow";
// for(let i=0;i<a.length;i++){
//     console.log(a[i].outerText);
// }
//vẫn sử dụng 5 tên nyc bên trên
//tạo thêm 1 button có sự kiện onclick
//trong hàm thực hiện sự kiện
//thực hiện công việc sau:
//sau mỗi lần click sẽ lần lượt đổi màu nyc thành màu đỏ
let index=a.length-1;
function thayMau(){
    let a=document.getElementsByTagName('h1');
    if(index==-1){
        index=a.length-1;
    }
    
    //resert tất cả các ptu thành màu đen
    for(let i=0;i<a.length;i++){
        a[i].style.color='black';
    }
    //đổi màu ở vị trí index
    a[index].style.color='red';
    index--;
   
}