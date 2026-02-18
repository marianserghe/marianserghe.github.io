// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Disable right-click on images
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Disable drag on images
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
});

// Form submission - let it submit naturally to FormSubmit
var form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function() {
        // Show loading state on button
        var btn = this.querySelector('.submit-btn');
        if (btn) {
            btn.textContent = 'Sending...';
            btn.disabled = true;
        }
    });
}