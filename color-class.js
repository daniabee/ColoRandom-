possibleHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

class Color {
  constructor() {
    this.hex = this.getNewHex();
    this.locked = false;
  }

  getNewHex() {
    var hex = '';
    for (var i = 0; i < 6; i++ ) {
      var index = getRandomIndex(possibleHex);
      hex += `${possibleHex[index]}`;
    }
    return hex
  }
}
