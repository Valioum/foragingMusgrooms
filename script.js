const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector('#primary-nav');

navToggle.addEventListener('click', () => {
    const navOpened = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !navOpened);

    console.log(navOpened);
});