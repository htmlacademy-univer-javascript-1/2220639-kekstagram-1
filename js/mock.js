import {getRandomArrayElement, getRandomInt} from "./util.js";
import {DESCRIPTION, NAMES, MESSAGE} from "./const.js";

const createMockyData = (length) => {
  return Array.from({length: length}, (_, index) => createPhotography(index));
}

const createPhotography = (id) => {
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes:  getRandomInt(15, 200),
    comments: createComments(getRandomInt(1, 6))
  }
};
const createComment = (id) => {
  return {
    id,
    avatar: `img/avatar-${getRandomInt(1,6)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES), 
  }
};
const createComments = (length) => {
  return Array.from({length: length}, (_, index) => createComment(index));
};
export{createMockyData};

