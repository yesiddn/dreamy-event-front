import '../../styles/user-Information.css'


function UserInformation() {

    const inputs = [
        {
          id: 'name',
          type: 'text',
          name: 'name',
          placeholder: 'Nombre',
          errorMesage: 'El nombre debe tener al menos 3 caracteres.',
          validate: false,
          minLength: 3,
        },
        {
          id: 'lastname',
          type: 'text',
          name: 'lastname',
          placeholder: 'Apellido',
          errorMesage: 'El apellido debe tener al menos 3 caracteres.',
          validate: false,
          minLength: 3,
        },
        {
          id: 'email',
          type: 'email',
          name: 'email',
          placeholder: 'Correo',
          errorMesage: 'El correo debe tener un formato válido.',
          validate: false,
          minLength: 3,
        },
        {
          id: 'password',
          type: 'password',
          name: 'password',
          placeholder: 'Contraseña',
          errorMesage: 'La contraseña debe tener al menos 8 caracteres.',
          validate: false,
          minLength: 8,
        },
        {
          id: 'phone',
          type: 'number',
          name: 'phone',
          placeholder: 'Teléfono',
          errorMesage: 'El teléfono debe tener 10 caracteres.',
          validate: false,
        },
        {
          id: 'city',
          type: 'text',
          name: 'city',
          placeholder: 'Ciudad',
          errorMesage: 'La ciudad debe tener al menos 3 caracteres.',
          validate: false,
          minLength: 3,
        },
        {
          id: 'country',
          type: 'text',
          name: 'country',
          placeholder: 'País',
          errorMesage: 'El país debe tener al menos 3 caracteres.',
          validate: false,
          minLength: 3,
        },
        {
          id: 'image',
          type: 'file',
          name: 'image',
          placeholder: 'Imagenes',
          accept: 'image/*',
          errorMesage: 'Seleccione un archivo válido.',
          validate: false,
        },
      ];




}

export default UserInformation;