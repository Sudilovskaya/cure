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

//фильтр
const products = document.querySelectorAll('.product')
const filterItems = document.querySelectorAll('.filter-item')
const slides = document.querySelectorAll('.swiper-slide')

filterItems.forEach(item => {

    item.addEventListener('click', event => {

        let filterClass = event.target.dataset.f
    
        products.forEach(elem =>{

            elem.classList.remove('hide')
            elem.classList.remove('display-none')

            if(!elem.classList.contains(filterClass) && filterClass!== 'all' ) {
                elem.classList.add('hide')
                setTimeout(() => {  
                    elem.classList.add('display-none')  
                     }, 500) 
            }
        })
        slides.forEach(elem =>{
            elem.classList.remove('hide')
            elem.classList.remove('display-none')

            if(!elem.classList.contains(filterClass) && filterClass!== 'all') {
                elem.classList.add('hide')
                setTimeout(() => {  
                    elem.classList.add('display-none')  
                     }, 500)  
            }
        })

        
    })
})