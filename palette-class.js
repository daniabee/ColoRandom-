class Palette {
  constructor(colorPalette) {
    this.colors = colorPalette || [];
    this.id = Date.now();
  }

  replaceColor() {
    this.colors = [];
    currentPalette.forEach((colorBlock) => {
      var newColor = new Color();
      if (colorBlock.classList.contains("unlocked")) {
        colorBlock.style.backgroundColor = `${newColor.hex}`;
      } else if (colorBlock.classList.contains("locked")) {
        newColor.hex = colorBlock.style.backgroundColor;
      }
      this.colors.push(newColor);
    });
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
