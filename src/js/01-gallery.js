import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');


const img = galleryItems.map((image, index) =>   `<li class="gallery__item "><img class='gallery__image' src=${image.preview} alt = ${image.description}></li>`).join('')

gallery.insertAdjacentHTML('afterbegin', img)




gallery.addEventListener('click', modalOpen);

function modalOpen(event) {

 

    const target = galleryItems.map((image) => 
    `<li><img class='item' src=${image.original}></li>`)
 
  }


  /*

)

  */



 