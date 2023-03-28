const menuBtn = document.querySelector('[data-menu-btn]')
const menuElements = document.querySelectorAll('[data-menu]')

menuBtn.addEventListener('click', () => {
    menuElements.forEach(el => el.toggleAttribute('data-active-menu'))
})