import Header from '../templates/Header.js';
import changePasswordSection from '../templates/ChangePasswordSection.js';

const ChangePassword = (API) =>{
    Header();
    changePasswordSection(API)
};

export default ChangePassword;