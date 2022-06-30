import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const img = galleryItems.map((image, index) =>
    `<a class="gallery__item" href=${image.original}>
    <img class="gallery__image" src=${image.preview}" alt=${image.description} />
  </a>`).join('')

gallery.insertAdjacentHTML('afterbegin', img);

gallery.addEventListener('click', openBig);


function openBig(event) {
event.preventDefault;
const galleryItem = event.target.classList.contains('gallery__item');
const url = event.target.dataset.source;
const src = event.target.src;
const name = event.target.alt;

if (!galleryItem) {
    return 
}

const instance = basicLightbox.create(
    `<img src=${src} alt=${name} title=""/>`
);

console.log(instance);

instance.show();

document.addEventListener('keydown', event =>{
    if (event.key === 'Escape') {
        instance.close();
    }
    return;
});


}