var newPaletteButton = document.querySelector('.buttons_new-palette')
var saveButton = document.querySelector('.buttons_save-palette');
var miniSavedPalettes = document.querySelector('.mini_palette');
// Golbal Variables
var newPalette = new Palette();
var savedPalettes = [];


window.addEventListener('load', generateNewPalette);
newPaletteButton.addEventListener('click', generateNewPalette);

saveButton.addEventListener('click', savePalette);

function generateNewPalette() {
  newPalette.replaceColor()
}

function savePalette() {
  // savedPalettes = [];
  for (var i = 0; i < newPalette.colors.length; i++) {
    savedPalettes.push(`#${newPalette.colors[i].hex}`);
  }
    miniSavedPalettes.innerHTML += `

    <section class="mini_palette">
        <section class="palettes_color" data-index="0">
          <section class="palettes_current mini locked" data-index="0"></section>
          <section class="palettes_hex-key" data-index="0">
          </section>
        </section>
          <section class="palettes_color" data-index="1">
          <section class="palettes_current mini locked" data-index="1"></section>
          <section class="palettes_hex-key" data-index="1">
        </section>
        </section>
        <section class="palettes_color" data-index="2">
          <section class="palettes_current mini locked" data-index="2"></section>
          <section class="palettes_hex-key" data-index="2">
          </section>
        </section>
          <section class="palettes_color" data-index="3">
          <section class="palettes_current mini locked" data-index="3"></section>
          <section class="palettes_hex-key" data-index="3">
        </section>
        </section>
          <section class="palettes_color" data-index="4">
          <section class="palettes_current mini locked" data-index="4"></section>
          <section class="palettes_hex-key" data-index="4">
          </section>
        </section>
    </section>
    `
    var currentPaletteMini = document.querySelectorAll('.mini');
    var hexCode = document.querySelectorAll('.hex-code');
    for (var i = 0; i < currentPaletteMini.length; i++) {
      currentPaletteMini[i].style.backgroundColor = `${savedPalettes[i]}`
    }

}
