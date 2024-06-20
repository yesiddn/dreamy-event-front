import EventDetails from '../templates/EventDetails.js';
import Header from '../templates/Header.js';
import ListOfServices from '../templates/list-of-services.js';
import getEventSummary from '../utils/get-event-summary.js';
const EventSummary = async (API, User) => {
  Header(User);

  const eventSummaryDetails = await getEventSummary(API, window.location.pathname.split('/')[2]);

  const eventSummaryContainer = document.createElement('div');
  eventSummaryContainer.className = 'event-summary';
  document.querySelector('#app').appendChild(eventSummaryContainer);

  const eventDetails = EventDetails(eventSummaryDetails);
  eventSummaryContainer.appendChild(eventDetails);

  const services = eventSummaryDetails.eventSummary.map((service) => {
    service.service.summaryId = service.summaryId;
    return service.service;
  });
  const listOfServices = ListOfServices(services, 'card-event-summary', API);
  eventSummaryContainer.appendChild(listOfServices);
}
export default EventSummary;
