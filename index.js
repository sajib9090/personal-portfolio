const hamber = document.querySelector('#hamber');
const close = document.querySelector('#close');
const navMenu = document.querySelector('.nav-menu');

if (hamber) {
    hamber.addEventListener('click', () => {
        navMenu.classList.add('mbl-menu');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navMenu.classList.remove('mbl-menu');
    })
}

window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }





  
