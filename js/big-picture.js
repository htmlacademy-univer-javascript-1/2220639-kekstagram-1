import  { DEFAULT_RENDERED_COMMENTS, STEP_ADDED_COMMENTS } from './consts.js';
import { isEsc } from './utils.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCommentsLoaderButtonElement = bigPictureElement.querySelector('.comments-loader');
const bigPictureCounterCommentsElement = bigPictureElement.querySelector('.social__comment-count');
const bigPictureCommentsListElement = bigPictureElement.querySelector('.social__comments');

let actualComments = [];
let countRenderedComments = DEFAULT_RENDERED_COMMENTS;

const getCounterCommentsTemplate = (commentsCount) => `${Math.min(countRenderedComments, commentsCount)} из <span class="comments-count">${commentsCount}</span> комментариев`;

const getCounterComments = () => {
  bigPictureCounterCommentsElement.innerHTML='';
  bigPictureCounterCommentsElement.insertAdjacentHTML('afterbegin', getCounterCommentsTemplate(actualComments.length));
};

const initComment = (comment) =>  `<li class="social__comment">
    <img
        class="social__picture"
        src="${comment.avatar}"
        alt="${comment.name}"
        width="35" height="35">
    <p class="social__text">${comment.message}</p>
</li>`;

const renderComments = () => {
  getCounterComments();

  bigPictureCommentsListElement.innerHTML='';
  const commentsTemplate = actualComments.slice(0, countRenderedComments).map((comment) => initComment(comment)).join('');
  bigPictureCommentsListElement.insertAdjacentHTML('afterbegin', commentsTemplate);

  if (countRenderedComments >= actualComments.length) {
    bigPictureCommentsLoaderButtonElement.removeEventListener('click', onBigPictureCommentsLoaderButtonClick);
    bigPictureCommentsLoaderButtonElement.classList.add('hidden');
  }
};

function onBigPictureCommentsLoaderButtonClick() {
  countRenderedComments += STEP_ADDED_COMMENTS;
  renderComments();
}

const initComments = (comments) => {
  if (comments.length === 0) {
    bigPictureCommentsLoaderButtonElement.classList.add('hidden');
    bigPictureCounterCommentsElement.textContent='Нет комментариев';
    return;
  }
  actualComments = comments.slice();
  bigPictureCommentsLoaderButtonElement.addEventListener('click', onBigPictureCommentsLoaderButtonClick);
  renderComments(actualComments);
};

const onCancelBigPicture = () => {
  document.querySelector('body')
    .classList.remove('modal-open');
  window.removeEventListener('keydown', onEscClick);
  bigPictureCommentsLoaderButtonElement.classList.remove('hidden');
  bigPictureCommentsLoaderButtonElement.removeEventListener('click', onBigPictureCommentsLoaderButtonClick);
  countRenderedComments = DEFAULT_RENDERED_COMMENTS;
};

const cancelBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  onCancelBigPicture();
};

function onEscClick (evt) {
  if (isEsc(evt)) {
    cancelBigPicture();
  }
}

const onCancelBigPictureClick = () => {
  cancelBigPicture();
};

const initBigPicture = (photo) => {
  bigPictureElement.querySelector('img').src = photo.url;
  bigPictureElement.querySelector('.likes-count').textContent = photo.likes;
  bigPictureElement.querySelector('.comments-count').textContent = photo.comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = photo.description;
  initComments(photo.comments);
  window.addEventListener('keydown', onEscClick);
  const cancelButton = bigPictureElement.querySelector('.big-picture__cancel');
  cancelButton.addEventListener('click', onCancelBigPictureClick);
};

export const openBigPicture = (photo) => {
  initBigPicture(photo);
  bigPictureElement.classList.remove('hidden');
  document.querySelector('body')
    .classList.add('modal-open');
};
