import Alert from "../templates/Alert";

export default function saveLogin(userData) {
  localStorage.setItem('user', JSON.stringify(userData));
  
  Alert('welcome', '/');
} 