import {getRandomArrayElement, getRandomInt} from "./util.js";
import {DESCRIPTION, NAMES, MESSAGE, COUNT_COMMENTS, COUNT_LIKES, AVATAR_IND} from "./const.js";

const createPhotos = (length) =>  Array.from({length: length}, (_, index) => createPhotography(index));

const createPhotography = (id) => {
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes:  getRandomInt(COUNT_LIKES.min, COUNT_LIKES.max),
    comments: createComments(getRandomInt(COUNT_COMMENTS.min, COUNT_COMMENTS.max))
  };
};
const createComment = (id) => {
  return {
    id,
    avatar: `img/avatar-${getRandomInt(AVATAR_IND.min, AVATAR_IND.max)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES), 
  };
};
const createComments = (length) => Array.from({length: length}, (_, index) => createComment(index));

export{createPhotos};

