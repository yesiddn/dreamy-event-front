import validateProcess from "./validate-process";

export default function createInput({inputs, input, saveBtn}) {
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

    inputElement.addEventListener('change', () => {
      validateProcess({ inputs, input, inputElement, spanError, saveBtn });
    });
  }

  const spanError = document.createElement('span');
  spanError.classList.add('inactive');
  spanError.textContent = input.errorMesage;

  inputElement.addEventListener('keyup', () => {
    validateProcess({inputs, input, inputElement, spanError, saveBtn});
  });

  label.appendChild(inputElement);
  label.appendChild(spanError);

  return label;
}
