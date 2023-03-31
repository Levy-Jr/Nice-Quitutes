const menuBtn = document.querySelector('[data-menu-btn]')
const menuElements = document.querySelectorAll('[data-menu]')

menuBtn.addEventListener('click', () => {
    menuElements.forEach(el => el.toggleAttribute('data-active-menu'))
})

const carouselButtons = document.querySelectorAll('[data-carousel-button]')

carouselButtons.forEach(button => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1

    button.addEventListener('click', () => {
        const slides = document.querySelector('[data-slides]')
        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})