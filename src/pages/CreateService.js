import CreateServiceSection from '../templates/CreateServiceSection.js';
import Header from '../templates/Header.js';

const CreateService = (API) => {
  Header();
  CreateServiceSection(API);
};

export default CreateService;
