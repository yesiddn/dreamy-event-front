import Alert from "../templates/Alert";

export default function logOut() {
  localStorage.removeItem('updatedData');
  localStorage.removeItem('user');
  Alert('log-out', '/');
}