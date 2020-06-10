console.log("Bài tập 1: Thêm xóa DOM");
console.log("Ban đầu danh sách cầu thủ trống");

console.log("Chương trình chạy thêm tên các cầu thủ vào danh sách: ");
let listCauThu = document.getElementById("listCauThu");
function them_cau_thu(tenCauThuMoi) {
    let cauThuMoi = "<li id='" + tenCauThuMoi +"'>" + tenCauThuMoi +"</li>";
    listCauThu.innerHTML += cauThuMoi;
}
them_cau_thu("Ronaldo");
them_cau_thu("Messi");
them_cau_thu("Neymar");
console.log(listCauThu);

console.log("Xóa tên Neymar trong danh sách cầu thủ:");
let cauThuXoa = document.getElementById("Neymar");
cauThuXoa.remove();
console.log(listCauThu);

//-------------------------------------------------

console.log("Bài tập 2: Event Click\r\n Chương trình thêm tên cầu thủ khi người dùng click");
let button = document.getElementById("addingButton");
button.addEventListener("click",function() {
    them_cau_thu("Kante");
    console.log(listCauThu);
})

//-------------------------------------------------

console.log("Bài tập 3: Keyboard");
let tenCauThuNhap = document.getElementById("nhapTenCauThu");
tenCauThuNhap.addEventListener("keypress",function(data){
    if (data.keyCode == 13) {
        them_cau_thu(tenCauThuNhap.value);
    }
})

//-------------------------------------------------

console.log("Bài tập 4:");