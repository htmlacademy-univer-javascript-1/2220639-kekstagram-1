import { getPristine } from './validate.js';
import { onScaleControlBiggerButtonClick, onScaleControlSmallerButtonClick, setDefaultScale } from './scale.js';
import { onChangeImageEffect, initSlider, setDefaultEffect} from './filter-effects.js';
import { sendData } from './api.js';
import { renderMessage } from './render-message.js';
import { insertUploadedImage } from './upload-image.js';
import { isEsc } from './utils.js';


const formElement = document.querySelector('.img-upload__form');
const editFormElement = formElement.querySelector('.img-upload__overlay');
const submitButton = formElement.querySelector('.img-upload__submit');
const pristine = getPristine();
const fileChooser = formElement.querySelector('.img-upload__input[type=file]');


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};


const onEditFormInput = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const onInputFormEscapeClick = (evt) => {
  if (isEsc(evt)) {
    evt.stopPropagation();
  }
};

const resetInputValue = () => {
  formElement.querySelector('.text__hashtags').value = '';
  formElement.querySelector('.text__description').value = '';
};

const cancelEditForm = () => {
  editFormElement.classList.add('hidden');
  onCancelEditForm();
};

const onEditFormCancelClick = () => {
  cancelEditForm();
};

const onEscClick = (evt) => {
  if (isEsc(evt)) {
    cancelEditForm();
  }
};

const onSuccess = () => {
  cancelEditForm();
  renderMessage(true);
};

const onFail = () => {
  renderMessage(false);
};
const onFinally = () => {
  unblockSubmitButton();
};

const onEditFormSubmit = (evt) => {
  evt.preventDefault();
  if(pristine.validate()) {
    blockSubmitButton();
    sendData(onSuccess, onFail, onFinally, new FormData(evt.target));
  }
};

function onCancelEditForm() {
  window.removeEventListener('keydown', onEscClick);
  setDefaultScale();
  setDefaultEffect();
  resetInputValue();
  formElement.querySelector('.img-upload__cancel').removeEventListener('click', onEditFormCancelClick);
  formElement.removeEventListener('input', onEditFormInput);
  formElement.querySelector('.img-upload__text').removeEventListener('keydown', onInputFormEscapeClick);
  formElement.removeEventListener('submit', onEditFormSubmit);
  formElement.querySelector('.scale__control--bigger').removeEventListener('click', onScaleControlBiggerButtonClick);
  formElement.querySelector('.scale__control--smaller').removeEventListener('click', onScaleControlSmallerButtonClick);
  document.querySelector('.img-upload__effects').removeventListener('change', onChangeImageEffect);
  editFormElement.classList.remove('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

function onFileUpload (evt) {
  evt.preventDefault();
  formElement.querySelector('.img-upload__cancel').addEventListener('click', onEditFormCancelClick);
  formElement.addEventListener('input', onEditFormInput);
  formElement.querySelector('.img-upload__text').addEventListener('keydown', onInputFormEscapeClick);
  formElement.addEventListener('submit', onEditFormSubmit);
  formElement.querySelector('.scale__control--bigger').addEventListener('click', onScaleControlBiggerButtonClick);
  formElement.querySelector('.scale__control--smaller').addEventListener('click', onScaleControlSmallerButtonClick);
  document.querySelector('.img-upload__effects').addEventListener('change', onChangeImageEffect);
  window.addEventListener('keydown', onEscClick);
  editFormElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  insertUploadedImage();
}

export const initForm = () => {
  fileChooser.addEventListener('change', onFileUpload);
  initSlider();
};

