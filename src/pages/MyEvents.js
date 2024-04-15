import Header from '../templates/Header.js';
import EventSection from '../templates/EventSection.js';

const MyEvents = (API) => {
  Header();
  EventSection(API);
};


export default MyEvents;