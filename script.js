document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for anchor links (if any are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animation reveal effect
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Fade in elements as they scroll into view
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });

    // Custom logic for the intersection observer callback
    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const scrollObserver = new IntersectionObserver(revealOnScroll, {
        root: null,
        threshold: 0.15,
    });

    document.querySelectorAll('section').forEach(section => {
        scrollObserver.observe(section);
    });
});