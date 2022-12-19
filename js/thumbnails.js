import {openBigPicture} from './big-picture.js';

let photos = null;

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

const onPictureClick = (evt) => {
  const target = evt.target;
  const picture = target.closest('.js-picture');
  if (picture) {
    const id = picture.dataset.id;
    const photo = photos.filter((element) => element.id === +id);
    openBigPicture(photo[0]);
  }
};

const createThumbnails = (data) => Array.from(data, (photo) => getThumbnailByTemplate(photo));

const initThumbnails = (data) => {
  const thumbnails = createThumbnails(data.slice());
  const pictures = document.querySelector('.pictures');
  thumbnails.forEach((thumbnail) => pictures.appendChild(thumbnail));
  pictures.addEventListener('click', onPictureClick);
  photos = data;
};


export{initThumbnails};
