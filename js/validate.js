import { ERROR_MESSAGES, PRISTINE_CONFIG } from './consts.js';
import { checkCommentLength } from './utils.js';

let errorMessage = '';

const getErrorMessage = () => errorMessage;

const validateHashtag = (hashtag) => {
  const hashtagFormat = new RegExp('^#[A-Za-zА-Яа-яЁё0-9]{1,19}$');
  errorMessage = ERROR_MESSAGES.wrongHashtag;
  return  hashtagFormat.test(hashtag) || hashtag.length === 0;
};

const hashtagsRepeated = (hashtags) => {
  const set = new Set();
  return hashtags.some((value) => {
    if( !set.has(value.toLowerCase())  ) {
      set.add(value.toLowerCase());
      return false;
    }
    return true;
  });
};

const validateHashtags = (inputValue) => {
  if (inputValue.length === 0) {
    return true;
  }
  const hashtags = inputValue.split(' ');
  if (hashtags.length > 5) {
    errorMessage = ERROR_MESSAGES.tooManyHashtags;
    return false;
  }
  if (hashtagsRepeated(hashtags))  {
    errorMessage = ERROR_MESSAGES.hashtagsRepeated;
    return false;
  }
  return hashtags.every((value) => validateHashtag(value));
};

const initPristine = () => {
  const form = document.querySelector('.img-upload__form');
  const pristine = new Pristine(form, PRISTINE_CONFIG);
  pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtags, getErrorMessage);
  pristine.addValidator(form.querySelector('.text__description'), checkCommentLength, 'Комментарий не должен быть длиннее 140 символов');
  return pristine;
};

export const getPristine = () => initPristine();
