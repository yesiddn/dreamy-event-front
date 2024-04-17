import '../styles/form-section.css';
import CreateUserForm from './CreateUserForm.js';
import saveUser from '../utils/save-user.js';

export default async function CreateUserSection(API){
const section = document.createElement('section');
section.classList.add('form-section');
section.id = 'login-section';

const divContainer = document.createElement('div');
divContainer.classList.add('form__container');
section.appendChild(divContainer);

const divSquare = document.createElement('div');
divSquare.setAttribute('class', 'square');
divContainer.appendChild(divSquare);

const h2 = document.createElement('h2');
h2.innerHTML = 'Bienvenido a <span class="primary">Dreamy Event</span>';
divContainer.appendChild(h2);

const createUser = CreateUserForm();
divContainer.appendChild(createUser);

createUser.addEventListener('submit', async (event) => {
    event.preventDefault();

const formData = new FormData(createUser);
const userData = {
    email: formData.get('email'),
    password: formData.get('pass')
}

const userDataString = JSON.stringify(userData);

try {
    await saveUser(API, userDataString);
    console.log('Usuario registrado');
} catch (error) {
    console.log('Error al registrar usuario: ', error);
}
});


document.querySelector('#app').appendChild(section);

}