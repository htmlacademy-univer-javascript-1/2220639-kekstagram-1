const getRandomInt = (min, max) => {
  max = Math.floor(max);
  min = Math.ceil(min);
  return Math.round(Math.random() * (max - min) + min);
};
const checkCommentLength = (commentLength, maxLength) => commentLength <= maxLength;

// eslint-disable-next-line no-console
console.log(getRandomInt(1, 3));
// eslint-disable-next-line no-console
console.log(checkCommentLength(3,5));
