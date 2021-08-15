let userFormDOM = document.querySelector(`#userForm`)
userFormDOM.addEventListener(`submit`, formHandler)
let alertDOM = document.querySelector(`#alert`)


const alertFunction = (title, message, className="warning") =>
 `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(e){
    e.preventDefault()

    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if((USER_NAME.value && SCORE.value) && (SCORE.value >=0 && SCORE.value <= 100)){

        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value =""
        alertDOM.innerHTML = alertFunction(
            `Giriş Başarılı!`,
            `İyi günler.`,
            `success`
        )

    }else{
        alertDOM.innerHTML = alertFunction(
            `Hata!`,
            `Lütfen formu kontrol ediniz.`,
            `danger`
        )

    }

}

const userListDOM = document.querySelector("#userList")
function addItem(userName, score){

        let liDOM = document.createElement(`li`)
        let letterGrade = (90 <=score) ? "AA" :
        (85 <=score) ? "BA" : 
        (80 <=score) ? "BB" : 
        (75 <=score) ? "CB" :
        (70 <=score) ? "CC" :
        (65 <=score) ? "DC" :
        (60 <=score) ? "DD" :
        (50 <=score) ? "FD" : "FF"
        
        liDOM.innerHTML = `
         ${userName}
        <span class="badge bg-primary rounded-pill">${score} ${letterGrade}</span>
         `

        liDOM.classList.add(`list-group-item`, `d-flex`, `justify-content-between`,  `align-items-center`)
        userListDOM.append(liDOM)   

}

function onChange(){
    const lastLiDOM = document.querySelector(`.list-group-item:last-child`)
    lastLiDOM.remove()
}