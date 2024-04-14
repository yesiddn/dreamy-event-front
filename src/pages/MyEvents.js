import Header from '../templates/Header.js';
import EventSection from '../templates/EventSection.js';
import deleteEvents from '../utils/delete-event.js';

const MyEvents = (API) => {
  Header();
  EventSection(API, deleteEvents);
};


export default MyEvents;