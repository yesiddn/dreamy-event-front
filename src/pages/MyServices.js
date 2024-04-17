import Header from '../templates/Header.js';
import SupplierServices from '../templates/SupplierServices.js';
import deleteService from '../utils/delete-service.js';

const MyServices = (API, USER) => {
  Header(USER);
  SupplierServices(API, deleteService);
};


export default MyServices;