
let menu = document.querySelector('.nav-mobile')
let navbar = document.querySelector('.main-nav')

menu.onclick = () =>{

    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')

}


window.onscroll = () =>{

    menu.classList.remove('fa-times')
    navbar.classList.remove('active')

}