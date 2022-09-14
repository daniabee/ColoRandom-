Class Palette {
  constructor(colors) {
    this.colors = [];
    this.id = Date.now();
    this.locked = colors.locked;

  }

  replaceColor(color) {
    console.log('WHATS UP?!!?')
    var prepColors = document.querySelectorAll('.unlocked');
    for (var i = 0; i < prepColor.length; i++) {
      var newColor = new Color();
        prepColors[i].style.backgroundColor = newColor.hex
    }
  }

  lockColor() {
    if (!this.locked) {
      this.locked = true;
    }
    //only replaces unlocked colors
  }

  unlockedColor() {
    if(this.locked) {
      this.locked = false;
      }
    }

}
