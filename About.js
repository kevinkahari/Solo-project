document.addEventListener("DOMContentLoaded", () => {
    // ===== Animated Counter =====
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        counter.innerText = "0";

        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });

    // ===== Scroll Reveal =====
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // ===== Testimonial Slider =====
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach(t => t.classList.remove("show"));
        testimonials[index].classList.add("show");

        index++;
        if (index >= testimonials.length) {
            index = 0;
        }
    }

    setInterval(showTestimonial, 3000);
    showTestimonial();

    // ===== CTA Button Pulse =====
    const ctaBtn = document.querySelector(".cta-btn");

    if (ctaBtn) {
        ctaBtn.addEventListener("mouseenter", () => {
            ctaBtn.style.transform = "scale(1.08)";
        });

        ctaBtn.addEventListener("mouseleave", () => {
            ctaBtn.style.transform = "scale(1)";
        });
    }
});