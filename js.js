class Hamburger {
  constructor(size, additive) {
    this.size = size;
    this.additive = additive;
  }

  addToping(toping) {
    if (toping == 'spice') {
      this.toping = 'spice';
    } else if (toping == 'mayo') {
      this.toping = 'mayo';
    }
  }

  calculate() {
    let calories = 0;
    if (this.size == 'small') {
      calories += 20;
    } else if (this.size == 'big') {
      calories += 40;
    }

    if (this.additive == 'cheese') {
      calories += 20;
    } else if (this.additive == 'salad') {
      calories += 5;
    } else if (this.additive == 'potato') {
      calories += 10;
    }

    if (this.toping == 'mayo') {
      calories += 5;
    }

    return calories;
  }

  calculatePrice() {
    let price = 0;
    if (this.size == 'small') {
      price += 50;
    } else if (this.size == 'big') {
      price += 100;
    }

    if (this.additive == 'cheese') {
      price += 10;
    } else if (this.additive == 'salad') {
      price += 20;
    } else if (this.additive == 'potato') {
      price += 15;
    }

    if (this.toping == 'spice') {
      price += 15;
    } else if (this.toping == 'mayo') {
      price += 20;
    }

    return price;
  }
}

const hamb = new Hamburger('small', 'cheese');

console.log(hamb);

console.log(hamb.calculate());
console.log(hamb.calculatePrice());

hamb.addToping('mayo');

console.log(hamb);
console.log(hamb.calculate());
console.log(hamb.calculatePrice());
