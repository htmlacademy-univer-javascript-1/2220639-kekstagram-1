import {getPhotos} from './mock.js';
import {initThumbnails} from './thumbnails.js';

const mockyData = getPhotos();
initThumbnails(mockyData);

