const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input', function () {
  const name = inputEl.value;

  if (name === '' || name === ' ' || name === '  ' || name === '   ') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = name;
  }
});
