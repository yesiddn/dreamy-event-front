export default function validateForm(inputs) {
  return inputs.every((input) => input.validate);
}