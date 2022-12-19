export const ERROR_MESSAGES = {
  hashtagsRepeated: 'Хэштеги повторяются',
  tooManyHashtags: 'Количество хэштегов не должно превышать 5 штук',
  wrongHashtag: 'Хэштеги не соответствуют требуемому формату (начинаются с символа #, длина меньше 20 символов, включая #, не могут состоять только из символа #)'
};
export const STEP_ADDED_COMMENTS = 5;

export const UPLOAD_IMAGE_MIN_SCALE = 25;

export const UPLOAD_IMAGE_MAX_SCALE = 100;

export const UPLOAD_IMAGE_DEFAULT_SCALE = 100;

export const STEP_RESIZING_IMAGE = 25;

export const DEFAULT_RENDERED_COMMENTS = 5;

export const COUNT_PHOTOS = 25;

export const MAX_COMMENT_LENGTH = 140;

export const ALERT_SHOW_TIME = 5000;

export const PRISTINE_CONFIG = {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'pristine-error'
};

export const DEFAULT_SLIDER_CONFIG = {
  range: {min: 0, max: 1},
  start: 1,
  step: 0.1,
  connect: 'lower'
};

export const EFFECT_UNITS = {
  chrome: '',
  sepia: '',
  marvin: '%',
  phobos: 'px',
  heat: ''
};

export const EFFECT_SETTINGS = {
  noEffect: 'none',
  chrome: {
    options: {
      range: { min: 0, max: 1, },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale'
  },

  sepia: {
    options: {
      range: { min: 0, max: 1, },
      start: 1,
      step: 0.1,
    },
    style: 'sepia'
  },

  marvin: {
    options: {
      range: { min: 0, max: 100, },
      start: 100,
      step: 1,
    },
    style: 'invert'
  },

  phobos: {
    options: {
      range: { min: 0, max: 3, },
      start: 3,
      step: 0.1,
    },
    style: 'blur'
  },

  heat: {
    options: {
      range: { min: 1, max: 3, },
      start: 3,
      step: 0.1,
    },
    style: 'brightness'
  },
};

export const SERVER_ADRESS = {
  send: 'https://26.javascript.pages.academy/kekstagram',
  get: 'https://26.javascript.pages.academy/kekstagram/data'
};

export const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

export const THUMBNAILS_FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};

export const MAX_COUNT_RANDOM_THUMBNAILS = 10;
export const RENDERED_DELAY = 500;
