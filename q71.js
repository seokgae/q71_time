var id;
var password;
var login;
var login_div;
var time;
const id_chk = 'mario';
const password_chk = 'cupa';

window.onload = function(){
    id = document.getElementById("ID");
    password = document.getElementById("PSWD");
    login = document.getElementById("login");
    login_div = document.getElementById("login_input");
    time = document.getElementById('time');

    login.addEventListener('click', loginnow);
    setInterval(calltime, 1);
    // calltime();

}

function loginnow(){
    // alert(
    //     "아이디 : "+id.value
    //     +"\n비밀번호 : "+password.value
    // ); ------------------------------------------------q71
    
    if (id.value == id_chk && password.value == password_chk){
        alert('로그인 성공!');
        login_div.innerHTML = id.value +"회원님. 환영합니다!"
    }
    else
        alert('로그인 실패!');

}

function calltime() {
    var now = new Date();
var str;

str = `${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDay()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초 ${now.getMilliseconds()}밀리초`

time.innerHTML = str;
}

