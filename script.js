// Below is the code for the nav bar:
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
// Here finishes the code for the nav bar.

// Below is the code for the animation on the h1 text: 

const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Hi, my name is Luisa Luna, and I am a front-end software developer.';
let idx = 1
let speed = 300 / 3

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = text.length;
    }

    setTimeout(writeText, speed)
}
// Here finishes the code for the animation on the h1 text.