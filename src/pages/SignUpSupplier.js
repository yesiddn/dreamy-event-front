import Header from '../templates/Header.js';
import SignUpSupplierSection from '../templates/SignUpSupplierSection.js';

const SignUpSupplier = (API, USER) => {
  Header(USER);
  SignUpSupplierSection(API, USER);
};

export default SignUpSupplier;
