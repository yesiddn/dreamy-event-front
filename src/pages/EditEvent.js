import Header from '../templates/Header.js';
import EditEventSection from '../templates/EditEventSection.js';

const EditEvents = (API, USER) => {
  Header();
  EditEventSection(API, USER);
};

export default EditEvents;