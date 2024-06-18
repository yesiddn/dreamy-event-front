import Header from '../templates/Header.js';
import getServiceDetails from '../utils/get-service-details.js';
import '../styles/info-service.css';
import getEvents from '../utils/get-events.js';
import saveEventSummary from '../utils/save-event-summary.js';
import Footer from '../templates/Footer.js';
import saveComment from '../utils/save-comment.js';
import getComment from '../utils/get-comment.js';
import Alert from '../templates/Alert.js';

async function infoService(API, USER) {
  // header
  Header(USER);
  // datos = getService()
  //sacar service id de la url
  const serviceId = window.location.pathname.split('/')[2];

  const datos = await getServiceDetails(API, serviceId);

  // obtener los datos de los comentarios
  const comments = await getComment(API, datos.serviceId);

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
  locationP.textContent = `${datos.address} | ${datos.city} - ${datos.country}`;

  titleDiv.appendChild(titleH2);
  titleDiv.appendChild(locationP);

  const ratingDiv = document.createElement('div');
  ratingDiv.className = 'info-service__details__header__rating';

  let totalQualifications = 0;
  let persons = 0;

  comments.forEach((datos) => {
    if (
      datos.qualification !== null &&
      typeof datos.qualification === 'number' &&
      !isNaN(datos.qualification)
    ) {
      totalQualifications += datos.qualification;
      persons++;
    }
  });

  let average = 0;
  if (persons > 0) {
    average = (totalQualifications / persons).toFixed(1);
  } else {
    average;
  }

  const ratingP = document.createElement('p');
  ratingP.className = 'info-service__details__header__rating';
  ratingP.textContent = `★${average}`;

  ratingDiv.appendChild(ratingP);

  headerDiv.appendChild(titleDiv);
  headerDiv.appendChild(ratingDiv);

  // Cuerpo de los detalles
  const bodyDiv = document.createElement('div');
  bodyDiv.className = 'info-service__details__body';

  const bodyP = document.createElement('p');
  bodyP.textContent = datos.description;

  bodyDiv.appendChild(bodyP);

  detailsInnerDiv.appendChild(headerDiv);
  detailsInnerDiv.appendChild(bodyDiv);

  // Tarjeta de precio
  const priceCardDiv = document.createElement('div');
  priceCardDiv.className = 'info-service__details__price-card';

  const priceP = document.createElement('p');
  priceP.textContent = `${datos.price.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  })}`;

  if (datos.typeService.type === 'Lugares') {
    priceP.textContent += ' por día';
  } else if (datos.typeService.type === 'Pastelería') {
    priceP.textContent += ' por pieza';
  } else if (datos.typeService.type === 'Transporte') {
    priceP.textContent += ' por persona';
  } else if (datos.typeService.type === 'Comida') {
    priceP.textContent += ' por plato';
  } else if (datos.typeService.type === 'Ambientación') {
    priceP.textContent += ' por hora';
  } else if (datos.typeService.type === 'Decoración') {
    priceP.textContent += ' por metro cuadrado';
  } else if (datos.typeService.type === 'Fotografía y video') {
    priceP.textContent += ' por hora';
  }

  const button = document.createElement('button');
  button.textContent = 'Agregar a un evento';
  button.addEventListener('click', () => {
    eventsUl.classList.toggle('inactive');
  });

  const span = document.createElement('span');
  button.appendChild(span);

  const eventsUl = document.createElement('ul');
  eventsUl.className = 'info-service__details__price-card__events inactive';

  if (USER) {
    const eventList = await getEvents(API, USER.customer.customerId);
    eventList.forEach((event) => {
      const eventLi = document.createElement('li');
      eventsUl.appendChild(eventLi);
      eventLi.addEventListener('click', async () => {
        event.eventSummary.push({
          service: datos,
        });
        const eventSummary = event;
        const response = await saveEventSummary(
          API,
          JSON.stringify(eventSummary)
        );

        if (response) {
          Alert('service-added-to-event', '/event-summary/' + response.eventId);
        }
      });

      eventLi.textContent = event.name;
    });

    const createEventA = document.createElement('a');
    const event2Span = document.createElement('span');
    createEventA.appendChild(event2Span);

    createEventA.href = '/new-event?serviceId=' + serviceId;
    createEventA.appendChild(document.createTextNode('Crear un evento'));

    eventsUl.appendChild(createEventA);
  } else {
    const login = document.createElement('a');
    const event2Span = document.createElement('span');
    login.appendChild(event2Span);

    login.href = '/log-in';
    login.appendChild(document.createTextNode('Inicia sesión o registrate'));

    eventsUl.appendChild(login);
  }

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

  // characteristics
  const characteristicsDiv = document.createElement('div');
  characteristicsDiv.className = 'info-service__characteristics';
  detailsInnerDiv.appendChild(characteristicsDiv);

  const characteristicsTitle = document.createElement('h3');
  characteristicsTitle.textContent = 'Características';
  characteristicsDiv.appendChild(characteristicsTitle);

  const characteristicsDetails = document.createElement('p');
  characteristicsDetails.textContent = datos.characteristics;
  characteristicsDiv.appendChild(characteristicsDetails);

  //seccion para crear un comentario
  const commentsSection = document.createElement('div');
  commentsSection.className = 'info-service__comments';
  section.appendChild(commentsSection);

  const ratingStarsDiv = document.createElement('div');
  ratingStarsDiv.className = 'rating-stars';
  ratingStarsDiv.innerHTML = `
    <span data-value="1">★</span>
    <span data-value="2">★</span>
    <span data-value="3">★</span>
    <span data-value="4">★</span>
    <span data-value="5">★</span>
  `;
  commentsSection.appendChild(ratingStarsDiv);

  let rating;

  ratingStarsDiv.addEventListener('click', function (event) {
    if (event.target.tagName === 'SPAN') {
      rating = event.target.getAttribute('data-value');
      setRating(rating);
    }
  });

  function setRating(rating) {
    const stars = ratingStarsDiv.querySelectorAll('span');
    stars.forEach((star) => {
      if (parseInt(star.getAttribute('data-value')) <= rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }

  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'info-service__comments__container';
  commentsSection.appendChild(commentsContainer);

  //formulario
  const commentForm = document.createElement('form');
  commentForm.className = 'info-service__comments__form';
  commentsContainer.appendChild(commentForm);

  const commentTextarea = document.createElement('textarea');
  commentTextarea.className = 'info-service__comments__form__textarea';
  commentTextarea.name = 'comment';
  commentTextarea.placeholder = 'Escribe tu comentario...';
  commentForm.appendChild(commentTextarea);

  commentTextarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });

  //boton
  const sendComment = document.createElement('button');
  sendComment.type = 'submit';
  sendComment.className = 'info-service__comments__form__submit';
  sendComment.textContent = 'Enviar comentario';
  commentForm.appendChild(sendComment);

  // guardar comentario y calificacion
  sendComment.addEventListener('click', async (event) => {
    event.preventDefault();

    //validar si el usuario esta logueado para poder realizar el comentario
    if (!USER) {
      Alert('user-not-login');
      return;
    }

    const commentsData = {
      comments: commentTextarea.value,
      qualification: rating,
      customer: USER.customer,
      service: datos,
    };

    if (commentsData.qualification >= 1 || commentsData.comments !== '') {
      const commentString = JSON.stringify(commentsData);

      try {
        const response = await saveComment(API, commentString);
      } catch (error) {
        console.log('Error: ', error);
      }
      window.location.reload();
    } else {
      Alert('empty-comment');
    }
  });

  //seccion para mostrar comentarios
  const sectionComments = document.createElement('div');
  sectionComments.classList.add('section-comments');
  section.appendChild(sectionComments);

  const message = document.createElement('h2');
  message.textContent = 'Opiniones del servicio ';
  sectionComments.appendChild(message);

  const commentsList = document.createElement('div');
  commentsList.classList.add('info-service__comments__list');
  sectionComments.appendChild(commentsList);

  // listar comentarios y calificación
  function renderComments(comments, commentsContainer) {
    commentsContainer.innerHTML = '';

    comments.forEach((datos) => {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('info-service__comment');

      const ratingDiv = document.createElement('div');
      ratingDiv.classList.add('info-service__comment__rating');
      ratingDiv.textContent = '★'.repeat(datos.qualification);
      commentDiv.appendChild(ratingDiv);

      const commentText = document.createElement('p');
      commentText.classList.add('info-service__comment__text');
      commentText.textContent = datos.comments;
      commentDiv.appendChild(commentText);

      const userDiv = document.createElement('div');
      userDiv.classList.add('info-service__comment__user');
      userDiv.textContent = datos.customer.name + ' ' + datos.customer.lastname;
      commentDiv.appendChild(userDiv);

      commentsContainer.appendChild(commentDiv);
    });
  }
  renderComments(comments, commentsList);

  document.querySelector('#app').appendChild(section);
}

export default infoService;
