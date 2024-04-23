// let arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
//for dùng để thực hiện những công việc chúng ta muốn lặp đi lặp lại nhiều lần
//for(đk bắt đầu;đk kết thúc;bước nhảy){công việc}
// for(let i=0;i<5;i++){
//     console.log("Hello World");
    
// }
    // for(let i=0;i<=arr.length;i++){
    //     console.log(arr[i]);
    // }


    //for of
    // for(let tênbiến of tênmảng){
    //     công việc
    // }
    // for(let item of arr){
    //     console.log(item);
    // }
    //Dùng for tính tổng các số lẻ trong mảng và dùng for of tính tổng các số chẵn trong mảng
    //  let sum=0;
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]%2!=0){
    //     sum+=arr[i];
    //     }
    // }console.log(sum);
    // for(let i of arr){
    //     if(arr[i]%2==0){
           
    //         sum+=arr[i];
    //     }
    // }console.log(sum);
    //khai báo 1 mảng ít nhất 5 ptu kiểu chuỗi 
    //nhập vào 1 cái tên bất kỳ,
    //kiểm tra xem cái tên đó có trong mảng hay không
    //nếu có thì in ra 
    //nếu không có thì thêm tên đó vào đầu mảng
    // let arr=["Toán","lý","hóa","văn","Sinh"];
    // let ten=prompt("Nhập vào tên:");
    // if(arr.indexOf(ten)>=0){
    //     console.log("Không nên làm như thế đâu");
    // }
    // else{
    //     arr.unshift(ten);
    // }
    // console.log(arr);
    // for(let i of arr){
    //     if(arr.indexOf(ten)>=0){
    //         console.log("Không nên làm như thế đâu");
    //     }
    //     else{
    //         arr.unshift(ten);
    //     }
    // }
    // console.log(arr);
    // let check= false;
    // for(let item of arr){
    //     if(item== ten){
    //         check=true;
    //         break;
    //     }
    
    // }
    // if (check==false){
    //     arr.unshift(ten);
    //     console.log(arr);
    // }
    // else{
    //     console.log("Không nên làm như thế đâu");
    // }
    //Nhập vào 1 cái tên bất kỳ, kiểm tra tên vừa nhập có trong mảng hay không
    //Nếu có thì nhập vào một cái tên khác để thay thế tên đó
    //Nếu không có thì hiển thị "Bạn không có nyc tên là + tên nhập ban đầu"
    // let arr=["Quang" ,"Tú", "Huy" ,"Thành","Nam"];
    // let ten=prompt("Nhập tên nyc");
    // let checkTen= arr.indexOf(ten);
    // let check=false;
    // for(let item of arr){
    //     if(item== ten){
    //         check=true;
    //         break;
    //     }
    // }
    // if(check==false){
    //     console.log(`Bạn không có nyc tên là ${ten}`);
    // }
    // else{
    //    let  tenkhac=prompt("Nhập vào tên khác thay thế:")
    //    arr.splice(checkTen,1,tenkhac);
    //    console.log(arr);
    // }