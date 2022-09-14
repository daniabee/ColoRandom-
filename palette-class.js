class Palette {
  constructor() {
    this.colors = [];
    this.id = Date.now();

  }

  replaceColor(color) {
    this.colors.length = 0;
    var unlockedColors = document.querySelectorAll('.unlocked');
    var lockedColors = document.querySelectorAll('.locked');
    for (var i = 0; i < unlockedColors.length; i++) {
      var newColor = new Color();
        unlockedColors[i].style.backgroundColor = `#${newColor.hex}`
        this.colors.push(newColor);
    }
  }

  lockColor(selectedColor) {
    this.colors[selectedColor].locked = true;
  }

  unlockColor(selectedColor) {
    this.colors[selectedColor].locked = false;
  }
}
