/* ===========================================
   SHANIL PORTFOLIO
   main.js
=========================================== */

// ===========================================
// Smooth Fade-in Animation
// ===========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===========================================
// Active Navigation Link
// ===========================================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-items a");

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

// ===========================================
// Hero Button Animation
// ===========================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

// ===========================================
// Card Hover Effect
// ===========================================

const cards = document.querySelectorAll(".info-card, .project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 15px 35px rgba(225,6,0,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});

// ===========================================
// Typing Effect
// ===========================================

const subtitle = document.querySelector(".hero-subtitle");

if (subtitle) {

    const text = subtitle.textContent;

    subtitle.textContent = "";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            subtitle.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 40);

        }

    }

    typeWriter();

}

// ===========================================
// Scroll To Top Button
// ===========================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.background = "#E10600";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.display = "none";
topButton.style.transition = ".3s";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===========================================
// Console Message 😎
// ===========================================

console.log("%c🏎 Welcome to Shanil's Portfolio", "color:#E10600;font-size:18px;font-weight:bold;");
