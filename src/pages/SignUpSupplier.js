import Header from "../templates/Header.js"
import SignUpSupplierSection from "../templates/SignUpSupplierSection.js";

const SignUpSupplier = (API, USER) => {
  Header(USER);
  SignUpSupplierSection(API);
};

export default SignUpSupplier;