import '../styles/card.css';

export default function CardService(serviceDetails, typecard = 'card-user') {
  const cardContainer = document.createElement('a');
  cardContainer.href = 'service/' + serviceDetails.serviceId;
  cardContainer.classList.add('card');

  //boton favoritos
  const cardButton = CardButton(typecard);
  cardContainer.appendChild(cardButton);

  const menuOptions = MenuOptions();
  cardContainer.appendChild(menuOptions);

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

function CardButton(typecard) {
  const cardButton = document.createElement('button');
  cardButton.type = 'button';
  if (typecard == 'card-supplier') {
    cardButton.classList.add('icon-ellipsis');
    cardButton.classList.add('icon-ellipsis--bg-white')
    cardButton.addEventListener('click', (e) => {
      e.preventDefault();
      const menuOptions = document.querySelector('.service__options');
      menuOptions.classList.toggle('inactive')
    });
  } else {
    cardButton.classList.add('icon-heart');
    cardButton.addEventListener('click', () => {
      e.preventDefault();

    });
  }
  return cardButton;
}

function MenuOptions(){
  console.log('menu buton clicked');
  // service options
  const options = document.createElement('div');
  options.classList.add('service__options');
  options.classList.add('inactive');

  // service options -> editar
  const serviceEdit = document.createElement('a');
  serviceEdit.href = '/edit-service';
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


