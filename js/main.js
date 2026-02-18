// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const mobileOverlay = document.querySelector('.mobile-overlay');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        if (nav) {
            nav.classList.toggle('menu-open');
        }
        if (mobileOverlay) {
            mobileOverlay.classList.toggle('active');
        }
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            if (nav) {
                nav.classList.remove('menu-open');
            }
            if (mobileOverlay) {
                mobileOverlay.classList.remove('active');
            }
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking overlay
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            if (nav) {
                nav.classList.remove('menu-open');
            }
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-links a');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinkItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + entry.target.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

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

// =================================================================
// PHARMA PASSWORD PROTECTION
// =================================================================
(function() {
    var PHARMA_PASSWORD = '1234';
    var SESSION_KEY = 'pharma_unlocked';
    var pendingProject = null;
    
    var modal = document.getElementById('password-modal');
    var passwordInput = document.getElementById('pharma-password');
    var submitBtn = document.getElementById('password-submit');
    var cancelBtn = document.getElementById('password-cancel');
    var errorMsg = document.getElementById('password-error');
    
    // Check if already unlocked this session
    function isUnlocked() {
        return sessionStorage.getItem(SESSION_KEY) === 'true';
    }
    
    // Unlock pharma projects
    function unlock() {
        sessionStorage.setItem(SESSION_KEY, 'true');
    }
    
    // Show modal
    function showModal(projectUrl) {
        pendingProject = projectUrl;
        modal.classList.add('active');
        passwordInput.value = '';
        errorMsg.classList.remove('show');
        setTimeout(function() {
            passwordInput.focus();
        }, 100);
    }
    
    // Hide modal
    function hideModal() {
        modal.classList.remove('active');
        pendingProject = null;
        passwordInput.value = '';
        errorMsg.classList.remove('show');
    }
    
    // Handle pharma project click
    function handlePharmaClick(e) {
        var item = e.currentTarget;
        var projectUrl = item.getAttribute('data-project');
        
        if (isUnlocked()) {
            window.location.href = projectUrl;
        } else {
            showModal(projectUrl);
        }
    }
    
    // Verify password
    function checkPassword() {
        var entered = passwordInput.value;
        
        if (entered === PHARMA_PASSWORD) {
            var projectUrl = pendingProject;
            unlock();
            hideModal();
            if (projectUrl) {
                window.location.href = projectUrl;
            }
        } else {
            errorMsg.classList.add('show');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
    
    // Attach click handlers to pharma items
    var pharmaItems = document.querySelectorAll('[data-category="pharma"]');
    pharmaItems.forEach(function(item) {
        item.addEventListener('click', handlePharmaClick);
    });
    
    // Modal event listeners
    if (submitBtn) {
        submitBtn.addEventListener('click', checkPassword);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', hideModal);
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
    
    // Close modal on background click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            hideModal();
        }
    });
})();