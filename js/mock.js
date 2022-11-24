import {getRandomArrayElement, getRandomInt} from './utils.js';
import {DESCRIPTION, NAMES, MESSAGE, COUNT_COMMENTS, COUNT_LIKES, AVATAR_IND} from './consts.js';
import {COUNT_PHOTOS} from './consts.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInt(AVATAR_IND.min, AVATAR_IND.max)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES)
});

const createComments = (length) => Array.from({length: length}, (_, index) => createComment(index));

const createPhotography = (id) => ({
  id,
  url: `photos/${id+1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes:  getRandomInt(COUNT_LIKES.min, COUNT_LIKES.max),
  comments: createComments(getRandomInt(COUNT_COMMENTS.min, COUNT_COMMENTS.max))
});

const createPhotos = () => Array.from({length: COUNT_PHOTOS}, (_, index) => createPhotography(index));

let photos = null;

const getPhotos = () => {
  if (photos === null) {
    photos = createPhotos();
  }
  return photos;
};

export{getPhotos};

