import Header from '../templates/Header.js';
import EditEventSection from '../templates/EditEventSection.js';

const EditEvents = (API) => {
  Header();
  EditEventSection(API);
};

export default EditEvents;