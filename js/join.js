const pwSwitchButton = document.getElementById("pwSwitch")
const pwSwitchButtonRe = document.getElementById("pwSwitchRe")
const inputPw = document.getElementById("userPw")
const inputPwRe = document.getElementById("userPwRe")
pwSw = false;
pwSwRe = false;
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
pwSwitchButtonRe.addEventListener("click",function(){
    if(pwSwRe == false){
        pwSwitchButtonRe.classList.add("activate")
        inputPwRe.setAttribute("type","text")
        pwSwRe = true
    }else if(pwSwRe == true){
        pwSwitchButtonRe.classList.remove("activate")
        inputPwRe.setAttribute("type","password")
        pwSwRe = false
    }
})