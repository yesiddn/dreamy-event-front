import cancelBtn from './create-cancel-btn';
import createImagePreview from './create-image-preview';
import createInput from './create-input';

export default function createForm({
  API,
  inputs,
  buttons,
  serviceDetails,
  imagesToUpload,
  callback,
}) {
  const form = document.createElement('form');
  form.classList.add('form');
  form.id = 'form';

  const saveBtn = document.createElement('button');
  saveBtn.type = 'button';
  saveBtn.id = 'form-button';
  saveBtn.textContent = 'Guardar';
  saveBtn.disabled = true;

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('form__buttons');

  saveBtn.addEventListener('click', () => {
    callback(API, serviceDetails, imagesToUpload);
  });

  buttonsContainer.appendChild(saveBtn);
  if (buttons.includes('cancel')) buttonsContainer.appendChild(cancelBtn);

  if (serviceDetails) {
    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('form__images');

    serviceDetails.images.forEach((image, index) => {
      const imagePreview = createImagePreview(image, (imageContainer) => {
        imageContainer.remove();
        serviceDetails.images.splice(index, 1);
        saveBtn.disabled = false;
      });
      imagesContainer.appendChild(imagePreview);
    });

    form.appendChild(imagesContainer);
  }

  inputs.forEach((input) => {
    const label = createInput({
      inputs,
      input,
      saveBtn,
      serviceDetails,
      imagesToUpload,
    });
    form.appendChild(label);
  });

  form.appendChild(buttonsContainer);

  return form;
}
