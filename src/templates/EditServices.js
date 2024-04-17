// import '../styles/edit-service.css';
export default async function editServiceForm(API) {
    const formSection = document.createElement('section');
    formSection.classList.add('form-section');

    const formContainer = document.createElement('div');
    formContainer.classList.add('form__container');

    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Editar ';
    const primarySpan = document.createElement('span');
    primarySpan.classList.add('primary');
    primarySpan.textContent = 'servicio';
    formTitle.appendChild(primarySpan);
    formContainer.appendChild(formTitle);

    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    formContainer.appendChild(squareDiv);

    const form = document.createElement('form');
    form.classList.add('form');
    form.id = 'form';
    form.method = 'post';

    const formElements = [
        { labelFor: 'name-service', labelText: 'Nombre Servicio:', inputType: 'text', inputName: 'name-service', placeholder: 'Nombre Servicio', onkeyup: "validateInputData('name-service')" },
        { labelFor: 'description-service', labelText: 'Descripción:', inputType: 'textarea', inputName: 'description-service', cols: '3', rows: '5' },
        { labelFor: 'price-service', labelText: 'Precio:', inputType: 'number', inputName: 'price-service', placeholder: 'Precio', onkeyup: "validateInputData('price-service')" },
        { labelFor: 'location-service', labelText: 'Ubicación:', inputType: 'text', inputName: 'location-service', placeholder: 'Ubicación', onkeyup: "validateInputData('location-service')" },
        { labelFor: 'city-service', labelText: 'Ciudad:', inputType: 'text', inputName: 'city-service', placeholder: 'Ciudad', onkeyup: "validateInputData('city-service')" },
        { labelFor: 'country-service', labelText: 'País:', inputType: 'text', inputName: 'country-service', placeholder: 'País', onkeyup: "validateInputData('country-service')" },
        { labelFor: 'peopleAmount-service', labelText: 'Cantidad de personas:', inputType: 'number', inputName: 'peopleAmount-service', placeholder: 'Cantidad de personas', onkeyup: "validateInputData('peopleAmount-service')" },
        { labelFor: 'characteristics-service', labelText: 'Características:', inputType: 'textarea', inputName: 'characteristics-service', cols: '3', rows: '5', onkeyup: "validateInputData('characteristics-service')" },
        { labelFor: 'pictures-service-files', labelText: 'Sube una o varias imagenes:', inputType: 'file', inputName: 'pictures-service-files', multiple: 'multiple' },
        { labelFor: 'type-service', labelText: 'Tipo de servicio:', inputType: 'select', inputName: 'type-service', onchange: "validateInputData('type-service')" }
    ];

    formElements.forEach(element => {
        const label = document.createElement('label');
        label.htmlFor = element.labelFor;
        label.classList.add('form__input');
        label.textContent = element.labelText;

        if (element.inputType === 'select') {
            const select = document.createElement('select');
            select.name = element.inputName;
            select.id = element.labelFor;
            select.onchange = () => eval(element.onchange);

            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'Seleccione un tipo de servicio';
            option.hidden = true;
            select.appendChild(option);

            for (let i = 1; i <= 8; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = getServiceTypeName(i);
                select.appendChild(option);
            }

            label.appendChild(select);
        } else {
            const input = document.createElement('input');
            input.type = element.inputType;
            input.name = element.inputName;
            input.placeholder = element.placeholder;
            if (element.inputType === 'textarea') {
                input.cols = element.cols;
                input.rows = element.rows;
            }
            if (element.onkeyup) {
                input.onkeyup = () => eval(element.onkeyup);
            }
            if (element.multiple) {
                input.multiple = true;
            }

            label.appendChild(input);
        }

        const errorMessage = document.createElement('span');
        errorMessage.classList.add('inactive');
        errorMessage.textContent = 'Ingrese un valor válido.';
        label.appendChild(errorMessage);

        form.appendChild(label);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'service-form-button';
    submitButton.textContent = 'Editar';

    form.appendChild(submitButton);

    formContainer.appendChild(form);
    formSection.appendChild(formContainer);

    document.querySelector('#app').appendChild(formSection);
}

function getServiceTypeName(id) {
    switch (id) {
        case 1:
            return 'Alojamiento';
        case 2:
            return 'Decoración';
        case 3:
            return 'Música';
        case 4:
            return 'Catering';
        case 5:
            return 'Comida';
        case 6:
            return 'Logística';
        case 7:
            return 'Audiovisual';
        case 8:
            return 'Marketing';
        default:
            return '';
    }
}
