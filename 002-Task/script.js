const ulDOM = document.querySelector(`#list`);
const inputDOM = document.querySelector(`#task`);
const toastDOM = document.querySelector(`#toast`)




// Yapıldı işareti sağlayan fonksiyon
ulDOM.addEventListener(`click`, function(item){
    if(item.target.tagName === `LI`){
        item.target.classList.toggle(`checked`)
    }
})

let counter = 0
// Element ekleyen fonksiyon
function newElement(){
    const INPUT_VALUE = inputDOM.value
    if(!INPUT_VALUE || INPUT_VALUE.replace(/^\s+|\s+$/g, "").length == 0){  //  /^\s+|\s+$/g -> https://stackoverflow.com/questions/3387088/trim-in-javascript-what-this-code-is-doing
        $(".error").toast("show");
    }else{
    const liDOM = document.createElement(`li`);
    liDOM.innerHTML =`${INPUT_VALUE} 
    <span class="close">×</span>`;
    ulDOM.append(liDOM);
    $(".success").toast("show");
    
    // Local storage'e ekledik
    localStorage.setItem(`Task-${counter.toString()}`, INPUT_VALUE)
    counter++;
    }    
}

// Element silen fonksiyon
ulDOM.addEventListener(`click`, function(item){
    if(item.target.tagName === "SPAN"){
        item.target.parentElement.remove();
    }
})



