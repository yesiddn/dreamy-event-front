import Header from '../../src/templates/Header.js';
import LoginForm from '../templates/LoginSection.js';

const Login = (API, USER) => {
  Header(USER);
  LoginForm(API);
};

export default Login;
