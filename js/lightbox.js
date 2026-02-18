// =================================================================
// SHARED LIGHTBOX WITH TOUCH SWIPE SUPPORT
// =================================================================

(function() {
    let currentImage = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 50;

    // Open lightbox at specific index
    function openLightbox(index) {
        if (typeof window.galleryImages === 'undefined') return;
        currentImage = index;
        document.getElementById('lightbox-img').src = window.galleryImages[currentImage];
        document.getElementById('current-num').textContent = currentImage + 1;
        document.getElementById('lightbox').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox(event) {
        if (event && event.target !== event.currentTarget) return;
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = '';
    }

    // Previous image
    function prevImage(event) {
        if (event) event.stopPropagation();
        if (typeof window.galleryImages === 'undefined') return;
        currentImage = (currentImage - 1 + window.galleryImages.length) % window.galleryImages.length;
        document.getElementById('lightbox-img').src = window.galleryImages[currentImage];
        document.getElementById('current-num').textContent = currentImage + 1;
    }

    // Next image
    function nextImage(event) {
        if (event) event.stopPropagation();
        if (typeof window.galleryImages === 'undefined') return;
        currentImage = (currentImage + 1) % window.galleryImages.length;
        document.getElementById('lightbox-img').src = window.galleryImages[currentImage];
        document.getElementById('current-num').textContent = currentImage + 1;
    }

    // Touch swipe handlers
    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
    }

    function handleTouchMove(e) {
        touchEndX = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > SWIPE_THRESHOLD) {
            if (swipeDistance > 0) {
                // Swipe right → previous
                prevImage();
            } else {
                // Swipe left → next
                nextImage();
            }
        }
        
        touchStartX = 0;
        touchEndX = 0;
    }

    // Make functions globally available
    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
    window.prevImage = prevImage;
    window.nextImage = nextImage;

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        var lightbox = document.getElementById('lightbox');
        if (!lightbox || !lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });

    // Touch swipe listeners (attach to lightbox when DOM ready)
    document.addEventListener('DOMContentLoaded', function() {
        var lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.addEventListener('touchstart', handleTouchStart, { passive: true });
            lightbox.addEventListener('touchmove', handleTouchMove, { passive: true });
            lightbox.addEventListener('touchend', handleTouchEnd, { passive: true });
        }
    });

    // Also try to attach immediately if DOM already loaded
    var lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('touchstart', handleTouchStart, { passive: true });
        lightbox.addEventListener('touchmove', handleTouchMove, { passive: true });
        lightbox.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
})();
