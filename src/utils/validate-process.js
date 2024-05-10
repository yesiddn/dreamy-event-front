import validateForm from "./validate-form";
import validateInputData from "./validate-input-data";

export default function validateProcess({ inputs, input, inputElement, spanError, saveBtn }) {
  validateInputData(inputElement, spanError)
    ? (input.validate = true)
    : (input.validate = false);

  validateForm(inputs) ? (saveBtn.disabled = false) : (saveBtn.disabled = true);
}