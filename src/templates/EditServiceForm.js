import '../styles/form.css';
import saveFile from '../utils/save-file';
import createForm from '../utils/create-form';
import getServiceDetails from '../utils/get-service-details';
import updateService from '../utils/update-service';
import Alert from './Alert';

const inputs = [
  {
    id: 'images',
    type: 'file',
    name: 'images',
    label: 'Agregar una imagen al servicio',
    accept: 'image/*',
    multiple: true,
    errorMesage: 'Seleccione un archivo válido.',
    validate: false,
  },
  {
    id: 'name',
    type: 'text',
    name: 'name',
    label: 'Nombre del servicio',
    placeholder: 'Restaurante',
    errorMesage: 'El nombre no puede estar vacío.',
    validate: false,
    modify: false,
  },
  {
    id: 'description',
    element: 'textarea',
    name: 'description',
    label: 'Description',
    placeholder: 'Gran variedad de platos y bebidas.',
    errorMesage: 'La descripción no puede estar vacía.',
    validate: false,
    modify: false,
  },
  {
    id: 'price',
    type: 'number',
    name: 'price',
    label: 'Precio del servicio',
    placeholder: '100000',
    errorMesage: 'El precio no puede estar vacío.',
    validate: false,
    modify: false,
  },
  {
    id: 'address',
    type: 'text',
    name: 'address',
    label: 'Dirección del servicio o empresa',
    placeholder: 'Calle 123',
    errorMesage: 'La dirección no puede estar vacía.',
    validate: false,
    modify: false,
  },
  {
    id: 'country',
    type: 'text',
    name: 'country',
    label: 'El país en el que se encuentra el servicio o empresa',
    placeholder: 'Boyacá',
    errorMesage: 'El departamento no puede estar vacío.',
    validate: false,
    modify: false,
  },
  {
    id: 'city',
    type: 'text',
    name: 'city',
    label: 'Ciuadad en la que se encuentra el servicio o empresa',
    placeholder: 'Duitama',
    errorMesage: 'La ciudad no puede estar vacía.',
    validate: false,
    modify: false,
  },
  {
    id: 'amountPeople',
    type: 'number',
    name: 'amountPeople',
    label: 'Aforo del servicio',
    placeholder: '10',
    errorMesage: 'El aforo no puede estar vacío.',
    validate: false,
    modify: false,
  },
  {
    id: 'characteristics',
    element: 'textarea',
    name: 'characteristics',
    label: 'Características del servicio',
    placeholder: 'Platos a la carta, menú del día, bebidas, postres.',
    errorMesage: 'Las características no pueden estar vacías.',
    validate: false,
    modify: false,
  },
];

const imagesToUpload = [];

export default async function EditServiceForm(API) {
  const serviceId = window.location.pathname.split('/')[2];
  const serviceDetails = await getServiceDetails(API, serviceId);
  const form = createForm({
    API,
    inputs,
    serviceDetails,
    buttons: ['save', 'cancel'],
    imagesToUpload,
    callback: handleRegistration,
  });

  return form;
}

async function handleRegistration(API, serviceDetails, imagesToUpload) {
  imagesToUpload.forEach(async (image) => {
    const imageData = await saveImage(API, image);
    serviceDetails.images.push({ url: imageData.location });
  });

  const response = await updateService(API, JSON.stringify(serviceDetails));

  if (response) {
    Alert('service-update-success', '/my-services');
  }
}

function saveImage(API, image) {
  const formData = new FormData();
  formData.append('file', image);

  return saveFile(API, formData);
}
