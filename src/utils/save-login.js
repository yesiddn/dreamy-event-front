import Alert from "../templates/Alert";

export default function saveLogin(userData, message, redirectTo = '/') {
  localStorage.setItem('user', JSON.stringify(userData));
  
  Alert(message, redirectTo);
} 