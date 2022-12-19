import { ALERT_SHOW_TIME } from './consts.js';

let messageClassName;

const closeMessagePopup = () => {
  const message = document.querySelector(`.${messageClassName}`);
  message.remove();
  onCloseMessagePopup(message);
};

const onMessageCancelBtnClick = () => {
  closeMessagePopup();
};

const onMessagePopupEscClick = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMessagePopup();
    evt.stopPropagation();
  }
};

const onOutsideClick = (evt) => {
  const isOutsideClick = !evt.composedPath().includes(`.${messageClassName}`);
  if (isOutsideClick) {
    closeMessagePopup();
  }
};

function onCloseMessagePopup (message) {
  const messageCancelBtn = message.querySelector(`.${messageClassName}__button`);
  messageCancelBtn.removeEventListener('click', onMessageCancelBtnClick);
  window.removeEventListener('keydown', onMessagePopupEscClick);
  window.removeEventListener('click', onOutsideClick);

}

const getMessageTemplate = () => {
  const newMessage = document
    .querySelector(`#${messageClassName}`)
    .content
    .querySelector(`.${messageClassName}`)
    .cloneNode(true);
  const messageCancelBtn = newMessage.querySelector(`.${messageClassName}__button`);
  messageCancelBtn.addEventListener('click', onMessageCancelBtnClick);
  window.addEventListener('keydown', onMessagePopupEscClick);
  window.addEventListener('click', onOutsideClick);
  return newMessage;
};

export const showAlertMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export const renderMessage = (submitIsSuccess) => {
  messageClassName = submitIsSuccess ? 'success' : 'error';
  const message = getMessageTemplate();
  document.body.insertAdjacentElement('beforeend', message);
};
