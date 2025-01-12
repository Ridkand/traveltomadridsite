const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const images = document.querySelectorAll(".grid-container img");
const closeModal = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alert("Por favor, rellena todos los campos.");
        e.preventDefault();
    }
});