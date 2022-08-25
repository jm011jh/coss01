const inputBox = document.querySelectorAll(".input-box")

inputBox.forEach(function(el,_i){
    console.log(el)
    let input = el.querySelector("input")
    let parent = el.parentElement;
    input.addEventListener("focus",function(){
        console.log("focused")
        parent.classList.remove("error-now")
        for(a of inputBox){
            a.classList.remove("focused")
        }
        el.classList.add("focused")
    })
})

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