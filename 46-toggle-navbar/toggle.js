let toggleBtn = document.getElementById('toggle-nav');
let navLinks = document.getElementById('nav-links');
let isNavOpen = false;

toggleBtn.addEventListener('click',()=>{
    if (isNavOpen){
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
        isNavOpen = false;
        navLinks.classList.remove('toggled');
    }else{
        toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
        isNavOpen = true;
        navLinks.classList.add('toggled');

    }
})