const imageGallery = document.getElementById("imageGallery");
const modalOverlay = document.getElementById("modalOverlay");
const modalImage = document.getElementById("modalImage");

imageGallery.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "img") {
    modalImage.src = event.target.src;
    modalOverlay.classList.add("active");
  }
});

modalOverlay.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

document.querySelector(".modal-content").addEventListener("click", (e) => {
  e.stopPropagation();
});
