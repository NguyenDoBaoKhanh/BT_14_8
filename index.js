function tienLuong () {
    var soNgay = document.getElementById("so-ngay").value*100000;
    var tienLuong = document.getElementById
    console.log("💩 ~ tienLuong ~ soNgay:", soNgay)
    var tienLuong = soNgay * 100000;
    document.getElementById("result");
}

function ketQua () {
    var soMot=document.getElementById("so-mot").value*1;
    console.log("💩 ~ ketQua ~ soMot:", soMot)
    var soHai=document.getElementById("so-hai").value*1;
    console.log("💩 ~ ketQua ~ soHai:", soHai)
    var soBa=document.getElementById("so-ba").value*1;
    console.log("💩 ~ ketQua ~ soBa:", soBa)
    var soBon=document.getElementById("so-bon").value*1;
    console.log("💩 ~ ketQua ~ soBon:", soBon)
    var soNam=document.getElementById("so-nam").value*1;
    console.log("💩 ~ ketQua ~ soNam:", soNam)
    
    var trungBinh = (soMot + soHai +soBa + soBon +soNam) / 5 


function chuyenDoi() {
    var USD=document.getElementById("USD").value*1;
    var VND=document.getElementById("VND").value;
    var ketQua=USD*VND;
}




}
