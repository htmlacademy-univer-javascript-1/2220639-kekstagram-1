//import {getPhotos} from './mock.js';
import {initThumbnails} from './thumbnails.js';
import { initForm } from './user-form.js';
import { getData } from './api.js';

initForm();
getData(initThumbnails);

