function bai_1(){
    var money_perday =100_000,
    input_data = document.getElementById("number");
    working_days= input_data.value;
    let output1 = document.getElementById("output1"),
    salary= working_days*money_perday;

    output1.innerHTML =`Your month salary: ${salary.toLocaleString()}`
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
