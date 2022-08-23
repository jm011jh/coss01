const inputBox = document.querySelectorAll(".input-box")

inputBox.forEach(function(el,_i){
    let input = el.querySelector("input")
    let parent = el.parentElement;
    input.addEventListener("focus",function(){
        parent.classList.remove("error-now")
        for(a of inputBox){
            a.classList.remove("focused")
        }
        el.classList.add("focused")
    })
})