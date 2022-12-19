import {openBigPicture} from './big-picture.js';

let thumbnails = null;

export const getThumbnails = () => {
  if (thumbnails === null) {
    return;
  }
  return thumbnails;
};

const getThumbnailByTemplate = ({id, url, likes, comments}) => {
  const newThumbnail = document
    .querySelector('#picture')
    .content
    .querySelector('.picture')
    .cloneNode(true);
  newThumbnail.querySelector('.picture__img').src = url;
  newThumbnail.querySelector('.picture__comments').textContent = comments.length;
  newThumbnail.querySelector('.picture__likes').textContent = likes;
  newThumbnail.setAttribute('data-id', id);
  newThumbnail.classList.add('js-picture');
  return newThumbnail;
};

const onThumbnailClick = (evt) => {
  const target = evt.target;
  const picture = target.closest('.js-picture');
  if (picture) {
    const id = picture.dataset.id;
    const photo = thumbnails.filter((element) => element.id === +id);
    openBigPicture(photo[0]);
  }
};

const createThumbnails = (data) => Array.from(data, (thumbnail) => getThumbnailByTemplate(thumbnail));

export const removeThumbnails = () => {
  const pictures = document.querySelector('.pictures');
  pictures.querySelectorAll('.picture').forEach((thumbnail) => thumbnail.remove());
};

export const initThumbnails = (data) => {
  const renderThumbnails = createThumbnails(data.slice());
  const pictures = document.querySelector('.pictures');
  renderThumbnails.forEach((thumbnail) => pictures.appendChild(thumbnail));
  pictures.addEventListener('click', onThumbnailClick);
  thumbnails = data;
};
