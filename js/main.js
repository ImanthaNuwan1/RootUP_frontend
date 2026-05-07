document.addEventListener('DOMContentLoaded', () => {
    console.log('RootUP Landing Page Initialized');

    // 1. Intersection Observer for fade-in animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Add fade-in classes to elements we want to animate
    const animateElements = document.querySelectorAll(`
        .hero-content, 
        .hero-visual,
        .section-heading,
        .section-desc,
        .upload-widget,
        .step-card,
        .gap-step-card,
        .focus-widget
    `);

    animateElements.forEach((el, index) => {
        el.classList.add('fade-in');
        
        // Add staggered delays for grids
        if (el.classList.contains('step-card') || el.classList.contains('gap-step-card')) {
            const delay = (index % 3) * 100;
            if (delay > 0) el.classList.add(`delay-${delay}`);
        }

        observer.observe(el);
    });

    // 2. Interactive Gap Step Cards
    // When hovering over a card, it becomes active, others inactive
    const gapCards = document.querySelectorAll('.gap-step-card');
    
    gapCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gapCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // 3. Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'var(--bg-dark)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            navbar.style.padding = '1rem 0';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1.5rem 0';
        }
    });
});
