
const bigPicture = document.querySelector('.big-picture');


const hideUnnecessary = () => {
  bigPicture.querySelector('.social__comment-count')
    .classList.add('hidden');
  bigPicture.querySelector('.comments-loader')
    .classList.add('hidden');
};

const removeChildren = (parent) => {
  parent.replaceChildren();
};

const initComment = (comment) =>  `<li class="social__comment">
    <img
        class="social__picture"
        src="${comment.avatar}"
        alt="${comment.name}"
        width="35" height="35">
    <p class="social__text">${comment.message}</p>
</li>`;

const initComments = (comments) => {
  const commentsContainer = bigPicture.querySelector('.social__comments');
  removeChildren(commentsContainer);
  comments.forEach((comment) => {
    commentsContainer.insertAdjacentHTML('afterend', initComment(comment));
  });
};

const onCancelBigPicture = () => {
  document.querySelector('body')
    .classList.remove('modal-open');
  window.removeEventListener('keydown', onEscClick);
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
  hideUnnecessary();
  document.querySelector('body')
    .classList.add('modal-open');
};
