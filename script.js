/* =========================================================
   NOWSHAD JUBAYER TAFIF — PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   01. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });


    // Close menu after clicking a navigation link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        });

    });

}


/* =========================================================
   02. NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(3, 10, 19, 0.94)";

        navbar.style.boxShadow =
            "0 10px 35px rgba(0, 0, 0, 0.20)";

    } else {

        navbar.style.background =
            "rgba(6, 16, 31, 0.82)";

        navbar.style.boxShadow = "none";
    }
}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   03. ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-menu a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   04. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-title, " +
    ".about-text, " +
    ".about-box, " +
    ".timeline-item, " +
    ".skill-card, " +
    ".project-card, " +
    ".strength-card, " +
    ".empty-state-card, " +
    ".interest-card, " +
    ".faq-item, " +
    ".contact-box"
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   05. STAGGER CARD ANIMATION
========================================================= */

const cardGroups = [
    ".skill-card",
    ".project-card",
    ".strength-card",
    ".interest-card"
];


cardGroups.forEach(selector => {

    const cards =
        document.querySelectorAll(selector);

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.06}s`;

    });

});


/* =========================================================
   06. TYPING EFFECT
========================================================= */

const typingElement =
    document.querySelector(".hero h2");


if (typingElement) {

    const originalText =
        typingElement.textContent.trim();

    const typingTexts = [
        originalText,
        "Frontend Developer",
        "Java Developer",
        "Software Engineering Student"
    ];

    let textIndex = 0;
    let characterIndex = 0;

    let deleting = false;


    function typeEffect() {

        const currentText =
            typingTexts[textIndex];


        if (!deleting) {

            typingElement.textContent =
                currentText.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (
                characterIndex ===
                currentText.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1800
                );

                return;
            }


            setTimeout(
                typeEffect,
                65
            );

        } else {

            typingElement.textContent =
                currentText.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                textIndex =
                    (textIndex + 1) %
                    typingTexts.length;

                setTimeout(
                    typeEffect,
                    350
                );

                return;
            }


            setTimeout(
                typeEffect,
                35
            );

        }

    }


    // Start after the initial hero animation

    setTimeout(
        typeEffect,
        1200
    );

}


/* =========================================================
   07. SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   08. SCROLL TO TOP BUTTON
========================================================= */

const scrollTopButton =
    document.createElement("button");


scrollTopButton.className =
    "scroll-top";


scrollTopButton.setAttribute(
    "aria-label",
    "Scroll to top"
);


scrollTopButton.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';


document.body.appendChild(
    scrollTopButton
);


function updateScrollTopButton() {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add(
            "show"
        );

    } else {

        scrollTopButton.classList.remove(
            "show"
        );

    }

}


window.addEventListener(
    "scroll",
    updateScrollTopButton
);


scrollTopButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   09. PROJECT CARD TILT EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 850) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) * -2;


            const rotateY =
                ((x - centerX) /
                    centerX) * 2;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* =========================================================
   10. CONTACT ITEM MICRO INTERACTION
========================================================= */

const contactItems =
    document.querySelectorAll(
        ".contact-item"
    );


contactItems.forEach(item => {

    item.addEventListener(
        "mouseenter",
        () => {

            const icon =
                item.querySelector("> i");

            if (icon) {

                icon.style.transform =
                    "scale(1.1)";

                icon.style.transition =
                    "transform 0.25s ease";
            }

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            const icon =
                item.querySelector("> i");

            if (icon) {

                icon.style.transform =
                    "scale(1)";

            }

        }
    );

});


/* =========================================================
   11. CURRENT YEAR
========================================================= */

const footerYear =
    document.querySelector(
        ".footer-bottom p"
    );


if (footerYear) {

    footerYear.innerHTML =
        `&copy; ${new Date().getFullYear()} ` +
        `Nowshad Jubayer Tafif. ` +
        `All rights reserved.`;

}


/* =========================================================
   12. PAGE LOADED
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

        console.log(
            "Nowshad's portfolio loaded successfully."
        );

    }
);
