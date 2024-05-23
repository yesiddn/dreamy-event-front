import Header from '../templates/Header.js';
import SendCodeSection from '../templates/EmailSendCodeSection.js';

const RecoverPassword = (API) => {
  Header(USER);
  SendCodeSection(API);
};

export default RecoverPassword;
