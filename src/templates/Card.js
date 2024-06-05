import '../styles/card.css';
import favoriteServiceValidator from '../utils/favorite-services-validator.js';
import saveFavorites from '../utils/save-favorites';
import Alert from './Alert';

export default function CardService(API, serviceDetails, typecard = 'card-user') {


  const cardContainer = document.createElement('a');
  cardContainer.href = '/service/' + serviceDetails.serviceId;
  cardContainer.classList.add('card');

  // action buttons
  const menuOptions = MenuOptions(serviceDetails);
  cardContainer.appendChild(menuOptions);

  const cardButton = CardButton(API, serviceDetails, typecard, menuOptions);
  cardContainer.appendChild(cardButton);

  // card content
  const cardImage = document.createElement('img');
  cardImage.src = `http://localhost:3000/api/v1/${serviceDetails.images[0].url}`;
  cardImage.alt = serviceDetails.name;
  cardContainer.appendChild(cardImage);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card__content');
  cardContainer.appendChild(cardContent);

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card__title');
  cardContent.appendChild(cardTitle);

  const title = document.createElement('h2');
  title.innerHTML = serviceDetails.name;
  cardTitle.appendChild(title);

  const rating = document.createElement('span');
  rating.innerHTML = '★4.5';
  cardTitle.appendChild(rating);

  const location = document.createElement('p');
  location.innerHTML =
    'Ubicación: ' + serviceDetails.city + ', ' + serviceDetails.country;
  cardContent.appendChild(location);

  const price = document.createElement('p');
  price.innerHTML = `$ ${serviceDetails.price}`;
  cardContent.appendChild(price);

  return cardContainer;
}

function CardButton(API, serviceDetails, typecard, menuOptions) {

  const cardButton = document.createElement('button');
  cardButton.type = 'button';
  if (typecard == 'card-supplier') {
    cardButton.classList.add('icon-ellipsis');
    cardButton.classList.add('icon-ellipsis--bg-white')

    cardButton.addEventListener('click', (e) => {
      e.preventDefault();
      menuOptions.classList.toggle('inactive')
    });

  } else {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    
    if (favorites && favoriteServiceValidator(favorites, serviceDetails.serviceId)) {
      cardButton.classList.add('icon-heart');
      cardButton.classList.add('favorite--active');
    } else {
      cardButton.classList.add('icon-heart');
    }



    cardButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      let duplicateFavoriteStatus = false;
      let storageFServicelist = JSON.parse(localStorage.getItem('favorites'));
      let targetServiceId = serviceDetails.serviceId
      
      //favorite duplication checker
      if (storageFServicelist) {
        for (let item of storageFServicelist) {
          let StorageServiceId = item.serviceId;
          if (StorageServiceId === targetServiceId) {
            duplicateFavoriteStatus = true;
            break;
          }
        }
      }

      if (duplicateFavoriteStatus == false) {
        saveFavorites(API, serviceDetails).then(favorites => {
          cardButton.classList.add('favorite--active');
          Alert('favorite-added');
        }).catch(error => {
          console.error('Error al intentar obtener favoritos:', error);
        });
      } else {
        Alert('favorite-exists')
      }


    });
  }
  return cardButton;
}

function MenuOptions(serviceDetails) {
  // service options
  const options = document.createElement('div');
  options.classList.add('service__options');
  options.classList.add('inactive');

  // service options -> editar
  const serviceEdit = document.createElement('a');
  serviceEdit.href = `/edit-service/${serviceDetails.serviceId}`;
  serviceEdit.classList.add('service__options__edit');
  options.appendChild(serviceEdit);

  const serviceEditIcon = document.createElement('span');
  serviceEditIcon.classList.add('icon-pencil');

  serviceEdit.textContent = 'Editar';
  serviceEdit.appendChild(serviceEditIcon);

  // service options -> eliminar
  const serviceDelete = document.createElement('button');
  serviceDelete.setAttribute('type', 'button');
  serviceDelete.classList.add('service__options__delete');
  serviceDelete.textContent = 'Eliminar'
  options.appendChild(serviceDelete);

  const serviceDeleteIcon = document.createElement('span');
  serviceEditIcon.classList.add('icon-tash');
  serviceDelete.appendChild(serviceDeleteIcon);

  serviceDelete.addEventListener('click', async (e) => {
    e.preventDefault();
  });

  return options;
}
