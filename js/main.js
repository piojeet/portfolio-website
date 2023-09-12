//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Services section - Modal
const ServicesModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick) {
    ServicesModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        ServicesModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});


//Portfolio section - Modal
const PortfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var PortfolioModal = function(modalClick) {
    PortfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        PortfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        PortfolioModals.forEach((portfoliomodalView) => {
            portfoliomodalView.classList.remove("active");
        });
    });
});

//Our clients - Swiper

    var swiper = new Swiper(".client-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = ()=> document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = ()=> themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("savedTheme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//Navigation menu items active on page scroll
window.addEventListener("scroll", ()=> {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    })
})

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", function(){
    navigation.classList.add("active");
})

closeBtn.addEventListener("click", function(){
    navigation.classList.remove("active");
})

navItems.forEach((navItem) => {
    navItem.addEventListener("click", function(){
        navigation.classList.remove("active");
    })
})

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i', { delay: 200, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img', { delay: 200, origin: 'bottom' });

ScrollReveal().reveal('.home .scroll-down', { delay: 200, origin: 'top' });

ScrollReveal().reveal('.container .section-title-01, .section-title-02', { delay: 200, origin: 'left' });

ScrollReveal().reveal('.content .about-img', { delay: 200, origin: 'left' });

ScrollReveal().reveal('.description h3', { delay: 200, origin: 'right' });

ScrollReveal().reveal('.description h4', { delay: 400, origin: 'right' });

ScrollReveal().reveal('.description p', { delay: 600, origin: 'right', interval: 200 });

ScrollReveal().reveal('.professional-list', { delay: 600, origin: 'right' });

ScrollReveal().reveal('.about-info .btn', { delay: 200, origin: 'bottom', interval: 200 });

ScrollReveal().reveal('.skills-description h3', { delay: 200, origin: 'left' });

ScrollReveal().reveal('.skills-description p', { delay: 600, origin: 'left' });

ScrollReveal().reveal('.edu-list', { delay: 200, origin: 'bottom', interval: 200 });

ScrollReveal().reveal('.bars', { delay: 200, origin: 'bottom', interval: 200 });

ScrollReveal().reveal('.skills-info', { delay: 200, origin: 'bottom', interval: 200 });

ScrollReveal().reveal('.services-description', { delay: 200, origin: 'left' });

ScrollReveal().reveal('.service-container .service-card', { delay: 200, origin: 'bottom', interval: 200 });

ScrollReveal().reveal('.img-card-container .img-card', { delay: 200, origin: 'bottom', interval: 200 });

ScrollReveal().reveal('.contact-card h4', { delay: 200, origin: 'top' });

ScrollReveal().reveal('.contact-card h3', { delay: 200, origin: 'left' });

ScrollReveal().reveal('.contact-card h2', { delay: 200, origin: 'bottom' });

ScrollReveal().reveal('.swiper-slide', { delay: 200, origin: 'left' });

ScrollReveal().reveal('.contact-left h2', { delay: 200, origin: 'left' });

ScrollReveal().reveal('.contact-list li', { delay: 200, origin: 'left', interval: 200 });

ScrollReveal().reveal('.contact-right p', { delay: 200, origin: 'right', interval: 200 });

ScrollReveal().reveal('.contact-right .first-row, .third-row', { delay: 200, origin: 'right' });

ScrollReveal().reveal('.contact-right .first-row, .second-row, .contact-btn', { delay: 400, origin: 'right' });

ScrollReveal().reveal('.contact-right ', { delay: 600, origin: 'right' });

ScrollReveal().reveal('.contact-form .btn', { delay: 200, origin: 'bottom' });

ScrollReveal().reveal('.about h2', { delay: 200, origin: 'left' });

ScrollReveal().reveal('.about p', { delay: 400, origin: 'left' });

ScrollReveal().reveal('.footer-container .about', { delay: 600, origin: 'left' });

ScrollReveal().reveal('.footer-container .info h3', { delay: 200, origin: 'top' });

ScrollReveal().reveal('.footer-container .info ul li', { delay: 200, origin: 'top', interval: 200 });

ScrollReveal().reveal('.footer-copyright p', { delay: 200, origin: 'bottom' });

ScrollReveal().reveal('.follow h3', { delay: 200, origin: 'right' });

ScrollReveal().reveal('.follow ul li', { delay: 200, origin: 'right', interval: 200 });

