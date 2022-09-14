var newPaletteButton = document.querySelector('.buttons_new-palette')
// Golbal Variables
var newPalette = new Palette


window.addEventListener('load', generateNewPalette);
newPaletteButton.addEventListener('click', generateNewPalette);


function generateNewPalette() {
  newPalette.replaceColor()
}
