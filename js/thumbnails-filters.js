import { getThumbnails, initThumbnails, removeThumbnails } from './thumbnails.js';
import { shuffleArray, debounce } from './utils.js';

const THUMBNAILS_FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};

const MAX_COUNT_RANDOM_THUMBNAILS = 10;
const RENDERED_DELAY = 500;
let thumbnails = null;

const filtersContainer = document.querySelector('.img-filters--inactive');
const filtersForm = filtersContainer.querySelector('.img-filters__form');

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
  filtersContainer.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const onFiltersFormClick = debounce((evt) => renderFilteredThumbnails(evt), RENDERED_DELAY);

export const initFilters = () => {
  thumbnails = getThumbnails().slice();
  filtersContainer.classList.remove('img-filters--inactive');
  filtersForm.addEventListener('click', onFiltersFormClick);
};
