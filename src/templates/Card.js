import '../styles/card.css';

export default function CardService(serviceDetails) {
  const cardContainer = document.createElement('a');
  cardContainer.href = 'service/' + serviceDetails.serviceId;
  cardContainer.classList.add('card');

  //boton favoritos
  const cardButton = document.createElement('button');
  cardContainer.appendChild(cardButton);

  

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
