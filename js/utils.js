import { MAX_COMMENT_LENGTH } from './consts.js';

export const getRandomInt = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.round(Math.random() * (max - min) + min);
};
export const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

export const percentageConvertToDouble = (percentageCount) => percentageCount * 0.01;

export const checkCommentLength = (comment) => comment.length <= MAX_COMMENT_LENGTH;


