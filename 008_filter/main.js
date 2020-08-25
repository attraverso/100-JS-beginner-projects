/* * * BUTTON FILTERS * * */

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.card').forEach(card => {
      card.classList.add('hidden');
    });
    if (btn.classList.contains('btn-blue')) {
      revealCards('blue')
    } else if (btn.classList.contains('btn-green')) {
      revealCards('green')
    } else if (btn.classList.contains('btn-red')) {
      revealCards('red')
    } else {
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('hidden');
      });
    }
  })
});

function revealCards(type) {
  document.querySelectorAll('.card[data-card-type=' + type + ']').forEach(card => {
    card.classList.remove('hidden');
  });
}

/* * * SEARCH * * */

