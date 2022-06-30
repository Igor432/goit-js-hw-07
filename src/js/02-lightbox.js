import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');


const img = galleryItems.map((image, index) =>

    `<li class=''gallery__card>
    <a class="gallery__item" href=${image.original}>
    <img class="gallery__image" src=${image.preview}" alt=${image.description} />
  </a>
  </li>`)
  .join('')

galleryList.insertAdjacentHTML('afterbegin', img);




var photo = document.querySelector('.gallery__item');

photo.addEventListener ('keydown', (event) => {
    if (event.key === "ArrowLeft") {
        photo.previous();
    } else if (event.key === "ArrowRight") {
        photo.next();
    } else if (event.key === "Escape") {
        photo.close();
        }
})















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



