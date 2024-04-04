import '../styles/card.css';

export default function SCardService() {

  const SupplierCardService = document.createElement('a');
  SupplierCardService.href = 'service';
  SupplierCardService.classList.add('card');
  
  const cardButton = document.createElement('button');
  SupplierCardService.appendChild(cardButton);
  
  const cardImage = document.createElement('img');
  cardImage.src = 'ruta/a/imagen.jpg'; // Ruta de la imagen
  cardImage.alt = 'Nombre del servicio';
  SupplierCardService.appendChild(cardImage);
  
  const cardContent = document.createElement('div');
  cardContent.classList.add('card__content');
  SupplierCardService.appendChild(cardContent);
  
  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card__title');
  cardContent.appendChild(cardTitle);
  
  const title = document.createElement('h2');
  title.innerHTML = 'Nombre del servicio';
  cardTitle.appendChild(title);
  
  const rating = document.createElement('span');
  rating.innerHTML = '★4.5';
  cardTitle.appendChild(rating);
  
  const location = document.createElement('p');
  location.innerHTML = 'Ubicación: Ciudad, País'; // Cambiar Ciudad y País según corresponda
  cardContent.appendChild(location);
  
  const price = document.createElement('p');
  price.innerHTML = '$ Precio'; // Cambiar Precio por el valor correspondiente
  cardContent.appendChild(price);

  return SCardService;
}
