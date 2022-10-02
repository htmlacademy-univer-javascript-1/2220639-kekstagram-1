const getRandomInt = (min, max) => {
  max = Math.floor(max);
  min = Math.ceil(min);
  return Math.round(Math.random() * (max - min) + min);
};
const checkCommentLength = (commentLength, maxLength) => commentLength <= maxLength;
getRandomInt(1, 3);
checkCommentLength(3,5);
