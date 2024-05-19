import Header from '../templates/Header.js';
import EventSection from '../templates/EventSection.js';
import deleteEvents from '../utils/delete-event.js';

const MyEvents = (API, USER) => {
  Header(USER);
  EventSection(API, USER, deleteEvents);
};


export default MyEvents;