import { ALERT_SHOW_TIME } from './consts.js';
import { isEsc } from './utils.js';

let messageClassName;

const closeMessagePopup = () => {
  const message = document.querySelector(`.${messageClassName}`);
  message.remove();
  onCloseMessagePopup(message);
};

const onMessageCancelButtonClick = () => {
  closeMessagePopup();
};

const onMessagePopupEscClick = (evt) => {
  if (isEsc(evt)) {
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
  const messageCancelButtonElement = message.querySelector(`.${messageClassName}__button`);
  messageCancelButtonElement.removeEventListener('click', onMessageCancelButtonClick);
  window.removeEventListener('keydown', onMessagePopupEscClick);
  window.removeEventListener('click', onOutsideClick);

}

const getMessageTemplate = () => {
  const newMessage = document
    .querySelector(`#${messageClassName}`)
    .content
    .querySelector(`.${messageClassName}`)
    .cloneNode(true);
  const messageCancelButtonElement = newMessage.querySelector(`.${messageClassName}__button`);
  messageCancelButtonElement.addEventListener('click', onMessageCancelButtonClick);
  window.addEventListener('keydown', onMessagePopupEscClick);
  window.addEventListener('click', onOutsideClick);
  return newMessage;
};

export const showAlertMessage = (message) => {
  const alertContainerElement = document.createElement('div');
  alertContainerElement.style.zIndex = 100;
  alertContainerElement.style.position = 'absolute';
  alertContainerElement.style.left = 0;
  alertContainerElement.style.top = 0;
  alertContainerElement.style.right = 0;
  alertContainerElement.style.padding = '10px 3px';
  alertContainerElement.style.fontSize = '30px';
  alertContainerElement.style.textAlign = 'center';
  alertContainerElement.style.backgroundColor = 'red';

  alertContainerElement.textContent = message;

  document.body.append(alertContainerElement);

  setTimeout(() => {
    alertContainerElement.remove();
  }, ALERT_SHOW_TIME);
};

export const renderMessage = (submitIsSuccess) => {
  messageClassName = submitIsSuccess ? 'success' : 'error';
  const message = getMessageTemplate();
  document.body.insertAdjacentElement('beforeend', message);
};
