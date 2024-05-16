export default function createImagePreview(image) {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('form__images__container');

  const img = document.createElement('img');
  img.src = `http://localhost:3000/api/v1/${image.url}`;
  img.classList.add('form__images__preview');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('form__image__delete');

  deleteBtn.addEventListener('click', () => {
    imageContainer.remove();
  });

  imageContainer.appendChild(img);
  imageContainer.appendChild(deleteBtn);

  return imageContainer;
}
