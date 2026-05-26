
const header = document.querySelector(".header")
const navMobile = document.querySelector(".header .flex .nav-mobile")
const menuBtn = document.querySelector("#menu-btn");
const links = document.querySelectorAll(".header .navbar .link")
const logo = document.querySelector(".header .flex .logo")

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('fa-bars-staggered')
    menuBtn.classList.toggle('fa-xmark')
    navMobile.classList.toggle('active')
    
})


window.addEventListener('scroll', ()=>{
    menuBtn.classList.remove('fa-xmark')
    menuBtn.classList.add('fa-bars-staggered')
    navMobile.classList.remove('active')
    
    if(window.scrollY > 20 ){
        header.classList.add('active')
        logo.classList.add('active')
        menuBtn.classList.add('active')
        links.forEach(l => l.classList.add("active"))
    }
    else{
        header.classList.remove('active')
        logo.classList.remove('active')
        menuBtn.classList.remove('active')
        links.forEach(l => l.classList.remove("active"))

    }
})