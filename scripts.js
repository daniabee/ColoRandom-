// QuerySelectors
var newPaletteButton = document.querySelector(".buttons-new-palette");
var saveButton = document.querySelector(".buttons-save-palette");
var miniSavedPalettes = document.querySelector(".mini-palettes-container");
var currentPaletteMini = document.querySelector(".mini");
var colorBlocks = document.querySelectorAll(".palettes-current");
var openLocks = document.querySelectorAll(".open-lock");
var closedLocks = document.querySelectorAll(".closed-lock");
var currentPalette = document.querySelectorAll(".palettes-current");
var palettesContainer = document.querySelector(".palettes");
var hexCode = document.querySelectorAll(".hex-code");

// global variables
var mainPalette = new Palette();
var savedPalettes = [];

// Event listener section
window.addEventListener("load", generateNewPalette);
newPaletteButton.addEventListener("click", generateNewPalette);
saveButton.addEventListener("click", savePalette);
palettesContainer.addEventListener("click", lockColor);
miniSavedPalettes.addEventListener("click", removeColorRow);

// functions below
function generateNewPalette() {
  mainPalette.replaceColor();
}

function savePalette() {
  var saveThisPalette = new Palette(mainPalette.colors);
  savedPalettes.push(saveThisPalette);
  displayPalette();
  generateNewPalette();
}

function displayPalette() {
  miniSavedPalettes.innerHTML = "";

  for (var i = 0; i < savedPalettes.length; i++) {
    var pallet = "";
    for (var j = 0; j < savedPalettes[i].colors.length; j++) {
      savedPalettes[i].lockColor(j);
      pallet += `
        <section class="palettes-color-mini" data-index="0">
          <section class="palettes-current mini locked" style="background-color:${savedPalettes[i].colors[j].hex}";></section>
        </section>
      `;
    }
    miniSavedPalettes.innerHTML += `
      <section class="saved-palette-container">
        ${pallet}
        <img class= "mini-trashCan" src="./imgFolder/trash-can.png" alt="trash can icon" id="${savedPalettes[i].id}">
      </section>
    `;
  }
}

function lockColor(event) {
  index = event.target.parentElement.dataset.indexNumber - 1;
  if (!mainPalette.colors[index].locked) {
    makeHidden(openLocks[index]);
    makeVisible(closedLocks[index]);
    makeLocked(colorBlocks[index]);
    mainPalette.lockColor(index);
  } else if (mainPalette.colors[index].locked) {
    makeVisible(openLocks[index]);
    makeHidden(closedLocks[index]);
    makeUnlocked(colorBlocks[index]);
    mainPalette.unlockColor(index);
  }
}

function makeHidden(elementHidden) {
  elementHidden.classList.add("hidden");
}

function makeVisible(elementVisible) {
  elementVisible.classList.remove("hidden");
}

function makeLocked(elementLock) {
  elementLock.classList.remove("unlocked");
  elementLock.classList.add("locked");
}

function makeUnlocked(elementLock) {
  elementLock.classList.add("unlocked");
  elementLock.classList.remove("locked");
}

function removeColorRow(event) {
  if (event.target.classList.contains("mini-trashCan")) {
    for (var i = 0; i < savedPalettes.length; i++) {
      if (savedPalettes[i].id === Number(event.target.id)) {
        savedPalettes.splice([i], 1);
      }
    }
  }
  displayPalette();
}
