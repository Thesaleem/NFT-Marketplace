const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const allNavLinks = document.querySelectorAll(".nav-link");
const accordion = document.querySelectorAll(".acc-container")
const content = document.querySelector(".content")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active")
})

allNavLinks.forEach(find => 
    find.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navList.classList.remove("active")
}))

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active")
    })
}