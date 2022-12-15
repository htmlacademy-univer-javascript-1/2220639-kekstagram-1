
const ERROR_MESSAGES = {
  hashtagsRepeated: 'Хэштеги повторяются',
  tooManyHashtags: 'Количество хэштегов не должно превышать 5 штук',
  wrongHashtag: 'Хэштеги не соответствуют требуемому формату (начинаются с символа #, длина меньше 20 символов, включая #)'
};

let errorMessage = '';

export const getErrorMessage = () => errorMessage;


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

export const validateHashtags = (inputValue) => {
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
