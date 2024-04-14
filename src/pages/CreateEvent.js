import CreateEventSection from '../templates/CreateEventSection.js';
import Header from '../templates/Header.js';

const CreateEvent = (API) => {
  Header();
  CreateEventSection(API);
};

export default CreateEvent;
