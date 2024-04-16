import './styles/normalize.css';
import './styles/global.css';
import router from './routes/router';
import getUserData from './utils/get-user-data';

const API = 'http://localhost:3000/api/v1';
const USER = getUserData();

router(API, USER);
