import {openBigPicture} from './big-picture.js';

const pictureContainerElement = document.querySelector('.pictures');
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

  pictureContainerElement.querySelectorAll('.picture').forEach((thumbnail) => thumbnail.remove());
};

export const initThumbnails = (data) => {
  const renderThumbnails = createThumbnails(data.slice());
  renderThumbnails.forEach((thumbnail) => pictureContainerElement.appendChild(thumbnail));
  pictureContainerElement.addEventListener('click', onThumbnailClick);
  thumbnails = data;
};
