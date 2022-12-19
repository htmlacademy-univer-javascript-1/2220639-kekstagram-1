import { FILE_TYPES } from './consts.js';

const formElement = document.querySelector('.img-upload__form');
const fileChooserElement = formElement.querySelector('.img-upload__input[type=file]');
const uploadImageElement = formElement.querySelector('.img-upload__preview img');

export const insertUploadedImage = () => {
  const file = fileChooserElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const userImageUrl = URL.createObjectURL(file);
    uploadImageElement.src = userImageUrl;
    formElement.querySelectorAll('.effects__preview').forEach((effect) => {
      effect.style.backgroundImage = `url(${userImageUrl})`;
    });
  }
};

