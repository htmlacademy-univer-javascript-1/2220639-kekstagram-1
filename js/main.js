import {initThumbnails} from './thumbnails.js';
import { initForm } from './user-form.js';
import { getData } from './api.js';
import { initFilters } from './thumbnails-filters.js';

initForm();
getData(initThumbnails);
setTimeout(() => initFilters(), 1);

