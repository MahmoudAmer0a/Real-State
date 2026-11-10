const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    formMessage.textContent = "Thank you, " + name + "! We will contact you soon.";
    form.reset();
});

const topButton = document.getElementById("top-button");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});
