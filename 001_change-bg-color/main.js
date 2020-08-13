document.getElementById('btnz').onclick = () => {
  let availableColors = ['green', 'darkslateblue', 'darkslategrey', 'rebeccapurple', 'darkcyan', 'darkblue', 'darkolivegreen', 'darkred', 'navy', 'darkmagenta'];
  let randomNr = Math.floor(Math.random() * availableColors.length);
  document.body.style.background = availableColors[randomNr];
  document.querySelector('#btnz').style.color = 'white';
}