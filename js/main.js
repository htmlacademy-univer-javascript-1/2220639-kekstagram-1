<<<<<<< Updated upstream
import {createMockyData} from "./mocky-data.js";
=======
import {getPhotos} from './mock.js';
import {initThumbnails} from './thumbnails.js';

const mockyData = getPhotos();
initThumbnails(mockyData);
>>>>>>> Stashed changes

const mockyData = createMockyData(15);
