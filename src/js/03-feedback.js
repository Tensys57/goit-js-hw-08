// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.
// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';
const LOCAL_KEY = 'feedback-form-state';
const ref = {
  formData: document.querySelector('.feedback-form'),
  inputValue: document.querySelector('input'),
  textareaValue: document.querySelector('textarea'),
  submitBtn: document.querySelector('button'),
};

function getDataValue() {
  const { email, message } = ref.formData.elements;
  const formDataValue = {
    email: email.value,
    message: message.value,
  };
  return formDataValue;
}

function inputHandler(event) {
  const formDataValue = getDataValue();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formDataValue));
}

const formDataRecovery = JSON.parse(localStorage.getItem(LOCAL_KEY));

if (formDataRecovery) {
  ref.inputValue.value = formDataRecovery.email;
  ref.textareaValue.textContent = formDataRecovery.message;
}

function submitHandler(ev) {
  ev.preventDefault();
  console.log(getDataValue());
  ref.inputValue.value = '';
  ref.textareaValue.value = '';
  localStorage.removeItem(LOCAL_KEY);
}

ref.formData.addEventListener('input', throttle(inputHandler, 500));
ref.submitBtn.addEventListener('click', submitHandler);
