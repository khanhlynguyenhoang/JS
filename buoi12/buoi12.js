//tạo 5 cái tên ngẫu nhiên bằng thẻ p
//in ra nội dung toàn bộ các thẻ
//đổi mỗi tên 1 màu
 let arr=document.getElementsByTagName('p');
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].outerText);
// }
// let mauSac=['yellow','gray','red','pink','blue']
// for(let i=0;i<arr.length;i++){
//     arr[i].style.color=mauSac[i];
// }
 let arrTest=document.getElementsByClassName('test1');
// console.log(arrTest);
// for(let i=0;i<arrTest.length;i++){
//     console.log(arrTest[i].outerText);
// }
 let arrTest2=document.getElementsByClassName('test2');
// console.log(arrTest2);
// for(let i=0;i<arrTest2.length;i++){
//     console.log(arrTest2[i].outerText);
// }
// for(let i=0;i<arrTest2.length;i++){
//     arrTest2[i].innerHTML="Xin chào baby";
// }

// function myNut(){
//     let test=document.getElementById('test').value;
//     console.log(test);
// }
//tạo 2 ô input(nhập tên và tuổi)
//in ra giá trị nhập vào
function myNut(){
    let tuoi=document.getElementById('tuoi');
    let ten=document.getElementById('ten');
    console.log(`Bạn ${ten.value} có tuổi là ${tuoi.value}`);
    let result = "<tr><td>Họ tên</td><td>Tuổi</td></tr><tr><td>"+ten.value+"</td><td>"+tuoi.value+"</td></tr>";
    document.getElementById('ketqua').innerHTML=result;
    

}
function thayMau(){
    let xinchao = document.getElementById('xinchao');
    xinchao.style.color='red';
}
//dùng getID lấy ra giá trị của option
//Nếu giá trị =1 thì hiển thị ra tôi là người Hà Nội
//Nếu giá trị =2 thì hiển thị ra tôi là người Bắc Ninh
//Nếu giá trị =3 thì hiển thị ra tôi là người Hà Đông
function tinh(){
    let tinh=document.getElementById('tinh');
    if(tinh.value==1){
        console.log("Tôi là người Hà Nội");
    }
    else if(tinh.value==2){
        console.log("Tôi là người Bắc Ninh");
    }
    else if(tinh.value==3){
        console.log("Tôi là người Hà Đông");
    }
}