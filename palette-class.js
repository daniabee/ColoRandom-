class Palette {
  constructor() {
    this.colors = [];
    this.id = Date.now();
    // this.locked = colors.locked;

  }

  replaceColor(color) {
    var unlockedColors = document.querySelectorAll('.unlocked');
    var lockedColors = document.querySelectorAll('.locked');
    for (var i = 0; i < unlockedColors.length; i++) {
      var newColor = new Color();
        unlockedColors[i].style.backgroundColor = `#${newColor.hex}`
        this.colors.push(newColor);
    }
  }

//   lockColor() {
//     if (!this.locked) {
//       this.locked = true;
//     }
//     //only replaces unlocked colors
//   }
//
//   unlockColor() {
//     if(this.locked) {
//       this.locked = false;
//       }
//     }
//
}
