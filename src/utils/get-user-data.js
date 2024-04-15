export default function getUserData() {
  const data = JSON.parse(localStorage.getItem('user'));
  return data;
}