var form;
var sign_in ;
var ID;
var PSWD;
var PSWD_again;
var namee;
var email;
var birthday ;
var phone_mid ;
var phone_end ;
var phone_front ;
var gender;
var id_chk;
var id_chk2;
var pswd_chk;
var pswd_chk2;
var pswd_again_chk;
var pswd_again_chk2;
var email_chk;
var email_chk2;
var name_chk;
var name_chk2;



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
id_chk = document.getElementById("id_chk");
id_chk2 = document.getElementById("id_chk2");
pswd_chk = document.getElementById("pswd_chk");
pswd_chk2 = document.getElementById("pswd_chk2");
pswd_again_chk = document.getElementById("pswd_again_chk");
pswd_again_chk2 = document.getElementById("pswd_again_chk2");
email_chk = document.getElementById("email_chk");
email_chk2 = document.getElementById("email_chk2");
name_chk = document.getElementById("name_chk");
name_chk2 = document.getElementById("name_chk2");

    // console.log(phone_front);
    // console.log(phone_frontid);
    sign_in.addEventListener('click', submit);
    ID.addEventListener('keyup',id_letterchk);
    PSWD.addEventListener('keyup',pswd_letterchk);
    PSWD.addEventListener('keyup',pswd_again_letterchk);
    PSWD_again.addEventListener('keyup',pswd_again_letterchk);
    email.addEventListener('keyup',email_letterchk);
    namee.addEventListener('keyup',name_letterchk);

}


function submit() {
    // var data = new FormData(form);
    let id_valid; let pswd_valid; let name_valid; let email_valid; let pswdinput_valid;

    // console.log(data);
    if (ID.value.length < 4 || ID.value.length > 12) {
        alert("ID 4글자 이상 12글자 이하!");
    } else {id_valid = true;}  console.log(id_valid);
       
    if (PSWD.value.length < 4 || PSWD.value.length > 12) {         
        alert("PSWD 4글자 이상 12글자 이하!");
    } else {pswd_valid = true;}  console.log(pswd_valid);

    if (namee.value.length < 4 || namee.value.length > 12) {         
        alert("name 4글자 이상 12글자 이하!");
    } else {name_valid = true;}  console.log(name_valid);

    if (email.value.length < 4 || email.value.length > 12) {         
        alert("email 4글자 이상 12글자 이하!");
    } else {email_valid = true;}  console.log(email_valid);

    if (PSWD.value != PSWD_again.value)
       { alert("암호 재입력 불일치");
    } else {pswdinput_valid= true;} console.log(pswdinput_valid);

    let gender_chk;
    for(let chk of gender){
        if(chk.checked == true){ gender_chk = chk.value }
    }
    // let phone_valid;
    // for(let chk of phone_front){
    //     if(chk.select == true){ phone_valid = chk.value }
    // }
    
    if (id_valid && pswd_valid && name_valid && email_valid && pswdinput_valid)
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

function id_letterchk () {
    const letter = ID.value;
    if(letter.length > 3 && letter.length < 13) {
        id_chk2.style.fontWeight = 'normal';
        id_chk.innerHTML = `✔  `
        id_chk.style.color = '#44d160'; 
        ID.style.backgroundColor = '#dcfbdb';
    }
    else{
        id_chk.innerHTML = `✖  `
        id_chk.style.color = '#e15a5a'; 
        id_chk2.style.fontWeight = 'bold'; 
        ID.style.backgroundColor = '#f9e3e3';
    }
}
function pswd_letterchk () {
    const letter = PSWD.value;
    if(letter.length > 3 && letter.length < 13) {
        pswd_chk2.style.fontWeight = 'normal';
        pswd_chk.innerHTML = `✔  `
        pswd_chk.style.color = '#44d160'; 
        PSWD.style.backgroundColor = '#dcfbdb';
    }
    else{
        pswd_chk.innerHTML = `✖  `
        pswd_chk.style.color = '#e15a5a'; 
        pswd_chk2.style.fontWeight = 'bold'; 
        PSWD.style.backgroundColor = '#f9e3e3';
    }
}
function pswd_again_letterchk () {
    const letter = PSWD_again.value;
    if(PSWD.value == PSWD_again.value) {
        pswd_again_chk2.style.fontWeight = 'normal';
        pswd_again_chk.innerHTML = `✔  `
        pswd_again_chk2.innerHTML = `비밀번호 일치`
        pswd_again_chk.style.color = '#44d160'; 
        PSWD_again.style.backgroundColor = '#dcfbdb';
    }
    else{
        pswd_again_chk.innerHTML = `✖  `
        pswd_again_chk2.innerHTML = `비밀번호 불일치`
        pswd_again_chk.style.color = '#e15a5a'; 
        pswd_again_chk2.style.fontWeight = 'bold'; 
        PSWD_again.style.backgroundColor = '#f9e3e3';
    }
}
function email_letterchk () {
    const letter = email.value;
    if(letter.length > 3 && letter.length < 13) {
        email_chk2.style.fontWeight = 'normal';
        email_chk.innerHTML = `✔  `
        email_chk.style.color = '#44d160'; 
        email.style.backgroundColor = '#dcfbdb';
    }
    else{
        email_chk.innerHTML = `✖  `
        email_chk.style.color = '#e15a5a'; 
        email_chk2.style.fontWeight = 'bold'; 
        email.style.backgroundColor = '#f9e3e3';
    }
}
function name_letterchk () {
    const letter = namee.value;
    if(letter.length > 3 && letter.length < 13) {
        name_chk2.style.fontWeight = 'normal';
        name_chk.innerHTML = `✔  `
        name_chk.style.color = '#44d160'; 
        namee.style.backgroundColor = '#dcfbdb';
    }
    else{
        name_chk.innerHTML = `✖  `
        name_chk.style.color = '#e15a5a'; 
        name_chk2.style.fontWeight = 'bold'; 
        namee.style.backgroundColor = '#f9e3e3';
    }
}
