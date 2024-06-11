import '../styles/form-section.css';
import EditEventForm from './EditEventForm.js';
import getEventById from '../utils/get-idEvent.js';
import editEvents from '../utils/edit-event.js';

export default async function EditEventSection(API, USER) {
    const editEventSection = document.createElement('section');
    editEventSection.classList.add('form-section');

    const eventContainerE = document.createElement('div');
    eventContainerE.classList.add('form__container');
    editEventSection.appendChild(eventContainerE);

    const title = document.createElement('h2');
    title.innerHTML = 'Editar <span class="primary">Evento</span>';
    eventContainerE.appendChild(title);

    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    eventContainerE.appendChild(squareDiv);

    const eventId = window.location.pathname.split('/')[2];
    const eventDetail = await getEventById(API, eventId);

    const editEvent = await EditEventForm(API, eventDetail);
    eventContainerE.appendChild(editEvent);

    editEvent.addEventListener('submit', async (event) =>{
        event.preventDefault();

        const updateInformation = {
            eventId: eventDetail.eventId,
            name: editEvent.elements['event-name'].value,
            date: editEvent.elements['event-date'].value,
            address: editEvent.elements['event-address'].value,
            city: editEvent.elements['event-city'].value,
            country: editEvent.elements['event-country'].value,
            typeEvent: { id: editEvent.elements['event-type'].value },
            customer: USER.customer,
        }

        const response = await editEvents(API, JSON.stringify(updateInformation));

        if (response) {
            console.log('Evento editado')
        }else{
            console.log('Error al editar el evento')
        }
    })


    document.querySelector('#app').appendChild(editEventSection);
}
