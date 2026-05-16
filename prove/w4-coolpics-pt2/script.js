const btn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");

const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-btn")


btn.addEventListener("click", toggleBarMenu);

function toggleBarMenu() {
    menu.classList.toggle("show");
    
}


gallery.addEventListener("click", openModal);

function openModal(e) {
    console.log(e.target);

    const img = e.target;
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    const full = src.replace("sm", "full");

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}
closeButton.addEventListener("click", (event) => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});