
let testimonials = [
  {
    'image': 'https://pbs.twimg.com/profile_images/640666088271839233/OTKlt5pC.jpg',
    'name': 'Nelson',
    'quote': "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    'image': 'https://assets.community.lomography.com/09/fbcba8677229966396c367255f373254dd461c/256x256x1.jpg?auth=3a297f975a402675fd3d23f6f63674db7dfa1354',
    'name': 'Walt',
    'quote': "The way to get started is to quit talking and begin doing.",
  },
  {
    'image': 'https://pbs.twimg.com/profile_images/640687635946565632/5pRp2WLy_400x400.jpg',
    'name': 'Steve',
    'quote': "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  },
  {
    'image': 'https://pbs.twimg.com/profile_images/621140709245063168/nYJCkJF1.jpg',
    'name': 'Eleanor',
    'quote': "If life were predictable it would cease to be life, and be without flavor.",
  },
  {
    'image': 'https://pbs.twimg.com/profile_images/699978214840598528/gRfl-b1X_400x400.jpg',
    'name': 'Oprah',
    'quote': "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
]

let sliderCounter = 0;
// let sliderTimer = setInterval(moveForward, 1000);
document.querySelector('.btn-left').addEventListener('click', moveBackward);
document.querySelector('.btn-right').addEventListener('click', moveForward);

function moveForward() {
  if (sliderCounter < testimonials.length -1) {
    document.querySelector('.img').src = testimonials[sliderCounter].image;
    document.querySelector('.name').textContent = testimonials[sliderCounter].name;
    document.querySelector('.quote').textContent = testimonials[sliderCounter].quote;
    sliderCounter += 1;
  } else {
    document.querySelector('.img').src = testimonials[sliderCounter].image;
    sliderCounter = 0;
  }
}

function moveBackward() {
  if (sliderCounter > 0) {
    sliderCounter -= 1;
    document.querySelector('.img').src = testimonials[sliderCounter].image;
    document.querySelector('.name').textContent = testimonials[sliderCounter].name;
    document.querySelector('.quote').textContent = testimonials[sliderCounter].quote;
    console.log(testimonials[sliderCounter]);
  } else {
    document.querySelector('.img').src = testimonials[testimonials.length -1].image;
    sliderCounter = testimonials.length -1;
  }
}



