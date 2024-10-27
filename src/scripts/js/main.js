let loginFormBtn = document.querySelector(".account .menu");
let formSection = document.querySelector(".account .auth");
let closeFormSection = formSection.querySelector(".close")
loginFormBtn.addEventListener("click", ()=>{
    formSection.classList.toggle("active");
})
closeFormSection.addEventListener("click", ()=>{
    formSection.classList.remove("active")
})