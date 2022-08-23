const menus = document.querySelectorAll('.menu');
menus.forEach((menu) =>{
    const hambergerMenu = menu.querySelector('.hamberger-menu');
    menu.addEventListener('click',()=>{
        hambergerMenu.classList.toggle('open');
    });
});