import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');


const img = galleryItems.map((preview, original, description) => 
`
<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
  `
.join(''));


galleryList.insertAdjacentHTML('afterbegin', img);



















/*

gallery.addEventListener('click', openBig);

function openBig(event) {
event.preventDefault;
const galleryItem = event.target.classList.contains('gallery__item');
const src = event.target.src;
const name = event.target.alt;

if (!galleryItem) {
    return 
}

const instance = basicLightbox.create(
    `<img src=${src} alt=${name} title=""/>`
);

instance.show();

*/



;



