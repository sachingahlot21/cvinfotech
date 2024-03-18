

// function handleform(form) {
//     // const name = document.forms['contactUsForm'].elements['subjects'].value
//     const name = form.fullname.value;
//     let formData = new FormData(form)
//     let formObj = {}

//     formData.forEach(
//         function (value , key) {
//             formObj[key] = value;
//         }
//     );

//     console.log(formObj)
// }

// <
const btnnxt = document.getElementById('btndiv1')
        btnnxt.style.display = 'none'

function handlePrevBtn(){
    let ul = document.getElementById('div2ul')
    const style = ul.currentStyle || window.getComputedStyle(ul)
    const currentMargin =  parseInt(style.marginLeft)
    if(currentMargin < 0 && currentMargin > -1260){
        ul.style.marginLeft = `${currentMargin+860}px`
        const btnnxt = document.getElementById('btndiv1')
        btnnxt.style.display = 'none'
        const btnnxt2 = document.getElementById('btndiv2')
        btnnxt2.style.display = 'block'
    }
    else if(currentMargin <= -1260){
        ul.style.marginLeft = `${currentMargin+400}px`
        const btnnxt2 = document.getElementById('btndiv2')
        btnnxt2.style.display = 'block'
       
    }
}

// >
function handleNextBtn(){
    let ul = document.getElementById('div2ul')
    const style = ul.currentStyle || window.getComputedStyle(ul)
    const currentMargin =  parseInt(style.marginLeft)
    if(currentMargin > -800){
        ul.style.marginLeft = `${currentMargin-860}px`
        const btnnxt = document.getElementById('btndiv1')
        btnnxt.style.display = 'block'
    }
    else if(currentMargin < -800){
        ul.style.marginLeft = `${currentMargin-400}px`
       
        const btnnxt = document.getElementById('btndiv2')
        btnnxt.style.display = 'none'
    }
} 
