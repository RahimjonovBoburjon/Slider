const images = document.querySelectorAll(".img-block__img");
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
const block = document.querySelector(".block");
let timer

let counter = 0

const nextImages = function () {
    images[counter].classList.remove("active")
    counter++
    if (counter == images.length) {
        counter = 0
    }
    images[counter].classList.add("active")
}


const prevImages = function () {
    images[counter].classList.remove("active")
    counter--
    if (counter == -1) {
        counter = images.length - 1
    }
    images[counter].classList.add("active")
}

const autoplay = function () {
    timer = setInterval(nextImages, 2000)
}

const clearTimer = function () {
    clearInterval(timer)
}

autoplay()

btnNext.addEventListener("click", nextImages)
btnPrev.addEventListener("click", prevImages)
block.addEventListener('mousemove', clearTimer)
block.addEventListener('mouseleave', autoplay)