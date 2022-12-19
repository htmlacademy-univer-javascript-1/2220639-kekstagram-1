import { DEFAULT_SLIDER_CONFIG, EFFECT_SETTINGS, EFFECT_UNITS } from './consts.js';

const imageUploadFormElement = document.querySelector('.img-upload__overlay');
const effectSliderContainerElement = document.querySelector('.img-upload__effect-level');
const effectLevelSliderElement = imageUploadFormElement.querySelector('.effect-level__slider');
const uploadImageElement = imageUploadFormElement.querySelector('.img-upload__preview img');

const updateSliderConfig = (effectName) => {
  effectLevelSliderElement.noUiSlider.updateOptions(effectName.options);
};

const hideSlider = () => {
  effectSliderContainerElement.classList.add('hidden');
};

const showSlider = () => {
  effectSliderContainerElement.classList.remove('hidden');
};


export const setDefaultEffect = () => {
  uploadImageElement.style.filter = EFFECT_SETTINGS.noEffect;
  hideSlider();
};

export const onChangeImageEffect = (evt) => {
  const effectName = evt.target.value;
  uploadImageElement.className = effectName ? `effects__preview--${effectName}` : '';
  if (effectName === EFFECT_SETTINGS.noEffect) {
    setDefaultEffect();
    return;
  }
  if (effectSliderContainerElement.classList.contains('hidden')) {
    showSlider();
  }
  updateSliderConfig(EFFECT_SETTINGS[effectName]);
};

const onEffectValueChange = () => {
  const value = effectLevelSliderElement.noUiSlider.get();
  const effectName = document.querySelector('#upload-select-image').effect.value;
  if (effectName === EFFECT_SETTINGS.noEffect) {
    return;
  }
  const style = EFFECT_SETTINGS[effectName].style;
  const unit = EFFECT_UNITS[effectName];
  uploadImageElement.style.filter = `${style}(${value}${unit})`;
  const effectInputValue = imageUploadFormElement.querySelector('.effect-level__value');
  effectInputValue.value = value;
};

export const initSlider = () => {
  hideSlider();
  const uiSlider = noUiSlider.create(effectLevelSliderElement, DEFAULT_SLIDER_CONFIG);
  uiSlider.on('update', onEffectValueChange);
};
