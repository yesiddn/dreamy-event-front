import createImagePreview from './create-image-preview';
import validateProcess from './validate-process';

export default function createInput({
  inputs,
  input,
  saveBtn,
  serviceDetails,
  imagesToUpload,
}) {
  const label = document.createElement('label');
  label.htmlFor = input.id;
  label.classList.add('form__input');
  label.textContent = `${input.label}:`;

  const inputElement = input.element
    ? document.createElement(input.element)
    : document.createElement('input');
  inputElement.id = input.id;
  input.element ? null : (inputElement.type = input.type);
  inputElement.name = input.name;
  inputElement.placeholder = input.placeholder;

  if (input.minLength) inputElement.minLength = input.minLength;
  if (input.id === 'rut') inputElement.min = 10000000;
  if (input.id === 'phone') inputElement.min = 1000000000;
  if (input.type === 'file') {
    inputElement.accept = input.accept;
    inputElement.multiple = input.multiple;

    inputElement.addEventListener('change', () => {
      input.modify = true;
      validateProcess({ inputs, input, inputElement, spanError, saveBtn });
      if (inputElement.value.trim() === '') saveBtn.disabled = true;

      const imagesPreviewCointainer = document.querySelector('.form__images');

      if (inputElement.files && inputElement.files[0]) {
        [...inputElement.files].forEach((file) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            const image = {
              url: e.target.result,
              local: true,
            };

            const imagePreview = createImagePreview(image, (imageContainer) =>
              imageContainer.remove()
            );

            imagesPreviewCointainer.appendChild(imagePreview);
            imagesToUpload.push(file);
          };
        });
      }
    });
  }

  const spanError = document.createElement('span');
  spanError.classList.add('inactive');
  spanError.textContent = input.errorMesage;

  inputElement.addEventListener('keyup', () => {
    input.modify = true;
    validateProcess({ inputs, input, inputElement, spanError, saveBtn });

    if (inputElement.value.trim() === '') saveBtn.disabled = true;
    serviceDetails ? (serviceDetails[input.name] = inputElement.value) : null;
  });

  if (serviceDetails) {
    if (input.type !== 'file') {
      inputElement.value = serviceDetails[input.name];
    }
  }

  label.appendChild(inputElement);
  label.appendChild(spanError);

  return label;
}
