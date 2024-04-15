import Header from "../templates/Header.js"
import SignUpSection from "../templates/SignUpSection.js";

const Signup = (API) => {
  Header();
  SignUpSection(API);
};

export default Signup;