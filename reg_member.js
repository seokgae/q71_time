var form;
var sign_in ;
var ID;
var PSWD;
var PSWD_again ;
var namee;
var email;
var birthday ;
var phone_mid ;
var phone_end ;
var phone_front ;
var gender;



window.onload = function() {

form = document.querySelector("form");
sign_in = document.getElementById("sign_in");
ID = document.getElementById("ID");
PSWD = document.getElementById("PSWD");
PSWD_again = document.getElementById("PSWD_again");
namee = document.getElementById("name");
email = document.getElementById("email");
birthday = document.getElementById("birthday");
phone_mid = document.getElementById("phone_mid");
phone_end = document.getElementById("phone_end");
phone_front = document.getElementsByName("phone_front");
phone_frontid = document.getElementById("phone_frontid");
gender = document.getElementsByName("gender");

    // console.log(phone_front);
    // console.log(phone_frontid);
    sign_in.addEventListener('click', submit);

}


function submit() {
    // var data = new FormData(form);
    let id_chk; let pswd_chk; let name_chk; let email_chk; let pswdinput_chk;

    // console.log(data);
    if (ID.value.length < 4 || ID.value.length > 12) {
        alert("ID 4글자 이상 12글자 이하!");
    } else {id_chk = true;}  console.log(id_chk);
       
    if (PSWD.value.length < 4 || PSWD.value.length > 12) {         
        alert("PSWD 4글자 이상 12글자 이하!");
    } else {pswd_chk = true;}  console.log(pswd_chk);

    if (namee.value.length < 4 || namee.value.length > 12) {         
        alert("name 4글자 이상 12글자 이하!");
    } else {name_chk = true;}  console.log(name_chk);

    if (email.value.length < 4 || email.value.length > 12) {         
        alert("email 4글자 이상 12글자 이하!");
    } else {email_chk = true;}  console.log(email_chk);

    if (PSWD.value != PSWD_again.value)
       { alert("암호 재입력 불일치");
    } else {pswdinput_chk= true;} console.log(pswdinput_chk);

    let gender_chk;
    for(let chk of gender){
        if(chk.checked == true){ gender_chk = chk.value }
    }
    // let phone_chk;
    // for(let chk of phone_front){
    //     if(chk.select == true){ phone_chk = chk.value }
    // }
    
    if (id_chk && pswd_chk && name_chk && email_chk && pswdinput_chk)
        {
            let str = 
            `아이디: ${ID.value}
            패스워드: ${PSWD.value}
            이름: ${namee.value}
            이메일: ${email.value}
            이름: ${birthday.value}
            전화번호: ${phone_frontid.value} - ${phone_mid.value} - ${phone_end.value}
            성별: ${gender_chk}         
            `

            alert(str);
        }



}
