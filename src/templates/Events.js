import '../styles/my-events.css';

export default function showEvents(eventDetails, typecard = 'card-user') {
  // event container
  const eventContainer = document.createElement('a');
  eventContainer.classList.add('event');
  eventContainer.href = '/event-summary/' + eventDetails.eventId;

  // event header
  const eventHeader = document.createElement('div');
  eventHeader.classList.add('event__header');
  eventContainer.appendChild(eventHeader);

  const eventName = document.createElement('h3');
  eventName.innerHTML = eventDetails.name;
  eventHeader.appendChild(eventName);

  // event details
  const eventWrapper = document.createElement('div');
  eventWrapper.classList.add('event__header__details');
  eventHeader.appendChild(eventWrapper);

  // event details -> cantidad de servicios
  const eventServices = document.createElement('p');
  eventServices.textContent = `Cantidad de servicios: ${eventDetails.eventSummary.length}`;
  eventWrapper.appendChild(eventServices);

  const spanServices = document.createElement('span');
  spanServices.classList.add('highlight-text');
  spanServices.textContent = eventDetails.amountServices;
  eventServices.appendChild(spanServices);

  // event details -> fecha
  const eventDate = document.createElement('p');
  eventDate.textContent = 'Fecha: ';
  eventWrapper.appendChild(eventDate);

  const spanDate = document.createElement('span');
  spanDate.classList.add('highlight-text');
  const eventDateTime = new Date(eventDetails.date);
  const eventDateOnly = eventDateTime.toISOString().split('T')[0];
  spanDate.textContent = eventDateOnly;
  eventDate.appendChild(spanDate);

  // event price
  const eventPrice = document.createElement('div');
  eventPrice.classList.add('event__price');
  eventContainer.appendChild(eventPrice);

  const eventTotal = document.createElement('h4');
  eventTotal.textContent = 'Total: ';
  eventPrice.appendChild(eventTotal);

  const spanTotal = document.createElement('span');
  spanTotal.classList.add('highlight-text');

  if (eventDetails.eventSummary.length != 0) {
    let total = eventDetails.eventSummary.reduce((acc, service) => acc + service.service.price, 0);
    console.log(total);

    spanTotal.textContent = total.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    });
  } else {
    spanTotal.textContent = 0;
  }
  eventTotal.appendChild(spanTotal);

  // event options
  const eventOptions = document.createElement('div');
  eventOptions.classList.add('event__options');
  eventOptions.classList.add('inactive');
  eventContainer.appendChild(eventOptions);

  // event options -> editar
  const eventEdit = document.createElement('a');
  eventEdit.href = 'edit-event/' + eventDetails.eventId;
  eventEdit.classList.add('event__options__edit');
  eventOptions.appendChild(eventEdit);

  const eventEditIcon = document.createElement('span');
  eventEditIcon.classList.add('icon-pencil');

  eventEdit.textContent = 'Editar';
  eventEdit.appendChild(eventEditIcon);

  // event options -> eliminar
  const eventDelete = document.createElement('button');
  eventDelete.setAttribute('type', 'button');
  eventDelete.classList.add('event__options__delete');
  eventDelete.textContent = 'Eliminar';
  eventOptions.appendChild(eventDelete);

  const eventDeleteIcon = document.createElement('span');
  eventDeleteIcon.classList.add('icon-trash');
  eventDelete.appendChild(eventDeleteIcon);

  eventDelete.addEventListener('click', async (e) => {
    e.preventDefault();
  });

  // event options -> show options
  const eventOptionsShow = document.createElement('span');
  eventOptionsShow.classList.add('icon-ellipsis');

  eventOptionsShow.addEventListener('click', (e) => {
    e.preventDefault();
    eventOptions.classList.toggle('inactive');
    eventOptions.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target !== eventOptionsShow) {
      eventOptions.classList.remove('active');
      eventOptions.classList.add('inactive');
    }
  });
  eventContainer.appendChild(eventOptionsShow);

  return eventContainer;
}
