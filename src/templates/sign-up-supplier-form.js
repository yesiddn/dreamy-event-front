const section = document.createElement('section');
section.classList.add('form-section');

const divContainer = document.createElement('div');
divContainer.classList.add('form__container');

const h2 = document.createElement('h2');
h2.innerHTML = 'Registrarse como <span class="primary">proveedor</span>';

const divSquare = document.createElement('div');
divSquare.classList.add('square');

const form = document.createElement('form');
form.classList.add('form');
form.id = 'form';


const labels = ['Nombre de proveedor', 'Email de contacto', 'Telefono de contacto', 'RUT', 'Ciudad', 'Pais'];
const inputTypes = ['text', 'email', 'number', 'number', 'text', 'text'];
const inputNames = ['name', 'email', 'phone', 'rut', 'city', 'country'];

labels.forEach((labelText, index) => {
    const label = document.createElement('label');
    label.setAttribute('for', inputNames[index]);
    label.classList.add('form__input');

    const input = document.createElement('input');
    input.setAttribute('id', inputNames[index]);
    input.setAttribute('type', inputTypes[index]);
    input.setAttribute('name', inputNames[index]);
    input.setAttribute('placeholder', labelText);


    const spanInactive = document.createElement('span');
    spanInactive.classList.add('inactive');
    spanInactive.innerHTML = 'Ingrese un valor valido.';

    label.appendChild(input);
    label.appendChild(spanInactive);

    form.appendChild(label);
});


const labelImg = document.createElement('label');
labelImg.setAttribute('for', 'img');
labelImg.classList.add('form__input');
labelImg.innerHTML = 'Foto de perfil:';

const inputImg = document.createElement('input');
inputImg.setAttribute('id', 'img');
inputImg.setAttribute('type', 'file');
inputImg.setAttribute('name', 'img');
inputImg.setAttribute('placeholder', 'Imagen');
inputImg.setAttribute('onchange', "validateInputData('img')");
inputImg.setAttribute('accept', 'image/*');

const spanImgInactive = document.createElement('span');
spanImgInactive.classList.add('inactive');
spanImgInactive.innerHTML = 'Seleccione un tipo de archivo correcto.';

labelImg.appendChild(inputImg);
labelImg.appendChild(spanImgInactive);

form.appendChild(labelImg);


const button = document.createElement('button');
button.setAttribute('type', 'button');
button.setAttribute('id', 'form-button');
button.innerHTML = 'Registrarse';


form.appendChild(button);
divContainer.appendChild(h2);
divContainer.appendChild(divSquare);
divContainer.appendChild(form);
section.appendChild(divContainer);
document.body.appendChild(section);