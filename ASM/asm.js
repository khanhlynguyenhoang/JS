
let arr_hinhAnh=[
    "img/banner-moavietnam-2023.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg"
]
// Hàm chuyển đến ảnh kế tiếp
let index=0;
 
function prev(){
    index--;
    if (index<0) index=arr_hinhAnh.length-1;{
    document.getElementById("hinh").src=arr_hinhAnh[index];
    document.getElementById('dem').innerText=index - 1+`/6`;}
}

    function next(){
    index++;
    if (index==arr_hinhAnh.length) index=0;
    document.getElementById("hinh").src=arr_hinhAnh[index];
    document.getElementById('dem').innerText=index+1+`/6`;}
  

//chạy tự động
setInterval("next()",2000);

