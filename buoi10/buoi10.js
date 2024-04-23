//đối tượng là những sự vật mà ta có thể cầm được, sờ được,..
//đối tượng gồm có 2 phần: 
//thuộc tính(đặc điểm): nó góp phần hình thành và nhận dạng đối tượng
//phương thức: là những hành động mà đối tượng đó có thể thưcj hiện được
//cách khai báo 1 đối tượng trong js
// let sv1 = {
//     ten : "Nguyễn Văn A",
//     tuoi:18,
//     lop:'WE18327',
//     'nganh-hoc':'CNTT',
//     di:function () {
//         alert('Đi bằng 2 chân thôi');
//     },
//     hienThi : function () {
//         return this.ten +  '-' + this.lop;
//     }
// }
// console.log(sv1);
// console.log(sv1['ten']);//in ra thuộc tính
// console.log(sv1.ten);
// console.log(sv1['nganh-hoc']);
// sv1.di();
// console.log(sv1.hienThi());
//Tạo 1 đối tưognj là cr gồm những thuộc tính sau
//ten,vong1,vong2,vong3
//in ra lần lượt tất cả các giá trị thuôcj tính
//có 1 phương thức tính trung bình số đo 3 vòng
// let crush ={
//     ten:'Nguyễn Linh',
//     vong1:70,
//     vong2:80,
//     vong3:70,
//     avg:function(){
//         let sum=this.vong1+this.vong2+this.vong3;
//         let avg=sum/3;
//         return avg;
//     },
//     dihoc:function(a,b){
//         return a+b;
//     }
// }
// console.log(crush.ten);
// console.log(crush.vong1);
// console.log(crush.vong2);
// console.log(crush.vong3);
// console.log(crush.avg());
// console.log(crush.dihoc(1,1));
//class là khuôn mẫu để tạo ra nhiều đối tượng 
//functions tenClass(tham số 1, tham số 2,...){
    //Khai báo thuộc tính
    //this.tên thuộc tính = tham số,
    //khai báo 1 phương thức
    //this.tên phương thức = function(){}
//}
//this để phân biệt đâu là thuộc tính, đâu là phương thức 
// trên class có bao nhiêu thuộc tính thì có bấy nhiêu tham số
// tạo ra 1 khuôn mẫu của crush
function Crush(name,vong_1,vong_2,vong_3){
    //khai báo thuộc tính
    this.ten=name;
    this.vong1=vong_1;
    this.vong2=vong_2;
    this.vong3=vong_3;
    //khai báo phương thức
    this.di=function(){
        alert('Đi bằng 2 chân');
    };
    this.dihoc=function(a,b){
        return a+b;
    }
}
//khởi tạo 1 đối tượng
let a= new Crush('Nguyễn Văn A',60,60,60);
let b= new Crush('Nguyễn Văn B',60,60,60);
console.log(a);
console.log(a.ten);
console.log(b.ten);
//truy cập phương thức
// a.dihoc();

//array object
let arrCrush= [];
arrCrush.push(new Crush('Nguyễn Văn C',60,60,60));
arrCrush[1] = new Crush('Nguyễn Văn E',60,60,60);
arrCrush.push(new Crush('Nguyễn Văn D',60,60,60));
console.log(arrCrush);
//truy xuất giá trị ra 
//truy xuất toàn bộ thông tin của đối tượng trong mảng
console.log(arrCrush[1]);
//truy xuất ra 1 thuộc tính của đối tượng
// tên mảng [vị trí].thuộc tính
console.log(arrCrush[1].ten);
//truy xuất 1 phương thức của đối tượng
arrCrush[1].di();
console.log(arrCrush[1].dihoc(2,2));