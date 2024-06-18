import '../styles/event-summary.css';
import getPaymentURL from '../utils/get-payment';
import toLocalDateTime from '../utils/to-local-date';

export default async function EventDetails(API, eventDetails) {
  const eventDetailsSection = document.createElement('section');
  eventDetailsSection.className = 'event-details';

  const resumeEventHeader = document.createElement('div');
  resumeEventHeader.className = 'event-details__header';
  eventDetailsSection.appendChild(resumeEventHeader);

  const headerTitle = document.createElement('h2');
  headerTitle.textContent = eventDetails.name;
  resumeEventHeader.appendChild(headerTitle);

  const headerDetails = document.createElement('div');
  headerDetails.className = 'event-details__header__details';
  resumeEventHeader.appendChild(headerDetails);

  const eventLocation = document.createElement('p');
  eventLocation.innerHTML = `Lugar del evento: <span>${eventDetails.address} | ${eventDetails.city}</span>`;
  headerDetails.appendChild(eventLocation);

  const eventDate = document.createElement('p');
  eventDate.innerHTML = `Fecha de evento: <span>${toLocalDateTime(
    eventDetails.date
  )}</span>`;
  headerDetails.appendChild(eventDate);

  const resumeEventBody = document.createElement('div');
  resumeEventBody.className = 'event-details__body';
  eventDetailsSection.appendChild(resumeEventBody);

  const summaryTitle = document.createElement('h3');
  summaryTitle.textContent = 'Resumen';
  resumeEventBody.appendChild(summaryTitle);

  eventDetails.eventSummary.forEach((service) => {
    const serviceContainer = document.createElement('div');
    serviceContainer.classList.add('event-details__body__service');

    const serviceTitle = document.createElement('h4');
    serviceTitle.textContent = service.service.name;
    serviceContainer.appendChild(serviceTitle);

    const servicePrice = document.createElement('p');
    servicePrice.textContent = service.service.price.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    });
    serviceContainer.appendChild(servicePrice);
    resumeEventBody.appendChild(serviceContainer);
  });

  const totalContainer = document.createElement('div');
  totalContainer.className = 'event-details__body__total';

  const totalTitle = document.createElement('h3');
  totalTitle.textContent = 'Total:';
  totalContainer.appendChild(totalTitle);

  const totalPrice = document.createElement('p');
  totalPrice.textContent = eventDetails.eventSummary
    .reduce((acc, service) => acc + service.service.price, 0)
    .toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    });
  totalContainer.appendChild(totalPrice);

  resumeEventBody.appendChild(totalContainer);

  const reserveButton = document.createElement('a');
  reserveButton.className = 'event-details__body__button';
  reserveButton.id = 'reserve';
  reserveButton.textContent = 'Reservar servicios';
  
  const reserveLoading = document.createElement('span');
  reserveLoading.classList.add('loading');
  reserveButton.appendChild(reserveLoading);

  if (eventDetails.eventSummary.length > 0) {
    setPaymentUrl(API, eventDetails, reserveButton);
  }

  resumeEventBody.appendChild(reserveButton);

  return eventDetailsSection;
}

async function setPaymentUrl(API, eventDetails, reserveButton) {
  const response = await getPaymentURL(API, eventDetails.eventId);

  reserveButton.href = await response.url;
  reserveButton.lastChild.remove();
}
