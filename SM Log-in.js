const apple = document.getElementById('apple');
const google = document.getElementById('google');
const other = document.getElementById('others');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (apple.value === '' || apple.value == null) {
    messages.push('Apple ID required');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});
