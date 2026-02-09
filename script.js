document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // Toggle display for now, ideally we'd toggle a class
            // For a simple implementation:
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                mobileBtn.innerHTML = '<i class="ph ph-list" style="color: white;"></i>';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(5, 5, 5, 0.95)';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
                mobileBtn.innerHTML = '<i class="ph ph-x" style="color: white;"></i>';
            }
        });
    }

    // Sticky Header effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 5, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(5, 5, 5, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navLinks.style.display === 'flex' && window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                    mobileBtn.innerHTML = '<i class="ph ph-list" style="color: white;"></i>';
                }
            }
        });
    });
});
