import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector('.gallery');


const img = galleryItems.map((image, index) =>
    `<li class="gallery__item "><img class='gallery__image' src=${image.preview} data-source=${image.original} alt = ${image.description}></li>`).join('')

gallery.insertAdjacentHTML('afterbegin', img)



gallery.addEventListener('click', openBig);


function openBig(event) {
    event.preventDefault();
    const imageItem = event.target.classList.contains('gallery__image')
    const url = event.target.dataset.source;

    if (!imageItem) {
        return 
    }

    const instance = basicLightbox.create(
        `<img src = ${url}>`
    );
    
    instance.show();

    document.addEventListener('keydown', event =>{
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', event);
        }
        return;
    });

}

