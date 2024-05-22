import Header from "../templates/Header.js"
import SignUpSection from "../templates/SignUpSection.js";

const Signup = (API, USER) => {
  Header(API, USER);
  SignUpSection(API);
};

export default Signup;