import Header from '../templates/Header.js';
import SupplierServices from '../templates/SupplierServices.js';

const MyServices = (API, USER) => {
  Header(USER);
  SupplierServices(API, USER);
};

export default MyServices;
