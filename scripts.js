var newPaletteButton = document.querySelector('.buttons_new-palette')
var saveButton = document.querySelector('.buttons_save-palette');
var miniSavedPalettes = document.querySelector('.mini_palette');
var currentPaletteMini = document.querySelector('.mini');
// Golbal Variables
var mainPalette = new Palette();
var savedPalettes = [];

window.addEventListener('load', generateNewPalette);
newPaletteButton.addEventListener('click', generateNewPalette);
saveButton.addEventListener('click', savePalette);

function generateNewPalette() {
  mainPalette.replaceColor()
}

function savePalette() {

  var saveThisPalette = new Palette(mainPalette.colors);
  savedPalettes.push(saveThisPalette);

  miniSavedPalettes.innerHTML = '';

  for (var i = 0; i < savedPalettes.length; i++){
    for (var j = 0; j < savedPalettes[i].colors.length; j++) {

      savedPalettes[i].lockColor(j);

      miniSavedPalettes.innerHTML +=  `
        <section class="palettes_color" data-index="0">
        <section class="palettes_current mini locked" style="background-color:#${savedPalettes[i].colors[j].hex}";></section>
      `
    }
      miniSavedPalettes.innerHTML += `<img class= "mini_trashCan" src="./imgFolder/trash-can.png" alt="trash can icon">`
  }
}
