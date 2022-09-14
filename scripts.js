var newPaletteButton = document.querySelector('.buttons_new-palette')
var saveButton = document.querySelector('.buttons_save-palette');
var miniSavedPalettes = document.querySelector('.mini_palette');
// Golbal Variables
var newPalette = new Palette
var savedPalettes = [];


window.addEventListener('load', generateNewPalette);
newPaletteButton.addEventListener('click', generateNewPalette);

saveButton.addEventListener('click', savePalette);

function generateNewPalette() {
  newPalette.replaceColor()
}

function savePalette() {
  savedPalettes.unshift(newPalette.colors);
  // miniSavedPalettes.innerHTML = ``;
  for (var i = 0; i < newPalette.colors.length; i++) {
    miniSavedPalettes.innerHTML += `

    <section class="palettes_color" data-index="0">
      <section class="palettes_current locked mini" data-index="0"></section>
      <section class="palettes_hex-key" data-index="0">
    </section>
    `
  }
  var miniBox = document.querySelectorAll('.mini');

  for (var i = 0; i < miniBox.length; i++) {
    miniBox[i].style.backgroundColor = `#${savedPalettes[0][i].hex}`
  }


  // box[i].style.backgroundColor = `#${savedPalettes[0][i]}`
  // unlockedColors[i].style.backgroundColor = `#${newColor.hex}`
}
