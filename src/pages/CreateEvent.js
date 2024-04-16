import CreateEventSection from '../templates/CreateEventSection.js';
import Header from '../templates/Header.js';

const CreateEvent = (API, USER) => {
  Header(USER);
  CreateEventSection(API);
};

export default CreateEvent;
