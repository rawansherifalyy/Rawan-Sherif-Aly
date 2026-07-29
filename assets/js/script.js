const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function () { mobileMenu.classList.toggle("hidden"); });

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-white", "shadow-lg");
        } else if (window.scrollY < 50) {
            navbar.classList.remove("bg-white", "shadow-lg");
        }
    });
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

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
});