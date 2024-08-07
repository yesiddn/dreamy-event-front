import '../styles/form-section.css';
import EventForm from './CreateEventForm';
import saveEvents from '../utils/save-event';
import Alert from './Alert.js';

export default async function CreateEventSection(API, USER) {
  const formSection = document.createElement('section');
  formSection.classList.add('form-section');

  const formContainer = document.createElement('div');
  formContainer.classList.add('form__container');
  formSection.appendChild(formContainer);

  const h2 = document.createElement('h2');
  h2.innerHTML = 'Crear un nuevo <span class="primary">evento</span>';
  formContainer.appendChild(h2);

  const square = document.createElement('div');
  square.classList.add('square');
  formContainer.appendChild(square);

  const createEvent = EventForm(API);
  formContainer.appendChild(createEvent);

  formContainer.addEventListener('submit', async (event) => {
    event.preventDefault();
    const serviceId = window.location.search
      ? window.location.search.split('=')[1]
      : null;

    const formData = new FormData(createEvent);
    const eventData = {
      name: formData.get('event-name'),
      date: new Date(formData.get('event-date')).toISOString(),
      address: formData.get('event-address'),
      city: formData.get('event-city'),
      country: formData.get('event-country'),
      customer: USER.customer,
      typeEvent: { id: formData.get('event-type') },
      eventSummary: serviceId
        ? [
            {
              service: {
                serviceId,
              },
            },
          ]
        : [],
    };

    const eventDataString = JSON.stringify(eventData);

    try {
      const response = await saveEvents(API, eventDataString);

      if (response) {
        console.log(response);
        Alert(
          'event-created-successfully',
          `/event-summary/${response.eventId}`
        );
      } else {
        Alert('event-error');
      }
    } catch (error) {
      console.log('Ocurrio un error al crear el evento: ', error);
      Alert('event-error');
    }
  });
  document.querySelector('#app').appendChild(formSection);
}
