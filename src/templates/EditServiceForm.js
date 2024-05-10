import '../styles/form.css';
import saveFile from '../utils/save-file';
import saveLogin from '../utils/save-login';
import saveSupplier from '../utils/save-supplier';
import createForm from '../utils/create-form';

const inputs = [
  {
    id: 'name',
    type: 'text',
    name: 'name',
    label: 'Nombre del servicio',
    placeholder: 'Restaurante',
    errorMesage: 'El nombre no puede estar vacío.',
    validate: false,
  },
  {
    id: 'description',
    element: 'textarea',
    name: 'description',
    label: 'Description',
    placeholder: 'Gran variedad de platos y bebidas.',
    errorMesage: 'La descripción no puede estar vacía.',
    validate: false,
  },
  {
    id: 'location',
    type: 'text',
    name: 'location',
    label: 'Dirección del servicio o empresa',
    placeholder: 'Calle 123',
    errorMesage: 'La dirección no puede estar vacía.',
    validate: false,
  },

  {
    id: 'department',
    type: 'text',
    name: 'department',
    label: 'Departamento en el que se encuentra el servicio o empresa',
    placeholder: 'Boyacá',
    errorMesage: 'El departamento no puede estar vacío.',
    validate: false,
  },
  {
    id: 'city',
    type: 'text',
    name: 'city',
    label: 'Ciuadad en la que se encuentra el servicio o empresa',
    placeholder: 'Duitama',
    errorMesage: 'La ciudad no puede estar vacía.',
    validate: false,
  },
  {
    id: 'people-amount',
    type: 'number',
    name: 'peopleAmount',
    label: 'Aforo del servicio',
    placeholder: '10',
    errorMesage: 'El aforo no puede estar vacío.',
    validate: false,
  },
  {
    id: 'characteristics',
    element: 'textarea',
    name: 'characteristics',
    label: 'Características del servicio',
    placeholder: 'Platos a la carta, menú del día, bebidas, postres.',
    errorMesage: 'Las características no pueden estar vacías.',
    validate: false,
  },
  {
    id: 'images',
    type: 'file',
    name: 'images',
    label: 'Imágenes del servicio',
    accept: 'image/*',
    errorMesage: 'Seleccione un archivo válido.',
    validate: false,
  },
];

export default function EditServiceForm(API) {
  const form = createForm({
    API,
    inputs,
    buttons: ['save', 'cancel'],
    callback: handleRegistration,
  });

  return form;
}

async function handleRegistration(API, inputs) {
  const data = JSON.parse(localStorage.getItem('user'));
  data.supplier = {};

  for (let input of inputs) {
    const inputValue = document.getElementById(input.id).value;

    if (input.type === 'file') {
      const file = document.getElementById(input.id).files[0];
      const image = await saveImage(API, file);

      if (!image) return;

      data.supplier[input.name] = image.location;
    } else {
      data.supplier[input.name] = inputValue;
    }
  }

  const response = await saveSupplier(API, JSON.stringify(data));

  if (response) {
    saveLogin(response, 'supplier-created');
  }
}

function saveImage(API, image) {
  const formData = new FormData();
  formData.append('file', image);

  return saveFile(API, formData);
}
