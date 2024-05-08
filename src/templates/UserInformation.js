import '../styles/user-Information.css'







function UserInformation() {

    const formContainer = document.createElement('div');
    formContainer.classList.add('user-information-container');


    const title = document.createElement('h1');
    title.textContent = 'User Information';

    const form = document.createElement('form');
    form.classList.add('user-information-form');
    const row = document.createElement('row');

    formContainer.appendChild(title);
    document.body.appendChild(formContainer);



}

export default UserInformation;