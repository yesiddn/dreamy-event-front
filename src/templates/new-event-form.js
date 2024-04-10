
export default async function NewEventForm(API) {
const formSection = document.createElement('section');
formSection.classList.add('form-section');

const formContainer = document.createElement('div');
formContainer.classList.add('form__container');

const h2 = document.createElement('h2');
h2.innerHTML = 'Crear <span class="primary">Evento</span>';

const square = document.createElement('div');
square.classList.add('square');

const form = document.createElement('form');
form.classList.add('form');
form.setAttribute('id', 'form');
form.setAttribute('method', 'post');

const formElements = [
    { label: 'Nombre del evento:', type: 'text', name: 'event-name', placeholder: 'Nombre del evento' },
    { label: 'Fecha/Hora:', type: 'datetime-local', name: 'event-date', placeholder: 'Fecha' },
    { label: 'Dirección:', type: 'text', name: 'event-address', placeholder: 'Dirección' },
    { label: 'Ciudad:', type: 'text', name: 'event-city', placeholder: 'Ciudad' },
    { label: 'País:', type: 'text', name: 'event-country', placeholder: 'País' },
    { label: 'Tipo de evento:', type: 'select', name: 'event-type', options: ['Seleccione un tipo de evento', 'Boda', 'Fiesta de cumpleaños', 'Baby showers', 'Conferencia/Seminario', 'Quince años', 'Reunión corporativa', 'Feria/Exposición', 'Celebración familiar', 'Bautizo', 'Comunión', 'Confirmación', 'Graduación'] }
];

formElements.forEach(element => {
    const label = document.createElement('label');
    label.classList.add('form__input');
    label.setAttribute('for', element.name);
    label.innerHTML = element.label;

    if (element.type === 'select') {
        const select = document.createElement('select');
        select.setAttribute('name', element.name);
        select.setAttribute('id', element.name);
        select.setAttribute('onchange', `validateInputData('${element.name}')`);

        element.options.forEach(optionText => {
            const option = document.createElement('option');
            option.setAttribute('value', optionText);
            option.innerHTML = optionText;
            select.appendChild(option);
        });

        label.appendChild(select);
    } else {
        const input = document.createElement('input');
        input.setAttribute('id', element.name);
        input.setAttribute('type', element.type);
        input.setAttribute('name', element.name);
        input.setAttribute('placeholder', element.placeholder);
        input.setAttribute('onkeyup', `validateInputData('${element.name}')`);

        const span = document.createElement('span');
        span.classList.add('inactive');
        span.innerHTML = 'Ingrese un valor valido.';
        label.appendChild(input);
        label.appendChild(span);
    }

    form.appendChild(label);
});

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('id', 'form-button');
submitButton.innerHTML = 'Crear';

form.appendChild(submitButton);

formContainer.appendChild(h2);
formContainer.appendChild(square);
formContainer.appendChild(form);

formSection.appendChild(formContainer);

document.body.appendChild(formSection);
}