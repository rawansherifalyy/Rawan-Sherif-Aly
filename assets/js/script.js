const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

const navbar = document.getElementById("navbar");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "shadow-lg");
    } else {
        navbar.classList.remove("bg-white", "shadow-lg");
    }

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove(
            "border",
            "border-blue-500",
            "rounded-full",
            "text-blue-500"
        );

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add(
                "border",
                "border-blue-500",
                "rounded-full",
                "text-blue-500"
            );
        }
    });

});


// ================= Pricing Slider =================

const slider = document.getElementById("slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSlide = 0;
const totalSlides = slider.children.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 50}%)`;
}

nextBtn.addEventListener("click", () => {
    if (currentSlide < totalSlides - 2) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }

    updateSlider();
});

prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 2;
    }

    updateSlider();
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.classList.remove("hidden");
    } else {
        backToTop.classList.add("hidden");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});