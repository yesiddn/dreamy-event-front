import Header from "../templates/Header.js"
import SignUpSupplierSection from "../templates/SignUpSupplierSection.js";

const SignUpSupplier = (API, USER) => {
  Header(API, USER);
  SignUpSupplierSection(API, USER);
};

export default SignUpSupplier;