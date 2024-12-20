// sidebar info open and close

const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")
const navClose = document.querySelector("nav")

// toggle a class of open

navClose.addEventListener("click", function(){
    mainTag.classList.toggle("open")
    if(mainTag.classList.contains("open")){
        toggleTag.innerHTML = "close"
    } else {
        toggleTag.innerHTML = "info"
    }
})

toggleTag.addEventListener("click", function(){
    mainTag.classList.toggle("open")
    if(mainTag.classList.contains("open")){
        toggleTag.innerHTML = "close"
    } else {
        toggleTag.innerHTML = "info"
    }
})

// layered images in z-index

const slideArea = document.querySelector("section div.slides")
const images = slideArea.querySelectorAll("img")
const figTag = document.querySelector("section div.content span")

// keep track of things

let currentSlide = 0
let z = 1

// select a random image

const random = function () {
    currentSlide = Math.floor(Math.random() * images.length)
}

// click to change the slide

slideArea.addEventListener("click", function(){
    currentSlide = currentSlide + 1

    if (currentSlide > images.length - 1){
        currentSlide = 0
    }

    z = z + 1

    // remove aninamtion for every image

    images.forEach(image => {
        image.style.animation = ""
    })

    // attempt at clicking each and move them

    images.forEach(image => {
        const x = 25 * (Math.floor(Math.random() * 5)) - 50
        const y = 25 * (Math.floor(Math.random() * 5)) - 50

        image.style.transform = `translate(${x}px, ${y}px)`
    })

    // pick images

    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = "fade 0.2s"

    // change text

    figTag.innerHTML = currentSlide

    // random img

    random()
})