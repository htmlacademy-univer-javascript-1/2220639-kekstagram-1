import { getThumbnails, initThumbnails, removeThumbnails } from './thumbnails.js';
import { shuffleArray, debounce } from './utils.js';
import { MAX_COUNT_RANDOM_THUMBNAILS, THUMBNAILS_FILTER, RENDERED_DELAY } from './consts.js';

let thumbnails = null;

const filtersContainerElement = document.querySelector('.img-filters--inactive');
const filtersFormElement = filtersContainerElement.querySelector('.img-filters__form');

const sortByComments = (el1, el2) => el2.comments.length - el1.comments.length;

const getFilteredThumbnails = (id) => {
  let filteredThumbnails = [];
  switch(id) {
    case THUMBNAILS_FILTER.discussed:
      filteredThumbnails = thumbnails.slice().sort((el1, el2) => sortByComments(el1, el2));
      break;
    case THUMBNAILS_FILTER.random:
      filteredThumbnails = shuffleArray(thumbnails).slice(0, MAX_COUNT_RANDOM_THUMBNAILS);
      break;
    default:
      filteredThumbnails = thumbnails.slice();
  }
  return filteredThumbnails;
};

const renderFilteredThumbnails = (evt) => {
  const id = evt.target.id;
  removeThumbnails();
  initThumbnails(getFilteredThumbnails(id));
  filtersContainerElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const onFiltersFormClick = debounce((evt) => renderFilteredThumbnails(evt), RENDERED_DELAY);

export const initFilters = () => {
  thumbnails = getThumbnails().slice();
  filtersContainerElement.classList.remove('img-filters--inactive');
  filtersFormElement.addEventListener('click', onFiltersFormClick);
};
