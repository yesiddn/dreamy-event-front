import showEvents from './Events.js';
import '../styles/my-events.css';
import getEvents from '../utils/get-events.js';
import deleteEvents from '../utils/delete-event.js';

export default async function EventSection(API, USER) {
  const listEventContainer = document.createElement('section');
  listEventContainer.classList.add('my-events');

  const eventContainer = document.createElement('div');
  eventContainer.classList.add('my-events__header');
  listEventContainer.appendChild(eventContainer);

  const title = document.createElement('h2');
  title.innerHTML = 'Mis eventos';
  eventContainer.appendChild(title);

  const newEvent = document.createElement('a');
  newEvent.href = '/new-event';
  newEvent.classList.add('my-events__header__create');
  newEvent.innerHTML = 'Nuevo evento<span></span>';
  eventContainer.appendChild(newEvent);

  const showMyEvents = document.createElement('div');
  showMyEvents.classList.add('events-list');
  listEventContainer.appendChild(showMyEvents);

  const events = await getEvents(API, USER.customer.customerId);

  if (!events) {
    return;
  }

  events.forEach((eventDetail) => {
    const eventCard = showEvents(eventDetail);
    showMyEvents.appendChild(eventCard);

    const eventDelete = eventCard.querySelector('.event__options__delete');
    eventDelete.addEventListener('click', async (e) => {
      e.preventDefault();

      const eventId = eventDetail.eventId;
      const response = await deleteEvents(API, eventId);
      if (response) {
        console.log('Evento eliminado');
        eventCard.remove();
      } else {
        console.log('Error al eliminar el evento');
      }
    });
  });

  document.querySelector('#app').appendChild(listEventContainer);
}
