const pwSwitchButton = document.getElementById("pwSwitch")
const inputPw = document.getElementById("userPw")
pwSw = false;
pwSwitchButton.addEventListener("click",function(){
    if(pwSw == false){
        pwSwitchButton.classList.add("activate")
        inputPw.setAttribute("type","text")
        pwSw = true
    }else if(pwSw == true){
        pwSwitchButton.classList.remove("activate")
        inputPw.setAttribute("type","password")
        pwSw = false
    }
})