import Header from '../templates/Header.js';
import SendCodeSection from '../templates/EmailSendCodeSection.js';

const RecoverPassword = (API,USER) => {
  Header(USER);
  SendCodeSection(API);
};

export default RecoverPassword;
