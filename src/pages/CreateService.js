import CreateServiceSection from '../templates/CreateServiceSection.js';
import Header from '../templates/Header.js';

const CreateService = (API, USER) => {
  Header(USER);
  CreateServiceSection(API);
};

export default CreateService;
