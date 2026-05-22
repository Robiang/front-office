
const header = document.querySelector(".header")
const navbar = document.querySelector(".header .flex .navbar")
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('fa-bars-staggered')
    menuBtn.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
    
})


window.addEventListener('scroll', ()=>{
    menuBtn.classList.remove('fa-xmark')
    menuBtn.classList.add('fa-bars-staggered')
    navbar.classList.remove('active')


    if(window.scrollY > 20 ){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
})