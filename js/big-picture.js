import  { DEFAULT_RENDERED_COMMENTS, STEP_ADDED_COMMENTS } from './consts.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCommentsLoaderBtn = bigPicture.querySelector('.comments-loader');
const bigPictureCounterComments = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsList = bigPicture.querySelector('.social__comments');

let actualComments = [];
let countRenderedComments = DEFAULT_RENDERED_COMMENTS;

const getCounterCommentsTemplate = (commentsCount) => `${Math.min(countRenderedComments, commentsCount)} из <span class="comments-count">${commentsCount}</span> комментариев`;

const getCounterComments = () => {
  bigPictureCounterComments.innerHTML='';
  bigPictureCounterComments.insertAdjacentHTML('afterbegin', getCounterCommentsTemplate(actualComments.length));
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

  bigPictureCommentsList.innerHTML='';
  const commentsTemplate = actualComments.slice(0, countRenderedComments).map((comment) => initComment(comment)).join('');
  bigPictureCommentsList.insertAdjacentHTML('afterbegin', commentsTemplate);

  if (countRenderedComments >= actualComments.length) {
    bigPictureCommentsLoaderBtn.removeEventListener('click', onBigPictureCommentsLoaderBtnClick);
    bigPictureCommentsLoaderBtn.classList.add('hidden');
  }
};

function onBigPictureCommentsLoaderBtnClick() {
  countRenderedComments += STEP_ADDED_COMMENTS;
  renderComments();
}

const initComments = (comments) => {
  if (comments.length === 0) {
    bigPictureCommentsLoaderBtn.classList.add('hidden');
    bigPictureCounterComments.textContent='Нет комментариев';
    return;
  }
  actualComments = comments.slice();
  bigPictureCommentsLoaderBtn.addEventListener('click', onBigPictureCommentsLoaderBtnClick);
  renderComments(actualComments);
};

const onCancelBigPicture = () => {
  document.querySelector('body')
    .classList.remove('modal-open');
  window.removeEventListener('keydown', onEscClick);
  bigPictureCommentsLoaderBtn.classList.remove('hidden');
  bigPictureCommentsLoaderBtn.removeEventListener('click', onBigPictureCommentsLoaderBtnClick);
  countRenderedComments = DEFAULT_RENDERED_COMMENTS;
};

const cancelBigPicture = () => {
  bigPicture.classList.add('hidden');
  onCancelBigPicture();
};

function onEscClick (evt) {
  if (evt.key === 'Escape') {
    cancelBigPicture();
  }
}

const onCancelBigPictureClick = () => {
  cancelBigPicture();
};

const initBigPicture = (photo) => {
  bigPicture.querySelector('img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  initComments(photo.comments);
  window.addEventListener('keydown', onEscClick);
  const cancelButton = bigPicture.querySelector('.big-picture__cancel');
  cancelButton.addEventListener('click', onCancelBigPictureClick);
};

export const openBigPicture = (photo) => {
  initBigPicture(photo);
  bigPicture.classList.remove('hidden');
  document.querySelector('body')
    .classList.add('modal-open');
};
