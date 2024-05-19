const cancelBtn = document.createElement('button');
cancelBtn.type = 'button';
cancelBtn.id = 'form-button';
cancelBtn.classList.add('cancel');
cancelBtn.textContent = 'Cancelar';

cancelBtn.addEventListener('click', () => {
  window.location.assign('/my-services');
});

export default cancelBtn;