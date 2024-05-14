import '../styles/form.css';

export default function editEventForm(eventDetail) {
  const formEvent = document.createElement('form');
  formEvent.classList.add('form');
  formEvent.id = 'form';
  
  const labelEventName = document.createElement('label');
  labelEventName.htmlFor = 'event-name';
  labelEventName.classList.add('form__input');
  labelEventName.textContent = 'Nombre del evento:';
  formEvent.appendChild(labelEventName);
  
  const inputEventName = document.createElement('input');
  inputEventName.id = 'event-name';
  inputEventName.type = 'text';
  inputEventName.name = 'event-name';
  inputEventName.placeholder = 'Nombre del evento';
  inputEventName.value = eventDetail.name;
  labelEventName.appendChild(inputEventName);
  
  const labelEventDate = document.createElement('label');
  labelEventDate.htmlFor = 'event-date';
  labelEventDate.classList.add('form__input');
  labelEventDate.textContent = 'Fecha/Hora:';
  formEvent.appendChild(labelEventDate);
  
  const inputEventDate = document.createElement('input');
  inputEventDate.id = 'event-date';
  inputEventDate.type = 'datetime-local';
  inputEventDate.name = 'event-date';
  inputEventDate.placeholder = 'Fecha/Hora';
  inputEventDate.value = eventDetail.date;
  labelEventDate.appendChild(inputEventDate);
  
  const labelEventAddress = document.createElement('label');
  labelEventAddress.htmlFor = 'event-address';
  labelEventAddress.classList.add('form__input');
  labelEventAddress.textContent = 'Dirección:';
  formEvent.appendChild(labelEventAddress);
  
  const inputEventAddress = document.createElement('input');
  inputEventAddress.id = 'event-address';
  inputEventAddress.type = 'text';
  inputEventAddress.name = 'event-address';
  inputEventAddress.placeholder = 'Dirección';
  inputEventAddress.value = eventDetail.address;
  labelEventAddress.appendChild(inputEventAddress);
  
  const labelEventCity = document.createElement('label');
  labelEventCity.htmlFor = 'event-city';
  labelEventCity.classList.add('form__input');
  labelEventCity.textContent = 'Ciudad:';
  formEvent.appendChild(labelEventCity);
  
  const inputEventCity = document.createElement('input');
  inputEventCity.id = 'event-city';
  inputEventCity.type = 'text';
  inputEventCity.name = 'event-city';
  inputEventCity.placeholder = 'Ciudad';
  inputEventCity.value = eventDetail.city;
  labelEventCity.appendChild(inputEventCity);
  
  const labelEventCountry = document.createElement('label');
  labelEventCountry.htmlFor = 'event-country';
  labelEventCountry.classList.add('form__input');
  labelEventCountry.textContent = 'País:';
  formEvent.appendChild(labelEventCountry);
  
  const inputEventCountry = document.createElement('input');
  inputEventCountry.id = 'event-country';
  inputEventCountry.type = 'text';
  inputEventCountry.name = 'event-country';
  inputEventCountry.placeholder = 'País';
  inputEventCountry.value = eventDetail.country;
  labelEventCountry.appendChild(inputEventCountry);
 
  const labelEventType = document.createElement('label');
  labelEventType.htmlFor = 'event-type';
  labelEventType.classList.add('form__input');
  labelEventType.textContent = 'Tipo de evento:';
  formEvent.appendChild(labelEventType);

  const selectEventType = document.createElement('select');
  selectEventType.id = 'event-type';
  selectEventType.name = 'event-type';
  labelEventType.appendChild(selectEventType);

  const eventTypes = [
    { value: '1', text: 'Boda' },
    { value: '2', text: 'Fiesta de cumpleaños' },
    { value: '3', text: 'Baby showers' },
    { value: '4', text: 'Conferencia/Seminario' },
    { value: '5', text: 'Quince años' },
    { value: '6', text: 'Reunión corporativa' },
    { value: '7', text: 'Feria/Exposición' },
    { value: '8', text: 'Celebración familiar' },
    { value: '9', text: 'Bautizo' },
    { value: '10', text: 'Comunión' },
    { value: '11', text: 'Confirmación' },
    { value: '12', text: 'Graduación' },
  ];

  eventTypes.forEach((eventType) => {
    const option = document.createElement('option');
    option.value = eventType.value;
    option.textContent = eventType.text;
    selectEventType.appendChild(option);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.id = 'event-form-button';
  submitButton.textContent = 'Editar';
  formEvent.appendChild(submitButton);

  return formEvent;
}
