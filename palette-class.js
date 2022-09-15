class Palette {
  constructor() {
    this.colors = [];
    this.id = Date.now();

  }

  replaceColor() {
    this.colors.length = 0;
    var currentPalette = document.querySelectorAll('.palettes_current');
    var hexCode = document.querySelectorAll('.hex-code');
    for (var i = 0; i < currentPalette.length; i++) {
      var newColor = new Color ();
      if (currentPalette[i].classList.contains('unlocked')) {
        currentPalette[i].style.backgroundColor = `#${newColor.hex}`
      }
      else if (currentPalette[i].classList.contains('locked')) {
        newColor.hex = currentPalette[i].style.backgroundColor;
      }
      this.colors.push(newColor);
    }
    for (var i = 0; i < hexCode.length; i++) {
      hexCode[i].innerText = `#${this.colors[i].hex}`;
    }
  }

  // replaceColor(color) {
  //   this.colors.length = 0;
  //   var unlockedColors = document.querySelectorAll('.unlocked');
  //   var lockedColors = document.querySelectorAll('.locked');
  //   for (var i = 0; i < unlockedColors.length; i++) {
  //     var newColor = new Color();
  //       unlockedColors[i].style.backgroundColor = `#${newColor.hex}`
  //       this.colors.push(newColor);
  //   }
  // }

  lockColor(selectedColor) {
    this.colors[selectedColor].locked = true;
  }

  unlockColor(selectedColor) {
    this.colors[selectedColor].locked = false;
  }
}
