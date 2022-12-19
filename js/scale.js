import { STEP_RESIZING_IMAGE, UPLOAD_IMAGE_MAX_SCALE, UPLOAD_IMAGE_MIN_SCALE, UPLOAD_IMAGE_DEFAULT_SCALE} from './consts.js';
import { percentageConvertToDouble } from './utils.js';

const uploadImage = document.querySelector('.img-upload__preview img');
const imageScaleLabel = document.querySelector('.scale__control--value');

const reduceImage = () => {
  const newScale = Math.max(parseInt(imageScaleLabel.value,10) - STEP_RESIZING_IMAGE, UPLOAD_IMAGE_MIN_SCALE);
  imageScaleLabel.value = `${newScale}%`;
  uploadImage.style = `transform: scale(${percentageConvertToDouble(newScale)})`;
};

const enlargeImage = () => {
  const newScale = Math.min(parseInt(imageScaleLabel.value,10) + STEP_RESIZING_IMAGE, UPLOAD_IMAGE_MAX_SCALE);
  imageScaleLabel.value = `${newScale}%`;
  uploadImage.style = `transform: scale(${percentageConvertToDouble(newScale)})`;
};

export const setDefaultScale = () => {
  imageScaleLabel.value = `${UPLOAD_IMAGE_DEFAULT_SCALE}%`;
  uploadImage.style = `transform: scale(${percentageConvertToDouble(UPLOAD_IMAGE_DEFAULT_SCALE)})`;
};

export const onScaleControlBiggerBtnClick = () => {
  enlargeImage();
};

export const onScaleControlSmallerBtnClick = () => {
  reduceImage();
};


