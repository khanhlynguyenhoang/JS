let slideIndex=0;
//Mặc định khi vào trang web sẽ hiển thị ảnh đầu tiên
slide(slideIndex);
function nextSlide(n){  
    //console.log(slideIndex+=n);
    slide(slideIndex+=n);
}
function slide(){
    
    //Dùng DOM truy cập đến phần tử ảnh
    let image= document.getElementsByClassName('mySlide');
    //Nếu chạy hết mảng thì về phần tử đầu tiên
    if(slideIndex>=image.length){
        slideIndex=0;
    }
    //Ngược lại
    if(slideIndex<0){
        slideIndex=image.length-1;
    }
    //Reset toàn bộ ảnh về trạng thái ẩn
    for(let i=0;i<image.length;i++){
        image[i].style.display='none';
    }
    //Hiển thị ảnh sau mỗi lần click
    image[slideIndex].style.display='block';
}
//Auto
let auto;
function autoSlide(){
    //Dùng DOM truy cập đến phần tử ảnh
    let image= document.getElementsByClassName('mySlide');
    //Nếu chạy hết mảng thì về phần tử đầu tiên
    if(slideIndex>=image.length){
        slideIndex=0;
    }
    //Reset toàn bộ ảnh về trạng thái ẩn
    for(let i=0;i<image.length;i++){
        image[i].style.display='none';
    }
    //Hiển thị ảnh sau mỗi lần click
    image[slideIndex].style.display='block';
    slideIndex++;
    //Truyền vào 2 tham số
    //1 là tên hàm cần chạy lại
    //2 là thời gian lặp lại(*1000)
    auto=setTimeout(autoSlide,2000)
}
//autoSlide()
//Dừng slide
function stopSlide() {
    clearInterval(auto);
}
function change(){
    alert('Xin chao');
}