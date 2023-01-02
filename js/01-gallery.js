import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
function createCatalog(items) {
  return items
    .map(
      ({preview, original, description}) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}
const galleryReturn = createCatalog(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryReturn);

gallery.addEventListener("click", showModal);

function showModal(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      instance.close();
    }
  });
}
