import EditServiceSection from '../templates/EditServiceSection.js';
import Header from '../templates/Header.js';

const EditService = (API, USER) => {
  Header(USER);
  EditServiceSection(API);
};

export default EditService;
