Class Palette {
  constructor(id) {
    this.colors: [];
    this.id: id;
  }

  replaceColor() {

  }

  lockColor() {
    if (!this.locked) {
      this.locked = true;
    }
    //only replaces unlocked colors
  }
}
