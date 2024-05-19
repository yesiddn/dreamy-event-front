export default function validateForm(inputs) {
  const modify = inputs.some((input) => {
    return input.modify;
  });

  if (modify) {
    return inputs.some((input) => input.validate);
  } else {
    return inputs.every((input) => {
      input.validate;
    });
  }
}
