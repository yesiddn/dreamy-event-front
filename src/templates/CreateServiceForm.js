import "../styles/createServiceForm.css";


export default function CreateServiceForm(){

    const form = document.createElement('form');
    form.classList.add('form');
    form.id = 'new-Service-Form';



    const labelName = document.createElement('label');
    labelName.htmlFor = 'name-service';
    labelName.classList.add('form__input');
    labelName.textContent = 'Nombre Servicio:';
    form.appendChild(labelName);

    const inputName = document.createElement('input');
    inputName.id = 'name-service';
    inputName.type = 'text';
    inputName.name = 'name-service';
    inputName.placeholder = 'Nombre Servicio';
    inputName.addEventListener('keyup', function() {validateInputData('name-service')});
    labelName.appendChild(inputName);

    const alertName = document.createElement('span');
    alertName.classList.add('inactive');
    alert.textContent = 'Ingrese un valor válido.';
    labelName.appendChild(alertName);



    const labelDescription = document.createElement('label');
    labelDescription.htmlFor = 'description-service';
    labelDescription.classList.add('form__input');
    labelDescription.textContent = 'Descripción:';
    form.appendChild(labelDescription);

    const textareaDescription = document.createElement('textarea');
    textareaDescription.classList.add('txtArea');
    textareaDescription.id = 'description-service';
    textareaDescription.name = 'description-service';
    textareaDescription.cols = '3';
    textareaDescription.rows = '5';
    labelDescription.appendChild(textareaDescription);

    const alertDescription = document.createElement('span');
    alertDescription.classList.add('inactive');
    alertDescription.textContent = 'Ingrese un valor válido.';
    labelDescription.appendChild(alertDescription);
    


    const labelPrice = document.createElement('label');
    labelPrice.htmlFor = 'price-service';
    labelPrice.classList.add('form__input');
    labelPrice.textContent = 'Precio:';
    form.appendChild(labelPrice);

    const inputPrice = document.createElement('input');
    inputPrice.id = 'price-service';
    inputPrice.type = 'number';
    inputPrice.name = 'price-service';
    inputPrice.placeholder = 'Precio';
    labelPrice.appendChild(inputPrice);



    const labelLocation = document.createElement('label');
    labelLocation.htmlFor = 'location-service';
    labelLocation.classList.add('form__input');
    labelLocation.textContent = 'Ubicación:';
    form.appendChild(labelLocation);

    const inputLocation = document.createElement('input');
    inputLocation.id = 'location-service';
    inputLocation.type = 'text';
    inputLocation.name = 'location-service';
    inputLocation.placeholder = 'Ubicación';
    labelLocation.appendChild(inputLocation);



    const labelCity = document.createElement('label');
    labelCity.htmlFor = 'city-service';
    labelCity.classList.add('form__input');
    labelCity.textContent = 'Ciudad:';
    form.appendChild(labelCity);

    const inputCity = document.createElement('input');
    inputCity.id = 'city-service';
    inputCity.type = 'text';
    inputCity.name = 'city-service';
    inputCity.placeholder = 'Ciudad';
    labelCity.appendChild(inputCity);



    const labelCountry = document.createElement('label');
    labelCountry.htmlFor = 'country-service';
    labelCountry.classList.add('form__input');
    labelCountry.textContent = 'País:';
    form.appendChild(labelCountry);

    const inputCountry = document.createElement('input');
    inputCountry.id = 'country-service';
    inputCountry.type = 'text';
    inputCountry.name = 'country-service';
    inputCountry.placeholder = 'País';
    labelCountry.appendChild(inputCountry);



    const labelPeopleAmount = document.createElement('label');
    labelPeopleAmount.htmlFor = 'peopleAmount-service';
    labelPeopleAmount.classList.add('form__input');
    labelPeopleAmount.textContent = 'Aforo:';
    form.appendChild(labelPeopleAmount);

    const inputPeopleAmount = document.createElement('input');
    inputPeopleAmount.id = 'peopleAmount-service';
    inputPeopleAmount.type = 'number';
    inputPeopleAmount.name = 'peopleAmount-service';
    inputPeopleAmount.placeholder = 'Aforo';
    labelPeopleAmount.appendChild(inputPeopleAmount);



    const labelCharacteristics = document.createElement('label');
    labelCharacteristics.htmlFor = 'characterisitcs-service';
    labelCharacteristics.classList.add('form__input');
    labelCharacteristics.textContent = 'Aforo:';
    form.appendChild(labelCharacteristics);

    const textareaCharacteristics = document.createElement('textarea');
    textareaCharacteristics.classList.add('txtArea');
    textareaCharacteristics.id = 'characterisitcs-service';
    textareaCharacteristics.name = 'characterisitcs-service';
    textareaCharacteristics.cols = '3';
    textareaCharacteristics.rows = '5';
    labelCharacteristics.appendChild(textareaCharacteristics);



    const labelFiles = document.createElement('label');
    labelFiles.htmlFor = 'pictures-service';
    labelFiles.classList.add('form__input');
    labelFiles.textContent = 'Sube una o varias imagenes:';
    form.appendChild(labelFiles);

    const inputFiles = document.createElement('input');
    inputFiles.id = 'file-service';
    inputFiles.type = 'file';
    inputFiles.setAttribute('multiple', true);
    labelFiles.appendChild(inputFiles);



    const labelTypeService = document.createElement('label');
    labelTypeService.htmlFor = 'type-service';
    labelTypeService.classList.add('form__input');
    labelTypeService.textContent = 'Tipo de Servicio:';
    form.appendChild(labelTypeService);

    const selectTypeService = document.createElement('select');
    selectTypeService.id = 'type-service';
    selectTypeService.name = 'type-service';
    labelTypeService.appendChild(selectTypeService);

    const optionValues = [
        { value: '1', text: 'Lugar' },
        { value: '2', text: 'Pastelería' },
        { value: '3', text: 'Transporte' },
        { value: '4', text: 'Comida' },
        { value: '5', text: 'Ambientación' },
        { value: '6', text: 'Decoración' },
        { value: '7', text: 'Fotografía y video' }
    ];

    optionValues.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        selectTypeService.appendChild(option);
    });



     const buttonService = document.createElement('button');
     buttonService.id = 'service-button';
     buttonService.type = 'submit'; 
     buttonService.textContent = 'Registrar';
     form.appendChild(buttonService);


     return form;
}