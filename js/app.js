// NAVIGATION

const btn = document.querySelector('.btn');
const dropDown = document.querySelector('#dropdown');
const menuLinks = document.querySelector('.bottom');

dropDown.src = 'icons/bars.svg';
menuLinks.style.display = 'none';

btn.addEventListener('click', () => {
    if (menuLinks.style.display == 'none') {
        dropDown.src = 'icons/x-mark.svg';
        menuLinks.style.cssText = 'display: flex; background-color: #1a1a1a;';
    } else {
        dropDown.src = 'icons/bars.svg';
        menuLinks.style.cssText = 'display: none; background-color: none;';
    }
});


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
    el: "#backGroundAnimate",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x1a1a1a,
    color: 0xf38320
})