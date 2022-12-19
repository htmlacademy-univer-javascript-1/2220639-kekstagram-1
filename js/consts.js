export const DESCRIPTION = [
  'Если смогу, я сделаю это. Конец истории.',
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Моя жизнь меняется, потому что меняю ее я.',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Ни о чем не беспокойтесь. Потому что все лучшие умы на работе.'
];
export const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
export const NAMES = [
  'Михаил',
  'Анна',
  'Анастасия',
  'Тимур',
  'Дмитрий',
  'Виктория'
];

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

export const COUNT_COMMENTS = {
  min: 1,
  max: 6
};
export const COUNT_LIKES = {
  min: 15,
  max: 200
};
export const AVATAR_IND = {
  min: 1,
  max: 6
};

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
