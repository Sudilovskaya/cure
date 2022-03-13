const quickieBtn = document.getElementById('quickie')
const classicBtn = document.getElementById('classic')
const cureBtn = document.getElementById('cure')
const quickieCircled = document.querySelector('.quickie-circled')
const classicCircled = document.querySelector('.classic-circled')
const cureCircled = document.querySelector('.cure-circled')
const mainImage = document.querySelector('.main-image')
const mainImage2 = document.querySelector('.main-image2')
const mainImage3 = document.querySelector('.main-image3')

let slider = document.querySelector('.slider')
let sliderTrack = slider.querySelector('.slider-track')
// let slides = slider.querySelectorAll('.product')
// let arrows = slider.querySelector('.slider-arrows')

let pressed = false
let startx
let x

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - sliderTrack.offsetLeft ; //получаем начальную позицию мыши
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab';
});

window.addEventListener('mouseup', () => {
    pressed = false;
});

slider.addEventListener('mousemove', (e) =>{
    if(!pressed) return;
    e.preventDefault();

    x = e.offSetX

    sliderTrack.style.left = `${x - startx}px`;
})

// let prev = arrows.children[0]
// let next = arrows.children[1]
// let  slideWidth = slides[0].offsetWidth
// let  slideIndex = 0
// let  posInit = 0
// let  posX1 = 0
// let  posX2 = 0
// let  posFinal = 0
// let  posThreshold = slideWidth * .35
// let  trfRegExp = /[-0-9.]+(?=px)/
// sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)'

quickieBtn.addEventListener('click', () => {
    mainImage2.style.display = 'none'
    mainImage3.style.display = 'none'
    mainImage.style.display = 'block'

    classicBtn.style.opacity = '.3'
    cureBtn.style.opacity = '.3'
    quickieBtn.style.opacity = '.99'

    quickieCircled.style.opacity = '1'
    cureCircled.style.opacity = '0'
    classicCircled.style.opacity = '0'
})

classicBtn.addEventListener('click', () => {
    mainImage2.style.display = 'block'
    mainImage.style.display = 'none'
    mainImage3.style.display = 'none'

    classicBtn.style.opacity = '.99'
    cureBtn.style.opacity = '.3'
    quickieBtn.style.opacity = '.3'

    quickieCircled.style.opacity = '0'
    cureCircled.style.opacity = '0'
    classicCircled.style.opacity = '1'
})

cureBtn.addEventListener('click', () => {
    mainImage3.style.display = 'block'
    mainImage2.style.display = 'none'
    mainImage.style.display = 'none'

    cureBtn.style.opacity = '.99'
    classicBtn.style.opacity = '.3'
    quickieBtn.style.opacity = '.3'

    quickieCircled.style.opacity = '0'
    classicCircled.style.opacity = '0'
    cureCircled.style.opacity = '1'
})

// const slide = () => {
//     sliderTrack.style.transition = 'transform .5s'
//     sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`
//     prev.classList.toggle('disabled', slideIndex === 0)
//     next.classList.toggle('disabled', slideIndex === --slides.length)
// }

// const getEvent = (event) => {
//     event.type.search('touch') !== -1 ? event.touches[0] : event
// }

// const swipeStart = () => {
//     let evt = getEvent()
     
//     posInit = posX1 = evt.clientX  // берем начальную позицию курсора по оси Х
//     sliderTrack.style.transition = '' // убираем плавный переход, чтобы track двигался за курсором без задержки т.к. он будет включаться в функции slide()

//     document.addEventListener('touchmove', swipeAction);
//     document.addEventListener('touchend', swipeEnd);
//     document.addEventListener('mousemove', swipeAction);
//     document.addEventListener('mouseup', swipeEnd);
// }

// const swipeAction = () => {
//     let evt = getEvent()
//     let style = sliderTrack.style.transform
//     let transform = +style.match(trfRegExp)[0]

//     sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)'

//     posX2 = posX1 - evt.clientX
//     posX1 = evt.clientX

//     sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`
// }
