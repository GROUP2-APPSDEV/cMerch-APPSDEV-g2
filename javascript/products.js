let burger = document.querySelector('.burger')
let navlinks = document.querySelector('.nav-links')
let burgerX = document.querySelector('.burgerX')
burger.onclick = () =>{
    navlinks.classList.toggle('hide_nav')
    // burgerX.classList.toggle('hide_burgerX')
    burger.classList.toggle('hide_burger')
}

view_show = document.querySelector('.view_show');
view_btn = document.querySelector('.Vbtn')

view_show.addEventListener('mouseover', ()=>{
    view_btn.classList.toggle('view_btn')
    
})
view_show.addEventListener('mouseout', ()=>{
    view_btn.classList.toggle('view_btn')
    
})
