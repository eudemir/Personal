// RESET 

window.addEventListener('resize', function () {
    if (maxW.matches) {
        "use strict";
        window.location.reload();
    }
});

const maxW = window.matchMedia("(max-width: 767px)");

// NAV
const menuAc = document.querySelector('#nav');
const btn = document.querySelector('#hamburger');
const dropDown = document.querySelector('.dropdown');
const menuLinks = document.querySelector('.bottom');
dropDown.src = 'icons/bars.svg';

if (maxW.matches) {
    menuLinks.style.display = 'none';
}

btn.addEventListener('click', () => {
    if (menuLinks.style.display == 'none') {
        menuLinks.style.display = 'flex';
        menuAc.style.height = '100vh';
        dropDown.src = 'icons/x-mark.svg';
    } else {
        menuLinks.style.display = 'none';
        menuAc.style.height = '15vh';
        dropDown.src = 'icons/bars.svg';
    }
})

// HEADER

const typeWrite = new Typed('#typeWrite', {
    strings: ["developer", "rock n' roller", "biker", "skier", "wanderer"],
    typeSpeed: 50,
    backSpeed: 30,
    showCursor: false,
    loop: true
});

// BACK

VANTA.NET({
    el: "#backGround",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x1a1a1a,
    color: 0xf38320
})

if (maxW.matches) {
    VANTA.NET({
        el: "#backGround",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x1a1a1a,
        color: 0xf38320,
        spacing: 20.00
    })
}
