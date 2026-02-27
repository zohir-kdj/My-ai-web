window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    
    // If user scrolls more than 50px
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        // Close menu if it was open when going back to top
        document.getElementById('dropdown-nav').classList.remove('active');
    }
});

// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger-menu');
const nav = document.getElementById('dropdown-nav');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
});
