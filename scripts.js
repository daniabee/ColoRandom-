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
    // ${savedPalettes[0].colors[0].hex}
    //for loop that puts in index from datamodel
    var saveThisPalette = new Palette(mainPalette.colors);
    savedPalettes.push(saveThisPalette);
    miniSavedPalettes.innerHTML += `

    <section class="mini_palette unlocked">
        <section class="palettes_color" data-index="0">
          <section class="palettes_current mini locked" style="background-color:#${mainPalette.colors[0].hex}";></section>
          <section class="palettes_hex-key" data-index="0">
          </section>
        </section>
          <section class="palettes_color" data-index="1">
          <section class="palettes_current mini locked" style="background-color:#${mainPalette.colors[1].hex}";></section>
          <section class="palettes_hex-key" data-index="1">
        </section>
        </section>
        <section class="palettes_color" data-index="2">
          <section class="palettes_current mini locked" style="background-color:#${mainPalette.colors[2].hex}";></section>
          <section class="palettes_hex-key" data-index="2">
          </section>
        </section>
          <section class="palettes_color" data-index="3">
          <section class="palettes_current mini locked" style="background-color:#${mainPalette.colors[3].hex}";></section>
          <section class="palettes_hex-key" data-index="3">
        </section>
        </section>
          <section class="palettes_color" data-index="4">
          <section class="palettes_current mini locked" style="background-color:#${mainPalette.colors[4].hex}";></section>
          <section class="palettes_hex-key" data-index="4">
          </section>
        </section>
    </section>
    `
}
