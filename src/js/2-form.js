const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', handelInput);
function handelInput(event) {
  event.preventDefault();

  const name = event.target.name;
  const value = event.target.value.trim();

  formData[name] = value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}


form.addEventListener('submit', handelSubmit);
function handelSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  form.reset();
}
