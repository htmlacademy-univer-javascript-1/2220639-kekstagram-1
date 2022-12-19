import { showAlertMessage } from './render-message.js';
import { SERVER_ADRESS } from './consts.js';

export const getData = (onSuccess) => {
  fetch(SERVER_ADRESS.get)
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
  fetch(SERVER_ADRESS.send,
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

