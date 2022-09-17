var newPaletteButton = document.querySelector('.buttons_new-palette')
var saveButton = document.querySelector('.buttons_save-palette');
var miniSavedPalettes = document.querySelector('.mini_palettes_container');
var currentPaletteMini = document.querySelector('.mini');
var colorBlocks = document.querySelectorAll('.palettes_current');
var openLocks = document.querySelectorAll('.open-lock');
var closedLocks = document.querySelectorAll('.closed-lock');

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
// Golbal Variables
var mainPalette = new Palette();
var savedPalettes = [];

window.addEventListener('load', generateNewPalette);
newPaletteButton.addEventListener('click', generateNewPalette);
saveButton.addEventListener('click', savePalette);
firstColor.addEventListener('click', lockColor1);
secondColor.addEventListener('click', lockColor2);
thirdColor.addEventListener('click', lockColor3);
fourthColor.addEventListener('click', lockColor4);
fifthColor.addEventListener('click', lockColor5);

function generateNewPalette() {
  mainPalette.replaceColor()
}

function savePalette() {
  var saveThisPalette = new Palette(mainPalette.colors);
  savedPalettes.push(saveThisPalette);

  displayPalette();
}

function displayPalette() {
  // create a function seperating data model from dom below
  miniSavedPalettes.innerHTML = '';

  for (var i = 0; i < savedPalettes.length; i++){
    var pallet = '';
    for (var j = 0; j < savedPalettes[i].colors.length; j++) {

      savedPalettes[i].lockColor(j);

      pallet +=  `
        <section class="palettes_color_mini" data-index="0">
          <section class="palettes_current mini locked" style="background-color:#${savedPalettes[i].colors[j].hex}";></section>
        </section>
      `
    }
    miniSavedPalettes.innerHTML += `
      <section class="saved-palette-container">
        ${pallet}
        <img class= "mini_trashCan" src="./imgFolder/trash-can.png" alt="trash can icon" key=${savedPalettes[i].id}>
      </section>
    `
  }
  mainPalette.replaceColor();
};


  //add a value/key to trash can img
  // being created as part of original for loop 47
  // savepalet.i.// ID
  // put eventlisterner on big container
  // target (function )( function (event))
  //function will hit if( event.target.value.classList.
  // does even.t.target.key === date.object // instanceof// update data model (remove from array )// maybe splice method...
  // function renders// the dom with a function
  //does event.target.contains(mini_trashCan
  // queryselector (console.log() frequently)


function lockColor1() {
  if (!mainPalette.colors[0].locked) {
    makeHidden(firstLock);
    makeVisible(firstClosedLock);
    makeLocked(firstColor);
    mainPalette.lockColor(0)
  }
  // else if (firstColor.classList.contains('locked')) {
  //
  // }
}

function lockColor2() {
  if (!mainPalette.colors[1].locked) {
    makeHidden(secondLock);
    makeVisible(secondClosedLock);
    makeLocked(secondColor);
    mainPalette.lockColor(1)
  }
  generateNewPalette();
}

function lockColor3() {
  if (!mainPalette.colors[2].locked) {
    makeHidden(thirdLock);
    makeVisible(thirdClosedLock);
    makeLocked(thirdColor);
    mainPalette.lockColor(2)
  }
}

function lockColor4() {
  if (!mainPalette.colors[3].locked) {
    makeHidden(fourthLock);
    makeVisible(fourthClosedLock);
    makeLocked(fourthColor);
    mainPalette.lockColor(3)
  }
}

function lockColor5() {
  if (!mainPalette.colors[4].locked) {
    makeHidden(fifthLock);
    makeVisible(fifthClosedLock);
    makeLocked(fifthColor);
    mainPalette.lockColor(4)
  }
}

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
