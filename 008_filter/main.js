/* * * BUTTON FILTERS * * */

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    //hide all cards
    document.querySelectorAll('.card').forEach(card => card.classList.add('hidden'));
    //depending on which button was clicked, reveal the relevant cards
    let btnType = e.target.dataset.filter;
    if (btnType == 'blue') {
      revealCards('blue')
    } else if (btnType == 'green') {
      revealCards('green')
    } else if (btnType == 'red') {
      revealCards('red')
    } else {
      document.querySelectorAll('.card').forEach(card => card.classList.remove('hidden'));
    }
  })
});

function revealCards(type) {
  document.querySelectorAll('.card[data-card-type=' + type + ']').forEach(card => card.classList.remove('hidden'));
}

/* * * SEARCH * * */

//every time a key is pressed, hide all cards, evaluate and show only the ones matching the search
document.querySelector('input').addEventListener('keyup', () => {
  let userSearch = document.querySelector('input').value.toLowerCase();
  if (userSearch != '') {
    document.querySelectorAll('.card').forEach(card => {
      card.classList.add('hidden');
      let currentCardName = card.firstElementChild.textContent.toLowerCase();
      if (currentCardName.includes(userSearch)) {
      card.classList.remove('hidden');
      }
    });
  } else {
    document.querySelectorAll('.card').forEach(card => card.classList.remove('hidden'));
  }
})
