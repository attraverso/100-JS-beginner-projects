let availableImgs = [
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80',
  'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
]

let sliderCounter = 0;
let sliderTimer = setInterval(moveForward, 1000);
document.querySelector('.btn-left').addEventListener('click', moveBackward);
document.querySelector('.btn-right').addEventListener('click', moveForward);
document.querySelector('.btn-start').addEventListener('click', () => sliderTimer = setInterval(moveForward, 1000));
document.querySelector('.btn-stop').addEventListener('click', () => clearInterval(sliderTimer));

function moveForward() {
  if (sliderCounter < availableImgs.length -1) {
    document.querySelector('.slider-img').src = availableImgs[sliderCounter + 1];
    sliderCounter += 1;
  } else {
    document.querySelector('.slider-img').src = availableImgs[0];
    sliderCounter = 0;
  }
}

function moveBackward() {
  if (sliderCounter > 0) {
    document.querySelector('.slider-img').src = availableImgs[sliderCounter - 1];
    sliderCounter -= 1;
  } else {
    document.querySelector('.slider-img').src = availableImgs[availableImgs.length -1];
    sliderCounter = availableImgs.length -1;
  }
}



