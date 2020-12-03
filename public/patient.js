class Patient {
  // array that holds information of the patient
  attributes = [];

  constructor() {}

  // randomly generates patient attributes
  generate() {
    this.attributes[0] = 1000;
    for (var i = 1; i < 10; i++) {
      this.attributes.push(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10
    }
    var rand = Math.floor(Math.random()); // random number between 0 and 1 (exclusive)
    if (rand < 0.5) this.attributes.push(2);
    else this.attributes.push(4); // 2 for benign 4 for malignant
  }

  // i made up the diagnose procedure
  diagnose() {
    if (this.attributes[1] > 3 && this.attributes[5] > 2) {
      return true;
    } else return false;
  }
}
