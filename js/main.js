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

let slider2 = document.querySelector('.slider2')
let sliderTrack2 = slider2.querySelector('.slider2-track')

let pressed = false
let startx
let x

quickieBtn.addEventListener('click', () => {
    mainImage2.style.opacity = '0'
    mainImage3.style.opacity = '0'
    mainImage.style.opacity = '1'

    classicBtn.style.opacity = '.3'
    cureBtn.style.opacity = '.3'
    quickieBtn.style.opacity = '.99'

    quickieCircled.style.opacity = '1'
    cureCircled.style.opacity = '0'
    classicCircled.style.opacity = '0'
})

classicBtn.addEventListener('click', () => {
    mainImage2.style.opacity = '1'
    mainImage.style.opacity = '0'
    mainImage3.style.opacity = '0'

    classicBtn.style.opacity = '.99'
    cureBtn.style.opacity = '.3'
    quickieBtn.style.opacity = '.3'

    quickieCircled.style.opacity = '0'
    cureCircled.style.opacity = '0'
    classicCircled.style.opacity = '1'
})

cureBtn.addEventListener('click', () => {
    mainImage3.style.opacity = '1'
    mainImage2.style.opacity = '0'
    mainImage.style.opacity = '0'

    cureBtn.style.opacity = '.99'
    classicBtn.style.opacity = '.3'
    quickieBtn.style.opacity = '.3'

    quickieCircled.style.opacity = '0'
    classicCircled.style.opacity = '0'
    cureCircled.style.opacity = '1'
})

// начало слайдера
slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - sliderTrack.offsetLeft ; //получаем начальную позицию мыши
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseenter', () => {
    slider.style.cursor = 'grab'
});

slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab';
});

window.addEventListener('mouseup', () => {
    pressed = false;
});

slider.addEventListener('mousemove', (e) =>{
    if(!pressed) return;

    x = e.offsetX

    sliderTrack.style.left = `${x - startx}px`;  //получаем координаты относительно левого края внутреннего блока и вычитаем из смещения родительского блока
    checkBoundary()
})

//проверяем границы
const checkBoundary = () => {  
    let outer = slider.getBoundingClientRect()
    let inner = sliderTrack.getBoundingClientRect()

    if(parseInt(sliderTrack.style.left) > 0){
        sliderTrack.style.left = '';
    } else if (inner.right < outer.right){
        sliderTrack.style.left = `-${inner.width - outer.width}px`
    }
}

// для сенсорных экранов
slider.addEventListener('touchstart', (e) => {   
    pressed = true;
    startx = e.targetTouches[0].clientX - sliderTrack.offsetLeft;
}, {passive: true});


slider.addEventListener('touchmove', (e) => {
    if(!pressed) return;
    x = e.targetTouches[0].clientX;

    sliderTrack.style.left = `${x - startx}px`;  
    checkBoundary();
}, {passive: true});


// начало второго слайдера
slider2.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - sliderTrack2.offsetLeft ; //получаем начальную позицию мыши
    slider2.style.cursor = 'grabbing';

});

slider2.addEventListener('mouseenter', () => {
    slider2.style.cursor = 'grab'
});

slider2.addEventListener('mouseup', () => {
    slider2.style.cursor = 'grab';
});

window.addEventListener('mouseup', () => {
    pressed = false;
});

slider2.addEventListener('mousemove', (e) =>{
    if(!pressed) return;

    x = e.offsetX

    sliderTrack2.style.left = `${x - startx}px`;  //получаем координаты относительно левого края внутреннего блока и вычитаем из смещения родительского блока
    checkBoundary2()
})

const checkBoundary2 = () => {  
    let outer = slider2.getBoundingClientRect()
    let inner = sliderTrack2.getBoundingClientRect()

    if(parseInt(sliderTrack2.style.left) > 0){
        sliderTrack2.style.left = '';
    } else if (inner.right < outer.right){
        sliderTrack2.style.left = `-${inner.width - outer.width}px`
    }
}

// для сенсорных экранов
slider2.addEventListener('touchstart', (e) => {   
    pressed = true;
    startx = e.targetTouches[0].clientX - sliderTrack2.offsetLeft;
}, {passive: true});


slider2.addEventListener('touchmove', (e) => {
    if(!pressed) return;
    x = e.targetTouches[0].clientX;

    sliderTrack2.style.left = `${x - startx}px`;  
    checkBoundary2();
}, {passive: true});