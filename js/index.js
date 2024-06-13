/*=============== CHANGE BACKGROUND HEADER ===============*/
   function scrollHeader(){

        const header = document.getElementById('header');
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 50) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header');
    
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', scrollHeader);
        }


/*=============== SERVICE MODAL ===============*/

document.addEventListener('DOMContentLoaded', function() {
    const modalBtns = document.querySelectorAll('.services__button');
    const modalCloses = document.querySelectorAll('.services__modal-close');

    let modal = function(modalClick) {
        const modalViews = document.querySelectorAll('.services__modals');
        console.log(modalViews)
        modalViews[modalClick].classList.toggle('active-modal');
    };

    modalBtns.forEach((mb, i) => {
        mb.addEventListener('click', function() {
            modal(i);
        });
    });

    modalCloses.forEach(mc => {
        mc.addEventListener('click', function() {
            const modalView = this.closest('.services__modals');
            modalView.classList.remove('active-modal');
        });
    });
 });

/*============== LIGHT DARK THEME ===============*/

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class

const getCurrenttheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrenttheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 48,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data, .home__social-link, .home__info, .footer__data, .footer__rights`)

sr.reveal(`.about__data, .services__card, .work__card, .contact__card`, {interval: 100})


/*=============== MIXITUP FILTER ===============*/

// let mixerPortfolio = mixitup('.work__container', {
//     selectors: {
//         target: '.work__card'
//     },
//     animation: {
//         duration: 300
//     }
// });

// const linkWork = document.querySelectorAll ('.work__item')
// function activeWork () {
//     linkWork.forEach(l => l.classList.remove(active-work))
//     this.classList.add('active-work')
// }
// linkWork.forEach (l => l.addEventListener('click', active-work))


/*=============== SWIPER TESTIMONIAL ================*/


let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// let swiperTestimonial = new Swiper(".testimonial__container", {
//     spaceBetween: 24,
//     loop: true,
//     grabCursor: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         576: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 4,
//             spaceBetween: 48,
//         }

//     }

// });