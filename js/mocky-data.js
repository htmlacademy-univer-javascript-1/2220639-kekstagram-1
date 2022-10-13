import {getRandomArrayElement, getRandomInt} from "./random-util.js";

const DESCRIPTION = [
  'Если смогу, я сделаю это. Конец истории.',
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Моя жизнь меняется, потому что меняю ее я.',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Ни о чем не беспокойтесь. Потому что все лучшие умы на работе.'
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
'Михаил',
'Анна',
'Анастасия',
'Тимур',
'Дмитрий',
'Виктория'
];


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

