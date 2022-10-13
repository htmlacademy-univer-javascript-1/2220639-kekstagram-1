const getRandomInt = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.round(Math.random() * (max - min) + min);
};
const getRandomArrayElement = (array) => {
  return array[getRandomInt(0, array.length - 1)]
};

export {getRandomArrayElement, getRandomInt};

