var currentPalette = document.querySelectorAll('.palettes_current');
var hexCode = document.querySelectorAll('.hex-code');

class Palette {
  constructor(array) {
    this.colors = array || [];
    this.id = Date.now();

  }

  replaceColor() {
    this.colors= [];
    for (var i = 0; i < currentPalette.length; i++) {
      var newColor = new Color ();
      if (currentPalette[i].classList.contains('unlocked')) {
        currentPalette[i].style.backgroundColor = `${newColor.hex}`
      }
      else if (currentPalette[i].classList.contains('locked')) {
        newColor.hex = currentPalette[i].style.backgroundColor;
      }
      this.colors.push(newColor);
    }
    for (var i = 0; i < hexCode.length; i++) {
      hexCode[i].innerText = `${this.colors[i].hex}`;
    }
  }

  lockColor(selectedColor) {
    this.colors[selectedColor].locked = true;
  }

  unlockColor(selectedColor) {
    this.colors[selectedColor].locked = false;
  }
}
