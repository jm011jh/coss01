/**
 * 패스워드 보여주기 스위치 버튼
 * @const {.input-password-switch}
 */
const pwSw = document.querySelectorAll(".input-password-switch")//패스워드 보여주기 스위치 버튼
pwSw.forEach(function(el){
    let parent = el.closest(".input-row")
    let input = parent.querySelector(".passwordInput")
    el.addEventListener("click",function(){
        if(el.classList.contains("activate")){
            el.classList.remove("activate")
            input.type = "password"
        }else if(!el.classList.contains("activate")){
            el.classList.add("activate")
            input.type = "text"
        }
    })
})
/**
 * 셀렉트 박스 전부 오프로 하는 펑션
 */
function selectBoxOff(){
    for(item of selectType2){
        item.classList.remove("on")
    }
    for(item of selectType1){
        item.classList.remove("on")
    }
}
/**
 * 이메일 리스트 열어보는 버튼
 * @const {.inputType1}
 */
const inputType1 = document.querySelectorAll(".inputType1")//이메일 리스트 열어보는 버튼
inputType1.forEach(function(el){
    let parent = el.closest(".input-row2")
    let parent2 = el.closest(".input-row-email")
    let inputBox = el.closest(".input-box")
    let selectBox = parent.querySelector(".selectType1")
    el.addEventListener("click",function(){
        selectBoxOff()
        parent2.classList.remove("error-now")
        selectBox.classList.add("on")
        inputBox.classList.add("focused")
    })
})
/**
 * 이메일리스트 셀렉트박스 항목들
 * @const {.inputType1}
 */
const selectType1 = document.querySelectorAll(".selectType1")//이메일리스트 셀렉트박스 항목들
selectType1.forEach(function(el){
    let parent = el.closest(".input-row2")
    let input = parent.querySelector(".inputHere1")
    let list = el.querySelectorAll(".selectList1")
    let selectBox = parent.querySelector(".selectType1")
    list.forEach(function(el){
        el.addEventListener("click",function(){
            let text = el.innerHTML
            input.value = text
            if(text === "직접입력"){
                input.value = ''
            }
            selectBox.classList.remove("on")
        })
    })
})
/**
 * 셀렉터박스 항목들
 * @const {.inputType2}
 */
 const inputType2 = document.querySelectorAll(".inputType2")//셀렉터박스 항목들
 inputType2.forEach(function(el){
     el.addEventListener("click",function(){
        selectBoxOff()
         let parent = el.closest(".input-box")
         let parent2 = el.closest(".input-row")
         let selectBox = parent.querySelector(".selectType2")
         selectBox.classList.add("on")
         parent.classList.add("focused")
         parent2.classList.remove("error-now")  
     })
 })
/**
 * 셀렉터박스 열어보는 버튼
 * @const {.selectType2}
 */
const selectType2 = document.querySelectorAll(".selectType2")//셀렉터박스 열어보는 버튼
selectType2.forEach(function(el){
    let parent = el.closest(".input-box")
    let input = parent.querySelector(".inputType2")
    let list = el.querySelectorAll(".selectList2")
    let selectBox = parent.querySelector(".selectType2")
    console.log(list)
    list.forEach(function(el,i){
        el.addEventListener("click",function(){
            let text = el.innerHTML
            input.value = text
            selectBox.classList.remove("on")
            parent.classList.remove("focused")
        })
    })
})

const inputBox = document.querySelectorAll(".input-box")

inputBox.forEach(function(el,_i){
    console.log(el)
    let input = el.querySelector("input")
    let parent = el.parentElement;
    if(input){
        input.addEventListener("focus",function(){
            console.log("focused")
            parent.classList.remove("error-now")
            for(a of inputBox){
                a.classList.remove("focused")
            }
            el.classList.add("focused")
            for(el of selectType2){el.classList.remove("on")}
            for(el of selectType1){el.classList.remove("on")}
        })
    }
})
// input text check...
var engCheck = /[a-z]/;
var numCheck = /[0-9]/;
var specialCheck = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
// password matching check
const userPw = document.getElementById("userPw")
const userPwRe = document.getElementById("userPwRe")
var pw = '';
var pwRe = '';
userPw.addEventListener("input",function(){//check the value of pw
    let parent = this.closest(".input-row")
    pw = this.value
    userPwRe.value = '';
    if(engCheck.test(pw) == false || numCheck.test(pw) == false || pw.length < 6){
        parent.classList.add("error-now")
    }else{
        parent.classList.remove("error-now")
    }
})
userPwRe.addEventListener("input",function(){//check the value of pwRe
  pwRe = this.value;
  let parent = this.closest(".input-row")
  if(pwRe === pw){//error output when the pw is not matched
    parent.classList.remove("error-now")
  }
})
userPwRe.addEventListener("focusout",function(){//check the value when focusout
    let parent = this.closest(".input-row")
    if(pwRe == pw){//if pw is matched, erase the error class
        parent.classList.remove("error-now")
    }else{//if pw is not matched error output
        parent.classList.add("error-now")
    }
})

//id value check
const userId = document.getElementById("userId")

userId.addEventListener("input",function(){
    let parent = this.closest(".input-row")
    let text = this.value;
    console.log(engCheck.test(text))
    if(text.search(/\s/) != -1){
        console.log("띄어씀")
        parent.classList.add("error-now")
    }else if(text.length < 8){
        console.log("8자 미만임")
        parent.classList.add("error-now")
    }else if(specialCheck.test(text)){
        console.log("특문을 사용함")
        parent.classList.add("error-now")
    }else if(engCheck.test(text) == false || numCheck.test(text) == false){
        console.log("영문 혹은 숫자를 포함하지 않음")
        parent.classList.add("error-now")
    }else{
        parent.classList.remove("error-now")
    }
})

const coNum = document.getElementById("coNum")
coNum.addEventListener("input",function(){
    let text = this.value;
    let parent = this.closest(".input-row")
    if(text.length>0){
        if(isNaN(text)){
          parent.classList.add("error-now")
        }else if(text.length < 10 || text.length > 10){
          parent.classList.add("error-now")
        }else{
          parent.classList.remove("error-now")
        }
    }
})
coNum.addEventListener("focusout",function(){
    let text = this.value;
    let parent = this.closest(".input-row")
    if(text.length>0){
        if(isNaN(text)){
            parent.classList.add("error-now")
        }else if(text.length < 10 || text.length > 10){
            parent.classList.add("error-now")
        }else{
            parent.classList.remove("error-now")
        }
    }
})

const allCheck = document.getElementById("allCheck")
const allCheckButton = allCheck.querySelector("span")
const check01 = document.getElementById("check01")
const check02 = document.getElementById("check02")
const check03 = document.getElementById("check03")
const CheckSub = document.querySelectorAll(".checkmark-center")
allCheckButton.addEventListener('click',function(){
    if(allCheck.classList.contains("checked")){
        allCheck.classList.remove("checked")
        check01.classList.remove("checked")
        check02.classList.remove("checked")
        check03.classList.remove("checked")
    }else{
        allCheck.classList.add("checked")
        check01.classList.add("checked")
        check02.classList.add("checked")
        check03.classList.add("checked")
    }
})
CheckSub.forEach(function(el){
    let parent = el.closest(".input-subject-small")
    let span = el.querySelector("span")
    console.log(parent)
    span.addEventListener("click",function(){
        if(el.classList.contains("checked")){
            el.classList.remove("checked")
            allCheck.classList.remove("checked")
        }else{
            el.classList.add("checked")
        }
    })
    el.addEventListener("click",function(e){
        if(e.target == span){
            return;
        }else{
            parent.classList.toggle("open")
        }
    })
})