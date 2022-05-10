function animate(element, animation) {

    element.classList.add("animate__animated", animation)
    function handleAnimationEnd(event) {
        event.stopPropagation()
        element.classList.remove("animate__animated", animation)
    }

    element.addEventListener('animationend', handleAnimationEnd, {once: true})

}

document.getElementById("hamburger").addEventListener("click", (element) => {
    if (window.innerWidth < 767) {
        document.querySelector(".links").childNodes.forEach(element => {
            animate(element, "animate__backInDown")
        })
    }
})

document.querySelector(".links").childNodes.forEach(element => {
    
    element.addEventListener("click", () => {
        if (window.innerWidth < 767) {
            hamburgerClick()
        }
    })

})

function menuLinksDisplay() {
    let menuLinks = document.querySelector('.bottom');
    let menuAc = document.querySelector('#nav');
    
    if (window.innerWidth < 767) {
        if (menuLinks.style.display == 'flex') hamburgerClick()
        menuLinks.style.display = 'none'
    } else {
        menuLinks.style.display = 'flex'
        menuAc.style.height = '100vh'
    }
}

window.addEventListener("resize", menuLinksDisplay)
menuLinksDisplay()

function hamburgerClick() {
    let dropDown = document.querySelector('.dropdown');
    let menuLinks = document.querySelector('.bottom');
    let menuAc = document.querySelector('#nav');

    if (menuLinks.style.display == 'none') {
        menuLinks.style.display = 'flex';
        menuAc.style.height = '100vh';
        dropDown.src = 'icons/x-mark.svg';
    } else {
        menuLinks.style.display = 'none';
        menuAc.style.height = '15vh';
        dropDown.src = 'icons/bars.svg';
    }
}
document.querySelector('#hamburger').addEventListener('click', hamburgerClick);

function sendNotify(text, second) {
    let notify = document.createElement("div")
    notify.classList.add("notification__main")
    let textElement = document.createElement("p")
    textElement.classList.add("notification__text")
    textElement.appendChild(document.createTextNode(text))
    notify.appendChild(textElement)
    notify.style.position = 'fixed'
    notify.style.top = '15px'
    notify.style.right = '15px'
    
    notify.classList.add("animate__animated", "animate__backInDown")

    document.querySelector("body").appendChild(notify)

    setTimeout(() => {
        animate(notify, "animate__backOutRight")
        notify.addEventListener("animationend", () => {
            document.querySelector("body").removeChild(notify)
        })
        
    }, second*1000)
    
}

document.getElementById("form").addEventListener('submit', () => {
    document.getElementById("form").reset()
    sendNotify('success!', 5)
})

const typeWrite = new Typed("#typeWrite", {
    strings: ["developer", "rock n' roller", "biker", "skier", "wanderer"],
    typeSpeed: 50,
    backSpeed: 30,
    showCursor: !1,
    loop: !0
});
VANTA.NET({
    el: "#backGround",
    mouseControls: !0,
    touchControls: !0,
    gyroControls: !1,
    scale: 1,
    scaleMobile: 1,
    backgroundColor: 1710618,
    color: 15958816
}), window.matchMedia("(max-width: 767px)").matches && VANTA.NET({
    el: "#backGround",
    mouseControls: !0,
    touchControls: !0,
    gyroControls: !1,
    scale: 1,
    scaleMobile: 1,
    backgroundColor: 1710618,
    color: 15958816,
    spacing: 20
});
