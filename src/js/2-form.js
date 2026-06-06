const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    formData = JSON.parse(savedData);

    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('input', event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  formData = {
    email: '',
    message: '',
  };

  form.reset();
});