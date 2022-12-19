import { DEFAULT_SLIDER_CONFIG, EFFECT_SETTINGS, EFFECT_UNITS } from './consts.js';

const imageUploadForm = document.querySelector('.img-upload__overlay');
const effectSliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevelSlider = imageUploadForm.querySelector('.effect-level__slider');
const uploadImage = imageUploadForm.querySelector('.img-upload__preview img');

const updateSliderConfig = (effectName) => {
  effectLevelSlider.noUiSlider.updateOptions(effectName.options);
};

const hideSlider = () => {
  effectSliderContainer.classList.add('hidden');
};

const showSlider = () => {
  effectSliderContainer.classList.remove('hidden');
};

export const setDefaultEffect = () => {
  uploadImage.style.filter = EFFECT_SETTINGS.noEffect;
  hideSlider();
};

export const onChangeImageEffect = (evt) => {
  const effectName = evt.target.value;
  uploadImage.className = effectName ? `effects__preview--${effectName}` : '';
  if (effectName === EFFECT_SETTINGS.noEffect) {
    setDefaultEffect();
    return;
  }
  if (effectSliderContainer.classList.contains('hidden')) {
    showSlider();
  }
  updateSliderConfig(EFFECT_SETTINGS[effectName]);
};

const onEffectValueChange = () => {
  const value = effectLevelSlider.noUiSlider.get();
  const effectName = document.querySelector('#upload-select-image').effect.value;
  if (effectName === EFFECT_SETTINGS.noEffect) {
    return;
  }
  const style = EFFECT_SETTINGS[effectName].style;
  const unit = EFFECT_UNITS[effectName];
  uploadImage.style.filter = `${style}(${value}${unit})`;
  const effectInputValue = imageUploadForm.querySelector('.effect-level__value');
  effectInputValue.value = value;
};

export const initSlider = () => {
  hideSlider();
  const uiSlider = noUiSlider.create(effectLevelSlider, DEFAULT_SLIDER_CONFIG);
  uiSlider.on('update', onEffectValueChange);
};
