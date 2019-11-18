// Select DOM Items, HTML Tags, Buttons, Overlay, Navigation List, etc

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');

// Set initial state of the menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if(!showMenu) {
      menuBtn.classList.add('close');
      menuNav.classList.add('show');
      menu.classList.add('show');
      menuBranding.classList.add('show');
      navItem.forEach(item => item.classList.add('show'));
      showMenu = true;

    } else {
        // Reset the menu state

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
        showMenu = false;
        
    }
}