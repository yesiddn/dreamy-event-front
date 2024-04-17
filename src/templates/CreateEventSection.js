import '../styles/form-section.css'
import NewEventForm from "./CreateEventForm";
import saveEvents from '../utils/save-event';
import Alert from './Alert.js';

export default async function CreateEventSection(API){
const formSection = document.createElement('section');
formSection.classList.add('form-section');

const formContainer = document.createElement('div');
formContainer.classList.add('form__container');
formSection.appendChild(formContainer);

const h2 = document.createElement('h2');
h2.innerHTML = 'Crear <span class="primary">Evento</span>';
formContainer.appendChild(h2);

const square = document.createElement('div');
square.classList.add('square');
formContainer.appendChild(square);

const createEvent = NewEventForm();
formContainer.appendChild(createEvent);

formContainer.addEventListener('submit', async (event) =>{
    event.preventDefault();

    const formData = new FormData(createEvent);
    const eventData = {
        name: formData.get('event-name'),
        date: new Date(formData.get('event-date')).toISOString(),
        address: formData.get('event-address'),
        city: formData.get('event-city'),
        country: formData.get('event-country')
    };

    const eventDataString = JSON.stringify(eventData);

    try {
        const response = await saveEvents(API, eventDataString);

        if(!response){
            Alert('event-created-successfully', '/my-events');
        } else {
            Alert('event-error');
        }
       
    } catch (error) {
        console.log('Ocurrio un error al crear el evento: ', error);
        Alert('event-error');
    }

})
document.querySelector('#app').appendChild(formSection);

}