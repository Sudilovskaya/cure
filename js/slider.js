
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper(document.querySelector('.swiper'), {
    slidesPerView: 3,
   
    grabCursor:true,
    
    spaceBetween: 0,
})

const swiper2 = new Swiper(document.querySelector('.swiper-container'), {
    slidesPerView: 4.3,
   
    grabCursor:true,
    
    spaceBetween: 0,
})