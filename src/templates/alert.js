import '../styles/alerts.css';
import alerts from '../utils/alert-list.js';

export default function Alert(typeAlert, redirectTo = null) {
  // Alert body
  const alertPopUp = document.createElement('div');
  alertPopUp.classList.add('alert');
  alertPopUp.style.backgroundColor = alerts[typeAlert].color;

  const alertText = AlertText(typeAlert);
  alertPopUp.appendChild(alertText);

  // close button
  const closeButton = CloseButton(alertPopUp, redirectTo);
  alertPopUp.appendChild(closeButton);

  document.body.appendChild(alertPopUp);

  setTimeout(() => {
    closeAlert(alertPopUp, redirectTo);
  }, 3000);
}

function closeAlert(alertPopUpElement, redirectTo) {
  if (redirectTo) {
    window.location.assign(redirectTo);
  }
  
  alertPopUpElement.remove();
}

// alert text
function AlertText(typeAlert) {
  const alertText = document.createElement('p');
  alertText.textContent = alerts[typeAlert].message;
  return alertText;
}

// close button
function CloseButton(alertPopUpElement, redirectTo) {
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.classList.add('close-button');

  const closeText = document.createElement('span');
  closeText.textContent = 'Cerrar';
  closeButton.appendChild(closeText);

  closeButton.addEventListener('click', () => {
    closeAlert(alertPopUpElement, redirectTo);
  });

  return closeButton;
}