import { getPristine } from './validate.js';
import { onScaleControlBiggerBtnClick, onScaleControlSmallerBtnClick, setDefaultScale } from './scale.js';
import { onChangeImageEffect, initSlider, setDefaultEffect} from './filter-effects.js';
import { sendData } from './api.js';
import { renderMessage } from './render-message.js';

const form = document.querySelector('.img-upload__form');
const editForm = form.querySelector('.img-upload__overlay');
const submitButton = form.querySelector('.img-upload__submit');
const pristine = getPristine();


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onFileUpload = (evt) => {
  evt.preventDefault();
  window.addEventListener('keydown', onEscClick);
  editForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

const onEditFormInput = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const onInputFormEscapeClick = (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
};

const resetInputValue = () => {
  form.querySelector('.text__hashtags').value = '';
  form.querySelector('.text__description').value = '';
};

const onCancelEditForm = () => {
  window.removeEventListener('keydown', onEscClick);
  setDefaultScale();
  setDefaultEffect();
  resetInputValue();

};

const cancelEditForm = () => {
  editForm.classList.add('hidden');
  onCancelEditForm();
};

const onEditFormCancelClick = () => {
  cancelEditForm();
};

function onEscClick (evt) {
  if (evt.key === 'Escape') {
    cancelEditForm();
  }
}

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


export const initForm = () => {
  form.querySelector('.img-upload__start').addEventListener('change', onFileUpload);
  form.querySelector('.img-upload__cancel').addEventListener('click', onEditFormCancelClick);
  form.addEventListener('input', onEditFormInput);
  form.querySelector('.text__hashtags').addEventListener('keydown', onInputFormEscapeClick);
  form.querySelector('.text__description').addEventListener('keydown', onInputFormEscapeClick);
  form.addEventListener('submit', onEditFormSubmit);
  form.querySelector('.scale__control--bigger').addEventListener('click', onScaleControlBiggerBtnClick);
  form.querySelector('.scale__control--smaller').addEventListener('click', onScaleControlSmallerBtnClick);
  document.querySelector('.img-upload__effects').addEventListener('change', onChangeImageEffect);
  initSlider();
};

