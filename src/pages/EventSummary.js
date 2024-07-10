import EventDetails from '../templates/EventDetails.js';
import Header from '../templates/Header.js';
import ListOfServices from '../templates/list-of-services.js';
import getEventSummary from '../utils/get-event-summary.js';
import saveEventSummary from '../utils/save-event-summary.js';
const EventSummary = async (API, User) => {
  Header(User);

  const eventId = window.location.pathname.split('/')[2];
  let eventSummaryDetails = await getEventSummary(API, eventId);
  if (window.location.search === '?success=true') {
    eventSummaryDetails.transactionState = 1;
    eventSummaryDetails = await saveEventSummary(API, JSON.stringify(eventSummaryDetails));
  }

  const eventSummaryContainer = document.createElement('div');
  eventSummaryContainer.className = 'event-summary';
  document.querySelector('#app').appendChild(eventSummaryContainer);

  const eventDetails = await EventDetails(API, eventSummaryDetails);
  eventSummaryContainer.appendChild(eventDetails);

  const services = eventSummaryDetails.eventSummary.map((service) => {
    service.service.summaryId = service.summaryId;
    return service.service;
  });
  const listOfServices = ListOfServices(services, 'card-event-summary', API);
  eventSummaryContainer.appendChild(listOfServices);
}
export default EventSummary;
