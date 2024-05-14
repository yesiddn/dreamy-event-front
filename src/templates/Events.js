import '../styles/my-events.css'

export default function showEvents(eventDetail, typecard = 'card-user'){
 
    // event container
    const eventContainer = document.createElement('a');
    eventContainer.classList.add('event');
    eventContainer.href = '/events/' + eventDetail.eventId;
  
    // event header
    const eventHeader = document.createElement('div');
    eventHeader.classList.add('event__header');
    eventContainer.appendChild(eventHeader);

    const eventName = document.createElement('h3');
    eventName.innerHTML = eventDetail.name;
    eventHeader.appendChild(eventName);
  
    // event details
    const eventDetails = document.createElement('div');
    eventDetails.classList.add('event__header__details');
    eventHeader.appendChild(eventDetails);

    // event details -> cantidad de servicios
    const eventServices = document.createElement('p');
    eventServices.textContent = 'Cantidad de servicios: ';
    eventDetails.appendChild(eventServices);

    const spanServices = document.createElement('span');
    spanServices.classList.add('highlight-text');
    spanServices.textContent = eventDetail.amountServices;
    eventServices.appendChild(spanServices);
  
    // event details -> fecha
    const eventDate = document.createElement('p');
    eventDate.textContent = 'Fecha: ';
    eventDetails.appendChild(eventDate);

    const spanDate = document.createElement('span');
    spanDate.classList.add('highlight-text');
    const eventDateTime = new Date(eventDetail.date);
    const eventDateOnly = eventDateTime.toISOString().split('T')[0];
    spanDate.textContent = eventDateOnly;
    eventDate.appendChild(spanDate);

    // event price
    const eventPrice = document.createElement('div');
    eventPrice.classList.add('event__price');
    eventContainer.appendChild(eventPrice);

    const eventTotal = document.createElement('h4');
    eventTotal.textContent = 'Total: ';
    eventPrice.appendChild(eventTotal);

    const spanTotal = document.createElement('span');
    spanTotal.classList.add('highlight-text');
    


    // total con toLocaleString y sin decimales
    if (eventDetail.total === null) {
        eventDetail.total = 0;
    }
/*
    const total = eventDetails.total.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    });
*/
   // spanTotal.textContent = total;
    eventTotal.appendChild(spanTotal);


    // event options
    const eventOptions = document.createElement('div');
    eventOptions.classList.add('event__options');
    eventOptions.classList.add('inactive');
    eventContainer.appendChild(eventOptions);

    // event options -> editar
    const eventEdit = document.createElement('a');
    eventEdit.href = 'edit-event/' + eventDetail.eventId;
    eventEdit.classList.add('event__options__edit');
    eventOptions.appendChild(eventEdit);

    const eventEditIcon = document.createElement('span');
    eventEditIcon.classList.add('icon-pencil');

    eventEdit.textContent = 'Editar';
    eventEdit.appendChild(eventEditIcon);

    // event options -> eliminar
    const eventDelete = document.createElement('button');
    eventDelete.setAttribute('type', 'button');
    eventDelete.classList.add('event__options__delete');
    eventDelete.textContent = 'Eliminar';
    eventOptions.appendChild(eventDelete);

    const eventDeleteIcon = document.createElement('span');
    eventDeleteIcon.classList.add('icon-trash');
    eventDelete.appendChild(eventDeleteIcon);

    eventDelete.addEventListener('click', async (e) => {
      e.preventDefault();
    });
  
    // event options -> show options
    const eventOptionsShow = document.createElement('span');
    eventOptionsShow.classList.add('icon-ellipsis');
  
    eventOptionsShow.addEventListener('click', (e) => {
      e.preventDefault();
      eventOptions.classList.toggle('inactive');
      eventOptions.classList.toggle('active');
    });
  
    document.addEventListener('click', (e) => {
      if (e.target !== eventOptionsShow) {
        eventOptions.classList.remove('active');
        eventOptions.classList.add('inactive');
      }
    });
    eventContainer.appendChild(eventOptionsShow);

    return eventContainer;
    }
