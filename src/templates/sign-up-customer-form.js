document.addEventListener("DOMContentLoaded", function() {

    const formSection = document.createElement('section');
    formSection.classList.add('form-section');
    formSection.id = 'signup-section';

    const formContainer = document.createElement('div');
    formContainer.classList.add('form__container');

    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Registrarse';

    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');

    const form = document.createElement('form');
    form.classList.add('form');
    form.id = 'form';

// Función para validar la entrada de datos
    function validateInputData(inputId) {

    }

// Función para manejar el evento de click en el botón de registro
    function handleRegistration() {

    }

    const inputs = [
        { id: 'name', type: 'text', name: 'name', placeholder: 'Nombre', onkeyup: "validateInputData('name')" },
        { id: 'last-name', type: 'text', name: 'last-name', placeholder: 'Apellido', onkeyup: "validateInputData('last-name')" },
        { id: 'email', type: 'email', name: 'email', placeholder: 'Email', onkeyup: "validateInputData('email')" },
        { id: 'phone', type: 'number', name: 'phone', placeholder: 'Teléfono', onkeyup: "validateInputData('phone')" },
        { id: 'city', type: 'text', name: 'city', placeholder: 'Ciudad', onkeyup: "validateInputData('city')" },
        { id: 'country', type: 'text', name: 'country', placeholder: 'País', onkeyup: "validateInputData('country')" },
        { id: 'pass', type: 'password', name: 'pass', placeholder: 'Contraseña', onkeyup: "validateInputData('pass')" },
    ];


    inputs.forEach(input => {
        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.classList.add('form__input');

        const inputField = document.createElement('input');
        inputField.id = input.id;
        inputField.type = input.type;
        inputField.name = input.name;
        inputField.placeholder = input.placeholder;
        inputField.setAttribute('onkeyup', input.onkeyup);

        const errorSpan = document.createElement('span');
        errorSpan.classList.add('inactive');
        errorSpan.textContent = 'Ingrese un valor válido.';

        label.appendChild(inputField);
        label.appendChild(errorSpan);
        form.appendChild(label);
    });


    const imgLabel = document.createElement('label');
    imgLabel.htmlFor = 'img';
    imgLabel.classList.add('form__input');
    imgLabel.textContent = 'Foto de perfil:';

    const imgInput = document.createElement('input');
    imgInput.id = 'img';
    imgInput.type = 'file';
    imgInput.name = 'img';
    imgInput.placeholder = 'Imagen';
    imgInput.setAttribute('onchange', "validateInputData('img')");
    imgInput.setAttribute('accept', 'image/*');

    const imgErrorSpan = document.createElement('span');
    imgErrorSpan.classList.add('inactive');
    imgErrorSpan.textContent = 'Seleccione un tipo de archivo correcto.';

    imgLabel.appendChild(imgInput);
    imgLabel.appendChild(imgErrorSpan);
    form.appendChild(imgLabel);


    const registerButton = document.createElement('button');
    registerButton.type = 'button';
    registerButton.id = 'form-button';
    registerButton.textContent = 'Registrarse';
    registerButton.addEventListener('click', handleRegistration);


    form.appendChild(registerButton);
    formContainer.appendChild(formTitle);
    formContainer.appendChild(squareDiv);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    document.body.appendChild(formSection);

});