import Header from '../../src/templates/Header.js';
import LoginForm from '../templates/LoginSection.js';

const Login = (API) => {
  Header();
  LoginForm(API);
};

export default Login;
