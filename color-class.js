Class Color {
  constructor() {
    this.hex = this.getNewHex();
    this.locked = false;
    this.possibleHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  }

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  getNewHex() {
    var hex = '';
    for (var i = 0; i < 6; i++ ) {
      var index = this.getRandomIndex(this.possibleHex);
      hex += `${this.possibleHex[index]}`;
    }
    return hex
  }
}


module.exports = Color;
