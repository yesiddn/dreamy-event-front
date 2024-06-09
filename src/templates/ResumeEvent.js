import '../styles/resume-event.css';

export default function ResumeEvent() {
const eventDetails = document.createElement('div');
eventDetails.className = 'event-details';

const resumeEvent = document.createElement('section');
resumeEvent.className = 'resume-event';
eventDetails.appendChild(resumeEvent);

const resumeEventHeader = document.createElement('div');
resumeEventHeader.className = 'resume-event__header';
resumeEvent.appendChild(resumeEventHeader);

const headerTitle = document.createElement('h2');
headerTitle.textContent = 'CUMPLEAÑOS CAMILO';
resumeEventHeader.appendChild(headerTitle);

const headerDetails = document.createElement('div');
headerDetails.className = 'resume-event__header__details';
resumeEventHeader.appendChild(headerDetails);

const orderDate = document.createElement('p');
orderDate.innerHTML = 'Fecha de orden: <span>##### 00:00</span>';
headerDetails.appendChild(orderDate);

const eventLocation = document.createElement('p');
eventLocation.innerHTML = 'Lugar del evento: <span>######</span>';
headerDetails.appendChild(eventLocation);

const eventDate = document.createElement('p');
eventDate.innerHTML = 'Fecha de evento: <span>##### 00:00</span>';
headerDetails.appendChild(eventDate);

const resumeEventBody = document.createElement('div');
resumeEventBody.className = 'resume-event__body';
resumeEvent.appendChild(resumeEventBody);

const summaryTitle = document.createElement('h3');
summaryTitle.textContent = 'Resumen';
resumeEventBody.appendChild(summaryTitle);

const createService = (title, price) => {
  const service = document.createElement('div');
  service.className = 'resume-event__body__service';
  
  const serviceTitle = document.createElement('h4');
  serviceTitle.textContent = title;
  service.appendChild(serviceTitle);
  
  const servicePrice = document.createElement('p');
  servicePrice.textContent = price;
  service.appendChild(servicePrice);
  
  return service;
};

resumeEventBody.appendChild(createService('Pastel de cumpleaños', '$100.000'));
resumeEventBody.appendChild(createService('Catering', '$100.000'));
resumeEventBody.appendChild(createService('Decoración', '$100.000'));
resumeEventBody.appendChild(createService('Comida/Bebida', '$100.000'));
resumeEventBody.appendChild(createService('Aseo', '$100.000'));

const totalContainer = document.createElement('div');
totalContainer.className = 'resume-event__body__total';

const totalTitle = document.createElement('h3');
totalTitle.textContent = 'Total:';
totalContainer.appendChild(totalTitle);

const totalPrice = document.createElement('p');
totalPrice.textContent = '$300.000';
totalContainer.appendChild(totalPrice);

resumeEventBody.appendChild(totalContainer);

const reserveButton = document.createElement('button');
reserveButton.type = 'button';
reserveButton.className = 'resume-event__body__button';
reserveButton.id = 'reserve';
reserveButton.textContent = 'Reservar servicios';
resumeEventBody.appendChild(reserveButton);

const cardsContainer = document.createElement('section');
cardsContainer.className = 'cards-container';
cardsContainer.id = 'cards__container';
eventDetails.appendChild(cardsContainer);

const card = document.createElement('a');
card.href = '#';
card.className = 'card';
cardsContainer.appendChild(card);

const cardButton = document.createElement('button');
card.appendChild(cardButton);

const cardImage = document.createElement('img');
cardImage.src = 'public/img/img2.jpeg';
cardImage.alt = 'Imagen 2';
card.appendChild(cardImage);

const cardContent = document.createElement('div');
cardContent.className = 'card__content';
card.appendChild(cardContent);

const cardTitle = document.createElement('div');
cardTitle.className = 'card__title';
cardContent.appendChild(cardTitle);

const cardTitleText = document.createElement('h2');
cardTitleText.textContent = 'Alojamiento en casa campestre';
cardTitle.appendChild(cardTitleText);

const cardRating = document.createElement('p');
cardRating.textContent = '★4.5';
cardTitle.appendChild(cardRating);

const cardLocation = document.createElement('p');
cardLocation.className = '';
cardLocation.innerHTML = 'Ubicación:Vereda Quebrada de becerras <span></span>';
cardContent.appendChild(cardLocation);

const cardPrice = document.createElement('p');
cardPrice.className = '';
cardPrice.textContent = '$90000';
cardContent.appendChild(cardPrice);

document.querySelector('#app').appendChild(eventDetails);
}