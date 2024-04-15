export default function validateInputData(input, spanError) {
  if (
    input.value.trim() === '' ||
    input.validity.typeMismatch === true ||
    (input.type === 'number' && input.value.length < 10) ||
    (input.type === 'text' && input.value.length < 3) ||
    (input.type === 'password' && input.value.length < 8)
  ) {
    input.classList.add('is-invalid');

    // activate the invalid feedback
    spanError.classList.remove('inactive');

    return false;
  } else {
    input.classList.remove('is-invalid');
    spanError.classList.add('inactive');
    return true;
  }
}
