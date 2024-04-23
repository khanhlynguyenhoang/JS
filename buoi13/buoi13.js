// swal("Xin Chào");
// swal("Here's the title!", "...and here's the text!");
// swal("Good job!", "You clicked the button!", "success");
// swal({
//     title:"Title",
//     text: "Hello world!",
//   });
function myBtn(email)
    	{
    		//Dùng DOM để in ra giá trị nhâpj vào của form input
            let a= document.getElementById('email');
            console.log(a.value);
            let thongBao=document.getElementsByClassName('thongbao');
            //validate rỗng
            if(a.value==""){
                thongBao[0].innerHTML = "Vui lònd nhập đầy đủ thông tin email";
                //swal("Bạn chưa nhập email","Vui lòng nhập đủ thông tin ","error");
                //return;
            }
            //validate email
            let regexEmail= /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
            //Nếu là email thì trả về TRUE còn không phải là email thì trả về FALSE
            console.log("Kiểm tra email:",regexEmail.test(a.value));
            if(!regexEmail.test(a.value)){
                thongBao[0].innerHTML = "Vui lòng nhập lại thông tin email";

                //swal("Bạn nhập sai email","Vui lòng nhập lại thông tin ","error");
                //return;
            }
            else if(regexEmail.test(a.value)){
                thongBao[0].innerHTML=""
                // return;
            }
            //sdt
            let sdt=document.getElementById('sodt');
            console.log(sdt.value);
            let thongBaosdt=document.getElementsByClassName('thongBaosdt');
            let regexSDT=/((09|03|07|08|05)+([0-9]{8})\b)/g;
            console.log("1111111111111111", regexSDT.test(sdt.value));
             if(regexSDT.test(sdt.value)){
                thongBaosdt[0].innerHTML="";
                // return;
            }
             else if(regexSDT.test(sdt.value)==false){
                thongBaosdt[0].innerHTML = "Vui lòng nhập lại thông tin sdt";
                // return;
            }
            
                }
function mySDT(sdt){
    
}