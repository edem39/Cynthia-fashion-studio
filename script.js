const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const message = contactForm.querySelector("textarea").value;

    const whatsappMessage =
        "Hello Cynthia, my name is " + name +
        ". My phone number is " + phone +
        ". " + message;

    const whatsappURL =
        "https://wa.me/233538062853?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});