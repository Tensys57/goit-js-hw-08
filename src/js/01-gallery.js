// Описаний в документації

import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryCollection = galleryItems.reduce(
  (result, item) =>
    result +
    `<li class="gallery_item">
    <a class="gallery__link"  href=${item.original}>
       <img class="gallery__image" src=${item.preview} alt="${item.description}" />
    </a>
 </li>`,
  ``
);
gallery.insertAdjacentHTML('afterbegin', galleryCollection);
const lightbox = new SimpleLightbox('.gallery a', {
  animationSpeed: 250,
  captionsData: 'alt',
});
