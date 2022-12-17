import { getPristine } from './validate.js';
import { onScaleControlBiggerBtnClick, onScaleControlSmallerBtnClick, setDefaultScale } from './scale.js';
import { onChangeImageEffect, initSlider} from './filter-effects.js';

const form = document.querySelector('.img-upload__form');
const editForm = form.querySelector('.img-upload__overlay');
const pristine = getPristine();

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
  setDefaultScale();
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

