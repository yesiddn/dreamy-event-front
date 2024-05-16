import cancelBtn from './create-cancel-btn';
import createImagePreview from './create-image-preview';
import createInput from './create-input';

export default function createForm({ API, inputs, buttons, serviceDetails, callback }) {
  const form = document.createElement('form');
  form.classList.add('form');
  form.id = 'form';

  if (serviceDetails) {
    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('form__images');

    serviceDetails.images.forEach((image) => {
      const imagePreview = createImagePreview(image);
      imagesContainer.appendChild(imagePreview);
    });

    form.appendChild(imagesContainer);
  }

  const saveBtn = document.createElement('button');
  saveBtn.type = 'button';
  saveBtn.id = 'form-button';
  saveBtn.textContent = 'Guardar';
  saveBtn.disabled = true;

  saveBtn.addEventListener('click', () => {
    callback(API, inputs);
  });

  inputs.forEach((input) => {
    const label = createInput({inputs, input, saveBtn});
    form.appendChild(label);
  });

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('form__buttons');
  buttonsContainer.appendChild(saveBtn);
  if (buttons.includes('cancel')) buttonsContainer.appendChild(cancelBtn);

  form.appendChild(buttonsContainer);

  return form;
}
