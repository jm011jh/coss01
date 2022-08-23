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