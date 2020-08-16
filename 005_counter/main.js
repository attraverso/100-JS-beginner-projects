document.querySelector('.button1').addEventListener('click', () => {
  addSubtract('minus');
})

document.querySelector('.button2').addEventListener('click', () => {
  addSubtract('plus');
})

function addSubtract(operator) {
  let currentNumber = parseInt(document.querySelector('.number').innerHTML);
  console.log(currentNumber);
  if (operator == 'minus') {
    let newNumber = currentNumber - 1;
    document.querySelector('.number').innerHTML = newNumber;
    updateColor(newNumber);
  } else if (operator == 'plus') {
    let newNumber = currentNumber + 1;
    document.querySelector('.number').innerHTML = newNumber;
    updateColor(newNumber);
  }
}

function updateColor(number) {
  if (number > 0) {
    document.querySelector('.number').style.color = 'green';
  } else if (number < 0) {
    document.querySelector('.number').style.color = 'red';
  } else {
    document.querySelector('.number').style.color = 'black';
  }
}