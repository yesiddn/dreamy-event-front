import CreateUserSection from '../templates/CreateUserSection.js';
import Header from '../templates/Header.js';

const CreateUser = (API) => {
  Header();
  CreateUserSection(API);
};

export default CreateUser;
