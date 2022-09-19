// QuerySelectors
var newPaletteButton = document.querySelector('.buttons_new-palette')
var saveButton = document.querySelector('.buttons_save-palette');
var miniSavedPalettes = document.querySelector('.mini_palettes_container');
var currentPaletteMini = document.querySelector('.mini');
var colorBlocks = document.querySelectorAll('.palettes_current');
var openLocks = document.querySelectorAll('.open-lock');
var closedLocks = document.querySelectorAll('.closed-lock');
var miniPalettesArea = document.querySelector('.mini_palettes_container');
var currentPalette = document.querySelectorAll('.palettes_current');
var hexCode = document.querySelectorAll('.hex-code');

// global variables
var firstColor = colorBlocks[0];
var firstLock = openLocks[0];
var firstClosedLock = closedLocks[0];
var secondColor = colorBlocks[1];
var secondLock = openLocks[1];
var secondClosedLock = closedLocks[1];
var thirdColor = colorBlocks[2];
var thirdLock = openLocks[2];
var thirdClosedLock = closedLocks[2];
var fourthColor = colorBlocks[3];
var fourthLock = openLocks[3];
var fourthClosedLock = closedLocks[3];
var fifthColor = colorBlocks[4];
var fifthLock = openLocks[4];
var fifthClosedLock = closedLocks[4];
var mainPalette = new Palette();
var savedPalettes = [];

// Event listener section
window.addEventListener('load', generateNewPalette);
newPaletteButton.addEventListener('click', generateNewPalette);
saveButton.addEventListener('click', savePalette);
firstColor.addEventListener('click', lockColor1);
secondColor.addEventListener('click', lockColor2);
thirdColor.addEventListener('click', lockColor3);
fourthColor.addEventListener('click', lockColor4);
fifthColor.addEventListener('click', lockColor5);
miniPalettesArea.addEventListener('click',removeColorRow);

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
  miniSavedPalettes.innerHTML = '';

  for (var i = 0; i < savedPalettes.length; i++){
    var pallet = '';
    for (var j = 0; j < savedPalettes[i].colors.length; j++) {
      savedPalettes[i].lockColor(j);
      pallet +=  `
        <section class="palettes_color_mini" data-index="0">
          <section class="palettes_current mini locked" style="background-color:${savedPalettes[i].colors[j].hex}";></section>
        </section>
      `
    }
    miniSavedPalettes.innerHTML += `
      <section class="saved-palette-container">
        ${pallet}
        <img class= "mini_trashCan" src="./imgFolder/trash-can.png" alt="trash can icon" id="${savedPalettes[i].id}">
      </section>
    `
  }
};

function lockColor1() {
  if (!mainPalette.colors[0].locked) {
    makeHidden(firstLock);
    makeVisible(firstClosedLock);
    makeLocked(firstColor);
    mainPalette.lockColor(0);
  } else if
    (mainPalette.colors[0].locked) {
      makeVisible(firstLock);
      makeHidden(firstClosedLock);
      makeUnlocked(firstColor);
      mainPalette.unlockColor(0);
    }
}

function lockColor2() {
  if (!mainPalette.colors[1].locked) {
    makeHidden(secondLock);
    makeVisible(secondClosedLock);
    makeLocked(secondColor);
    mainPalette.lockColor(1);
  } else if
    (mainPalette.colors[1].locked) {
      makeVisible(secondLock);
      makeHidden(secondClosedLock);
      makeUnlocked(secondColor);
      mainPalette.unlockColor(1);
    }
}

function lockColor3() {
  if (!mainPalette.colors[2].locked) {
    makeHidden(thirdLock);
    makeVisible(thirdClosedLock);
    makeLocked(thirdColor);
    mainPalette.lockColor(2);
  } else if
    (mainPalette.colors[2].locked) {
      makeVisible(thirdLock);
      makeHidden(thirdClosedLock);
      makeUnlocked(thirdColor);
      mainPalette.unlockColor(2);
    }
}

function lockColor4() {
  if (!mainPalette.colors[3].locked) {
    makeHidden(fourthLock);
    makeVisible(fourthClosedLock);
    makeLocked(fourthColor);
    mainPalette.lockColor(3);
  } else if
    (mainPalette.colors[3].locked) {
      makeVisible(fourthLock);
      makeHidden(fourthClosedLock);
      makeUnlocked(fourthColor);
      mainPalette.unlockColor(3);
    }
}

function lockColor5() {
  if (!mainPalette.colors[4].locked) {
    makeHidden(fifthLock);
    makeVisible(fifthClosedLock);
    makeLocked(fifthColor);
    mainPalette.lockColor(4)
  } else if
    (mainPalette.colors[4].locked) {
      makeVisible(fifthLock);
      makeHidden(fifthClosedLock);
      makeUnlocked(fifthColor);
      mainPalette.unlockColor(4);
    }
}

generateNewPalette();

function makeHidden(elementHidden) {
  elementHidden.classList.add('hidden');
}

function makeVisible(elementVisible) {
  elementVisible.classList.remove('hidden');
}

function makeLocked(elementLock) {
  elementLock.classList.remove('unlocked');
  elementLock.classList.add('locked');
}

function makeUnlocked(elementLock) {
  elementLock.classList.add('unlocked');
  elementLock.classList.remove('locked');
}

function removeColorRow(event) {
   console.log(event);
   if(event.target.classList.contains('mini_trashCan')) {
     for(var i = 0; i < savedPalettes.length; i++) {
       if(savedPalettes[i].id === Number(event.target.id)) {
         savedPalettes.splice([i], 1);
       }
     }
   } displayPalette();
}
