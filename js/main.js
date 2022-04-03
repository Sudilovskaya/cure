// мобильное меню
const burgerBtn = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu')

burgerBtn.addEventListener('click', () => {
    document.body.classList.toggle('_lock')
    mobileMenu.classList.toggle('_active')
    burgerBtn.classList.toggle('_active')
})

//анимация
const animItems = document.querySelectorAll('._anim-items')

if  (animItems.length > 0) {
    
    const animOnScroll = () => {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 3

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active')
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active')
            }
          }
        }
    }

    const offset = (el) => {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll()
    window.addEventListener('scroll', animOnScroll)
}

//переключение фотографий
const quickieBtn = document.getElementById('quickie')
const classicBtn = document.getElementById('classic')
const cureBtn = document.getElementById('cure')
const quickieCircled = document.querySelector('.quickie-circled')
const classicCircled = document.querySelector('.classic-circled')
const cureCircled = document.querySelector('.cure-circled')
const mainImage = document.querySelector('.main-image')
const mainImage2 = document.querySelector('.main-image2')
const mainImage3 = document.querySelector('.main-image3')
let offset = mainImage.offsetWidth


const offsetF = () => {
    mainImage2.style.transform = `translate3d(${offset}px, 0px, 0px)` 
    mainImage3.style.transform = `translate3d(-${offset}px, 0px, 0px)` 
}
window.onload = offsetF()

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

    let offset = mainImage.offsetWidth
   
    mainImage2.style.transform = `translate3d(${offset}px, 0px, 0px)` 


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
    
    let offset = mainImage.offsetWidth

    mainImage3.style.transform = `translate3d(-${offset}px, 0px, 0px)` 

    cureBtn.style.opacity = '.99'
    classicBtn.style.opacity = '.3'
    quickieBtn.style.opacity = '.3'

    quickieCircled.style.opacity = '0'
    classicCircled.style.opacity = '0'
    cureCircled.style.opacity = '1'
})


 //плавная прокрутка до якоря
const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach((elem) => {
    elem.addEventListener('click', (event) =>{
        event.preventDefault()
        const blockId = elem.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }) 
    }) 
})

// начало слайдера
let slider = document.querySelector('.slider')
let sliderTrack = slider.querySelector('.slider-track')

let pressed = false
let startx
let x

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
let slider2 = document.querySelector('.slider2')
let sliderTrack2 = slider2.querySelector('.slider2-track')

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