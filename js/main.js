import {getPhotos} from './mock.js';
import {initThumbnails} from './thumbnails.js';
import { initForm } from './user-form.js';

const mockyData = getPhotos();
initThumbnails(mockyData);
initForm();

