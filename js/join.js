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

// open button
const openEmailList = document.getElementById("openEmailList")
const openCoEmailList = document.getElementById("openCoEmailList")


// select box
const emailList = document.getElementById("emailList")
const coEmailList = document.getElementById("coEmailList")
const yearList = document.getElementById("yearList")
const classList = document.getElementById("classList")

// select options
const emailListItem = emailList.querySelectorAll(".email-list-item")
const coEmailListItem = coEmailList.querySelectorAll(".co-email-list-item")
const yearListItem = yearList.querySelectorAll(".year-list-item")
const classListItem = classList.querySelectorAll(".class-list-item")


// input
const chargerEmail = document.getElementById("chargerEmail")
const coEmail = document.getElementById("coEmail")
const coYear = document.getElementById("coYear")
const doClass = document.getElementById("doClass")

openEmailList.addEventListener('click',function(){
    emailList.classList.add("on")
})
openCoEmailList.addEventListener('click',function(){
    coEmailList.classList.add("on")
})
coYear.addEventListener('click',function(){
    yearList.classList.add("on")
})
doClass.addEventListener('click',function(){
    classList.classList.add("on")
})
emailListItem.forEach(function(el){
    el.addEventListener("click",function(){
        let text = el.innerHTML;
        chargerEmail.value = text
        if(text === "직접입력"){
            chargerEmail.value = ''
        }else{
        }
        emailList.classList.remove("on")
        openEmailList.querySelector('p').innerHTML = ''
        openEmailList.querySelector('p').innerHTML = text
    })
})
coEmailListItem.forEach(function(el){
    el.addEventListener("click",function(){
        let text = el.innerHTML;
        coEmail.value = text
        if(text === "직접입력"){
            coEmail.value = ''
        }else{
        }
        coEmailList.classList.remove("on")
        openCoEmailList.querySelector('p').innerHTML = ''
        openCoEmailList.querySelector('p').innerHTML = text
    })
})
yearListItem.forEach(function(el){
    el.addEventListener("click",function(){
        console.log('hi')
        let text = el.innerHTML;
        coYear.value = text
        coYear.placeholder = text
        if(text === "직접입력"){
            coYear.value = ''
            coYear.placeholder = ''
        }else{
        }
        yearList.classList.remove("on")
        openYearList.querySelector('p').innerHTML = ''
        openYearList.querySelector('p').innerHTML = text
    })
})
classListItem.forEach(function(el){
    el.addEventListener("click",function(){
        console.log('hi')
        let text = el.innerHTML;
        doClass.value = text
        doClass.placeholder = text
        if(text === "직접입력"){
            doClass.value = ''
            doClass.placeholder = ''
        }else{
        }
        classList.classList.remove("on")
        openclassList.querySelector('p').innerHTML = ''
        openclassList.querySelector('p').innerHTML = text
    })
})