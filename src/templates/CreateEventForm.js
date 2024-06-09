import '../styles/form.css';
import getTypeEvents from '../utils/get-type-events';

export default function EventForm(API) {
  const form = document.createElement('form');
  form.classList.add('form');
  form.setAttribute('id', 'form');
  form.setAttribute('method', 'post');

  const formElements = [
    {
      label: 'Nombre del evento:',
      type: 'text',
      name: 'event-name',
      placeholder: 'Nombre del evento',
    },
    {
      label: 'Fecha/Hora:',
      type: 'datetime-local',
      name: 'event-date',
      placeholder: 'Fecha',
    },
    {
      label: 'Dirección:',
      type: 'text',
      name: 'event-address',
      placeholder: 'Dirección',
    },
    {
      label: 'Ciudad:',
      type: 'text',
      name: 'event-city',
      placeholder: 'Ciudad',
    },
    {
      label: 'País:',
      type: 'text',
      name: 'event-country',
      placeholder: 'País',
    },
    {
      label: 'Tipo de evento:',
      type: 'select',
      name: 'event-type',
    },
  ];

  formElements.forEach(async (element) => {
    const label = document.createElement('label');
    label.classList.add('form__input');
    label.setAttribute('for', element.name);
    label.innerHTML = element.label;
    form.appendChild(label);

    if (element.type === 'select') {
      const select = document.createElement('select');
      select.setAttribute('name', element.name);
      select.setAttribute('id', element.name);
      label.appendChild(select);

      const options = await getTypeEvents(API);

      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.hidden = true;
      defaultOption.selected = true;
      defaultOption.textContent = 'Seleccione un tipo de evento';
      select.appendChild(defaultOption);

      options.forEach((optionText) => {
        const option = document.createElement('option');
        option.value = optionText.type;
        option.textContent = optionText.type;
        
        select.appendChild(option);
      });
    } else {
      const input = document.createElement('input');
      input.setAttribute('id', element.name);
      input.setAttribute('type', element.type);

      if (element.name === 'event-date') {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 30);

        // Formatear la fecha en el formato adecuado para datetime-local (YYYY-MM-DDTHH:MM)
        var year = currentDate.getFullYear();
        var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        var day = ('0' + currentDate.getDate()).slice(-2);
        var hours = ('0' + currentDate.getHours()).slice(-2);
        var minutes = ('0' + currentDate.getMinutes()).slice(-2);

        var minDateFormatted = `${year}-${month}-${day}T${hours}:${minutes}`;
        input.setAttribute('min', minDateFormatted);
      }

      input.setAttribute('name', element.name);
      input.setAttribute('placeholder', element.placeholder);
      input.setAttribute('onkeyup', `validateInputData('${element.name}')`);

      const span = document.createElement('span');
      span.classList.add('inactive');
      span.innerHTML = 'Ingrese un valor valido.';
      label.appendChild(input);
      label.appendChild(span);
    }
  });

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'form-button');
  submitButton.innerHTML = 'Crear';

  form.appendChild(submitButton);

  return form;
}
