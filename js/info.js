const infoSelectButton = document.querySelectorAll(".info--wrap-body-row-inputRow-selectButton") //select open button
infoSelectButton.forEach(function(el){
    let parent = el.closest(".inputParent")
    let selectBox = parent.querySelector(".info--wrap-body-row-inputRow-list")
    let selectBoxAll = document.querySelectorAll(".info--wrap-body-row-inputRow-list")
    let listItem = selectBox.querySelectorAll(".info--wrap-body-row-inputRow-listItem")
    el.addEventListener("click",function(){
        for(a of selectBoxAll){
            a.classList.remove("show")
        }
        for(a of listItem){
            a.classList.remove("show")
        }
        selectBox.classList.add("show")//버튼을 누르면 셀렉박스를 보여주세요
    })
})

const selectType1 = document.querySelectorAll(".selectType1")//항목 셀렉트박스 항목들
selectType1.forEach(function(el){
        el.addEventListener("click",function(){
            let text = el.innerHTML
            let parent = el.closest(".inputParent")
            let selectBox = parent.querySelector(".info--wrap-body-row-inputRow-list")
            let button = parent.querySelector(".info--wrap-body-row-inputRow-selectButton p")
            let input = parent.querySelector("input")
            selectBox.classList.remove("show")
            input.value = text
            button.innerHTML = text
            console.log(text)
        })
})
const selectType2 = document.querySelectorAll(".selectType2")//이메일리스트 셀렉트박스 항목들
selectType2.forEach(function(el){
        el.addEventListener("click",function(){
            let text = el.innerHTML
            let parent = el.closest(".inputParent")
            let selectBox = parent.querySelector(".info--wrap-body-row-inputRow-list")
            let input = parent.querySelector(".emailInput")
            selectBox.classList.remove("show")
            console.log(input)
            input.value = text
            input.innerHTML = text
            input.classList.add("sex")
        })
})
const fileInput = document.getElementById("fileInput")
const fileNameHere = document.getElementById("fileNameHere")
function fileCheck(file){
    setTimeout(()=>{
        //파일 경로.
        var filePath = file.value;
        console.log(filePath)
        //전체경로를 \ 나눔.
        var filePathSplit = filePath.split('\\'); 
        console.log(filePathSplit)
        //전체경로를 \로 나눈 길이.
        var filePathLength = filePathSplit.length;
        console.log(filePathLength)
        //마지막 경로를 .으로 나눔.
        var fileNameSplit = filePathSplit[filePathLength-1].split('.');
        console.log(fileNameSplit)
        //파일명 : .으로 나눈 앞부분
        var fileName = fileNameSplit[0];
        console.log(fileName)
        //파일 확장자 : .으로 나눈 뒷부분
        var fileExt = fileNameSplit[1];
        console.log(fileExt)
        //파일 크기
        var fileSize = file.files[0].size;
        console.log(fileSize)
        console.log(file)

        let textCut = ''
        if(fileName.length>25){textCut = fileName.substring(0,25) + "..."
        }else{fileName = textCut}

        fileNameHere.innerHTML = '';
        fileNameHere.innerHTML = textCut
    })
}