let burger = document.querySelector('.burger')
let navlinks = document.querySelector('.nav-links')
let burgerX = document.querySelector('.burgerX')
burger.onclick = () =>{
    navlinks.classList.toggle('hide_nav')
    // burgerX.classList.toggle('hide_burgerX')
    burger.classList.toggle('hide_burger')
}