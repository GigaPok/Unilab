function menuToggle() {
    const menu = document.querySelector('header nav');
    const isActive = menu.classList.contains('active');

    if (isActive) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}
