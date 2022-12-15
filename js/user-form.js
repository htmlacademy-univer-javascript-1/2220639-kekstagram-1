import { validateHashtags, getErrorMessage } from './validate.js';

const form = document.querySelector('.img-upload__form');

const defaultConfig = {
  // class of the parent element where the error/success class is added
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-danger',
  successClass: 'has-success',
  // class of the parent element where error text element is appended
  errorTextParent: 'img-upload__field-wrapper',
  // type of element to create for the error text
  errorTextTag: 'div',
  // class of the error text element
  errorTextClass: 'pristine-error'
};


const pristine = new Pristine(form, defaultConfig);
pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtags, getErrorMessage, 2, false);

const onFileUpload = (evt) => {
  evt.preventDefault();
  const editForm = form.querySelector('.img-upload__overlay');
  window.addEventListener('keydown', onEscClick);
  editForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

const onEditFormInput = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const onEditFormSubmit = (evt) => {
  evt.preventDefault();
  if(pristine.validate()) {
    form.submit();
  }
};

const onInputFormEscapeClick = (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
};

const onCancelEditForm = () => {
  window.removeEventListener('keydown', onEscClick);
  form.removeEventListener('input', onEditFormInput);
  form.querySelector('.text__hashtags').removeEventListener('keydown', onInputFormEscapeClick);
  form.querySelector('.text__description').removeEventListener('keydown', onInputFormEscapeClick);
  form.removeEventListener('submit', onEditFormSubmit);
};

const cancelEditForm = () => {
  const editForm = form.querySelector('.img-upload__overlay');
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

export const initForm = () => {
  const startUpload = form.querySelector('.img-upload__start');
  startUpload.addEventListener('change', onFileUpload);
  const cancelEditFormButton = form.querySelector('.img-upload__cancel');
  cancelEditFormButton.addEventListener('click', onEditFormCancelClick);
  form.addEventListener('input', onEditFormInput);
  form.querySelector('.text__hashtags').addEventListener('keydown', onInputFormEscapeClick);
  form.querySelector('.text__description').addEventListener('keydown', onInputFormEscapeClick);
  form.addEventListener('submit', onEditFormSubmit);
};

