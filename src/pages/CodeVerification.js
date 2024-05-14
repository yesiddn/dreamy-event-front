import Header from '../templates/Header.js';
import RecoveryCode from '../templates/Recovery-code.js';

const CodeVerification = (API) =>{
    Header();
    RecoveryCode(API);
};

export default CodeVerification;