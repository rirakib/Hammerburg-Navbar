const hammerbug = document.querySelector('.hummerbag');
const navMenu = document.querySelector('.nav_menu');
hammerbug.addEventListener("click",()=>{
    navMenu.classList.toggle('navMenus');
    hammerbug.classList.toggle('active');

})