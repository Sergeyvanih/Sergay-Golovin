document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
        section.style.opacity = 0; // Изначально скрыть секции
    });

    const revealSections = () => {
        sections.forEach(section => {
            section.style.opacity = 1; // Сделать секции видимыми
            section.style.transition = 'opacity 0.5s ease-in-out';
        });
    };

    window.addEventListener('scroll', revealSections);
});
