import Header from '../templates/Header.js';
import getServiceDetails from '../utils/get-service-details.js';
import '../styles/info-service.css';
import Footer from '../templates/Footer.js';

async function infoService(API, USER) {
  // header
  Header(USER);
  // datos = getService()
  //sacar service id de la url
  const serviceId = window.location.pathname.split('/')[2];
  console.log(window.location.pathname.split('/')[2]);
  var datos = await getServiceDetails(API, serviceId);
  console.log(datos);
  // crear el section con clases
  const section = document.createElement('section');
  section.className = 'info-service';

  const galleryDiv = document.createElement('div');
  galleryDiv.className = 'info-service__gallery';

  // Detalles del servicio
  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'info-service__details';

  const detailsInnerDiv = document.createElement('div');

  // Header de los detalles
  const headerDiv = document.createElement('div');
  headerDiv.className = 'info-service__details__header';

  const titleDiv = document.createElement('div');
  titleDiv.className = 'info-service__details__header__title';

  const titleH2 = document.createElement('h2');
  titleH2.className = 'info-service__details__header__title';
  titleH2.textContent = datos.name;

  const locationP = document.createElement('p');
  locationP.className = 'info-service__details__header__title';
  locationP.textContent = datos.location;

  titleDiv.appendChild(titleH2);
  titleDiv.appendChild(locationP);

  const ratingDiv = document.createElement('div');
  ratingDiv.className = 'info-service__details__header__rating';

  const ratingP = document.createElement('p');
  ratingP.className = 'info-service__details__header__rating';
  ratingP.textContent = '★4.5';

  ratingDiv.appendChild(ratingP);

  headerDiv.appendChild(titleDiv);
  headerDiv.appendChild(ratingDiv);

  // Cuerpo de los detalles
  const bodyDiv = document.createElement('div');
  bodyDiv.className = 'info-service__details__body';

  const bodyP = document.createElement('p');
  bodyP.className = 'info-service__details__body';
  bodyP.textContent = datos.description;

  bodyDiv.appendChild(bodyP);

  detailsInnerDiv.appendChild(headerDiv);
  detailsInnerDiv.appendChild(bodyDiv);

  // Tarjeta de precio
  const priceCardDiv = document.createElement('div');
  priceCardDiv.className = 'info-service__details__price-card';

  const priceP = document.createElement('p');
  priceP.textContent = `$${datos.price} por persona`;

  const button = document.createElement('button');
  button.textContent = 'Agregar a un evento';

  const span = document.createElement('span');
  button.appendChild(span);

  const eventsUl = document.createElement('ul');
  eventsUl.className = 'info-service__details__price-card__events inactive';

  const event1Li = document.createElement('li');
  event1Li.textContent = 'Mi cumpleaños';

  const event2Li = document.createElement('li');
  const event2Span = document.createElement('span');
  event2Li.appendChild(event2Span);
  event2Li.appendChild(document.createTextNode('Crear evento'));

  eventsUl.appendChild(event1Li);
  eventsUl.appendChild(event2Li);

  priceCardDiv.appendChild(priceP);
  priceCardDiv.appendChild(button);
  priceCardDiv.appendChild(eventsUl);

  // Agregar todos los elementos al contenedor principal
  detailsDiv.appendChild(detailsInnerDiv);
  detailsDiv.appendChild(priceCardDiv);
  section.appendChild(galleryDiv);
  section.appendChild(detailsDiv);

  // gallery(datos.images)
  const images = datos.images;
  images.forEach((src) => {
    const img = document.createElement('img');
    img.className = 'info-service__gallery__img';
    img.src = API + '/' + src.url;
    img.alt = '';
    galleryDiv.appendChild(img);
  });

  // details(datos
  // appendChild #main
  document.querySelector('#app').appendChild(section);
}

export default infoService;
