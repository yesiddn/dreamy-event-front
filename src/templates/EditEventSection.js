import '../styles/form-section.css';
import editEventForm from './EditEventForm.js';
import getEventsById from '../utils/get-idEvent.js';
import editEvents from '../utils/edit-event.js';

export default async function EditEventSection(API, eventId) {
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

    if (eventId === null || eventId === undefined) {
        const eventIdIndex = window.location.href.lastIndexOf('/');
        eventId = window.location.href.substring(eventIdIndex + 1);
    }

    const eventDetail = await getEventsById(API, eventId);

    const editEvent = editEventForm(eventDetail);
    eventContainerE.appendChild(editEvent);

    editEvent.addEventListener('submit', async (event) =>{
        event.preventDefault();

        const updateInformation = {
            eventId: eventDetail.eventId,
            name: editEvent.elements['event-name'].value,
            date: editEvent.elements['event-date'].value,
            address: editEvent.elements['event-address'].value,
            city: editEvent.elements['event-city'].value,
            country: editEvent.elements['event-country'].value
        }

        const response = await editEvents(API, eventId, JSON.stringify(updateInformation));

        if (response) {
            console.log('Evento editado')
        }else{
            console.log('Error al editar el evento')
        }
    })


    document.querySelector('#app').appendChild(editEventSection);
}
