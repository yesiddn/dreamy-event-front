export default function validateInputData(inputElement, spanError) {
  if (inputElement.type === 'file') {
    if (inputElement.files.length === 0) {
      inputElement.classList.add('is-invalid');
      spanError.classList.remove('inactive');
      return false;
    } else {
      inputElement.classList.remove('is-invalid');
      spanError.classList.add('inactive');
      return true;
    }
  }
  
  if (
    inputElement.value.trim() === '' ||
    inputElement.validity.typeMismatch === true ||
    (inputElement.type === 'number' && inputElement.value.length < inputElement.min.length) ||
    (inputElement.type === 'text' && inputElement.value.length < inputElement.minLength) ||
    (inputElement.type === 'password' && inputElement.value.length < inputElement.minLength)
  ) {
    inputElement.classList.add('is-invalid');

    // activate the invalid feedback
    spanError.classList.remove('inactive');

    return false;
  } else {
    inputElement.classList.remove('is-invalid');
    spanError.classList.add('inactive');
    return true;
  }
}
