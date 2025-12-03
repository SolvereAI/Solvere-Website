/**
 * Bridge Page - Animations
 */

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
});

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
    const valuePanels = document.querySelectorAll('.value-panel');
    const companyTypes = document.querySelectorAll('.company-type');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    // Value panels animation
    const panelObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, observerOptions);

    valuePanels.forEach(panel => {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(30px)';
        panel.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        panelObserver.observe(panel);
    });

    // Company types animation
    const companyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);

    companyTypes.forEach(type => {
        type.style.opacity = '0';
        type.style.transform = 'translateY(30px)';
        type.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        companyObserver.observe(type);
    });
}
