document.querySelector('button').addEventListener('click', changeOutput);
document.getElementById('text-input').addEventListener('keyup', event => {
  if (event.key == 'Enter') {
    changeOutput();
  }
});

function changeOutput() {
  document.querySelector('.output').textContent = document.querySelector('#text-input').value;
  document.querySelector('#text-input').value = '';
}