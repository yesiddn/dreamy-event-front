import cancelBtn from './create-cancel-btn';
import createInput from './create-input';

export default function createForm({ API, inputs, buttons, callback }) {
  const form = document.createElement('form');
  form.classList.add('form');
  form.id = 'form';

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
