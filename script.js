let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nava');
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY ;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight ;
        let id = sec.getAttribute ;

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active') ;
                document.querySelector('header nav a [href*=' + ']' ).classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x') ;
    navbar.classList.toggle('active') ;
}