import { STEP_RESIZING_IMAGE, UPLOAD_IMAGE_MAX_SCALE, UPLOAD_IMAGE_MIN_SCALE, UPLOAD_IMAGE_DEFAULT_SCALE} from './consts.js';
import { percentageConvertToDouble } from './utils.js';

const uploadImageElement = document.querySelector('.img-upload__preview img');
const imageScaleLabelElement = document.querySelector('.scale__control--value');

const reduceImage = () => {
  const newScale = Math.max(parseInt(imageScaleLabelElement.value,10) - STEP_RESIZING_IMAGE, UPLOAD_IMAGE_MIN_SCALE);
  imageScaleLabelElement.value = `${newScale}%`;
  uploadImageElement.style = `transform: scale(${percentageConvertToDouble(newScale)})`;
};

const enlargeImage = () => {
  const newScale = Math.min(parseInt(imageScaleLabelElement.value,10) + STEP_RESIZING_IMAGE, UPLOAD_IMAGE_MAX_SCALE);
  imageScaleLabelElement.value = `${newScale}%`;
  uploadImageElement.style = `transform: scale(${percentageConvertToDouble(newScale)})`;
};

export const setDefaultScale = () => {
  imageScaleLabelElement.value = `${UPLOAD_IMAGE_DEFAULT_SCALE}%`;
  uploadImageElement.style = `transform: scale(${percentageConvertToDouble(UPLOAD_IMAGE_DEFAULT_SCALE)})`;
};

export const onScaleControlBiggerButtonClick = () => {
  enlargeImage();
};

export const onScaleControlSmallerButtonClick = () => {
  reduceImage();
};


