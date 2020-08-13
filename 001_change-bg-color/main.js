/** VERSION 1: just change the background color */

// document.querySelector('input[type=button]').onclick = () => {
//   //create array of colors to pick from
//   let availableColors = ['green', 'darkslateblue', 'darkslategrey', 'rebeccapurple', 'darkcyan', 'darkblue', 'darkolivegreen', 'darkred', 'navy', 'darkmagenta'];
//   //get random integer between 0 and the total number of colors in the array
//   let randomNr = Math.floor(Math.random() * availableColors.length);
//   //use the random number to pick a color from the array
//   document.body.style.background = availableColors[randomNr];
//   //change the text color to make it more readable on dark colors
//   document.querySelector('#click-on-me').style.color = 'white';
// }

/**VERSION 2: change the background color and change the text color accordingly
 * so that it remains readable*/

document.querySelector('input[type=button]').onclick = () => {
  //create two arrays of colors to pick from
  let lightColors = ['lightCoral', 'lightBlue', 'orange', 'lightyellow', 'lightgreen', 'lightskyblue'];
  let darkColors = ['green', 'darkslateblue', 'darkslategrey', 'rebeccapurple', 'darkcyan', 'darkblue', 'darkolivegreen', 'darkred', 'navy', 'darkmagenta'];
  //get a random number by which to pick one of the two arrays
  let lightnessPicker = Math.random();
  if (lightnessPicker > 0.5) {
    //change background color
    changeBgColor(lightColors)
    //change the text color to black to make it more readable on light colors
    document.querySelector('#click-on-me').style.color = 'black';
  } else {
    changeBgColor(darkColors)
    //change the text color to white to make it more readable on dark colors
    document.querySelector('#click-on-me').style.color = 'white';
  }
}

function changeBgColor(array) {
  //get random integer between 0 and the total number of colors in the array
  let randomNr = Math.floor(Math.random() * array.length);
  //use the random number to pick a color from the array
  document.body.style.background = array[randomNr];
}