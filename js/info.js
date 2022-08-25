const infoSelectButton = document.querySelectorAll(".info--wrap-body-row-inputRow-selectButton") //select open button
infoSelectButton.forEach(function(el){
    let parent = el.closest(".inputParent")
    let selectBox = parent.querySelector(".info--wrap-body-row-inputRow-list")
    let selectBoxAll = document.querySelectorAll(".info--wrap-body-row-inputRow-list")
    let buttonText = el.querySelector("p")
    let input = parent.querySelector("input")
    el.addEventListener("click",function(){
        for(a of selectBoxAll){
            a.classList.remove("show")
        }
        selectBox.classList.add("show")//버튼을 누르면 셀렉박스를 보여주세요
    })

    let listItem = selectBox.querySelectorAll(".info--wrap-body-row-inputRow-listItem")
    listItem.forEach(function(list){
        list.addEventListener("click",function(){
            let text = list.innerHTML
            let textCut = ''
            if(text.length>20){textCut = text.substring(0,20) + "..."
            }else{textCut = text}
            input.value = text
            buttonText.innerHTML = textCut
            selectBox.classList.remove("show")
        })
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