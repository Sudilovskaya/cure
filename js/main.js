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
const mainImages = document.querySelectorAll('.main-image')
const btnItems = document.querySelectorAll('.main-nails-styles__item')
const circles = document.querySelectorAll('.circled')

let offset = mainImages[1].offsetWidth

const offsetF = () => {  //смещение фотографий
    mainImages[0].style.transform = `translate3d(${offset}px, 0px, 0px)` 
    mainImages[2].style.transform = `translate3d(-${offset}px, 0px, 0px)` 
}
window.onload = offsetF()


btnItems.forEach(item => {
    item.addEventListener('click', event => {
        let filterName = event.target.dataset.f

        btnItems.forEach(elem => {
            elem.classList.remove('opacity')

            if(!elem.classList.contains(filterName)){
                elem.classList.add('opacity')
            }
            if(elem.classList.contains (filterName)){
                elem.classList.add('active')
            }
        })
        
        mainImages.forEach(image =>{
            image.classList.remove('_hide')

            if(!image.classList.contains (filterName)){
                image.classList.add('_hide')
            }
            if(image.classList.contains (filterName)){
                image.style.opacity = '1'
            }
        })

        circles.forEach(circle => {
            circle.classList.remove('_hide')


            if(!circle.classList.contains (filterName)){
                circle.classList.add('_hide')
            }
            if(circle.classList.contains (filterName)){
                circle.style.opacity = '1'
            }
        })
        
    })
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