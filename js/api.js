import { showAlertMessage } from './render-message.js';

export const getData = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) =>  {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((thumbnails) => {
      onSuccess(thumbnails);
    })
    .catch((error) => showAlertMessage(error.message));
};

export const sendData = (onSuccess, onFail, onFinally, body) => {
  fetch('https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch(() => {
      onFail();
    })
    .finally(() => {
      onFinally();
    });
};

