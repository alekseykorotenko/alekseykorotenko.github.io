// class Hamburger {
//   constructor(size, additive) {
//     this.size = size;
//     this.additive = additive;
//   }

//   addToping(toping) {
//     if (toping == 'spice') {
//       this.toping = 'spice';
//     } else if (toping == 'mayo') {
//       this.toping = 'mayo';
//     }
//   }

//   calculate() {
//     let calories = 0;
//     if (this.size == 'small') {
//       calories += 20;
//     } else if (this.size == 'big') {
//       calories += 40;
//     }

//     if (this.additive == 'cheese') {
//       calories += 20;
//     } else if (this.additive == 'salad') {
//       calories += 5;
//     } else if (this.additive == 'potato') {
//       calories += 10;
//     }

//     if (this.toping == 'mayo') {
//       calories += 5;
//     }

//     return calories;
//   }

//   calculatePrice() {
//     let price = 0;
//     if (this.size == 'small') {
//       price += 50;
//     } else if (this.size == 'big') {
//       price += 100;
//     }

//     if (this.additive == 'cheese') {
//       price += 10;
//     } else if (this.additive == 'salad') {
//       price += 20;
//     } else if (this.additive == 'potato') {
//       price += 15;
//     }

//     if (this.toping == 'spice') {
//       price += 15;
//     }
//     if (this.toping == 'mayo') {
//       price += 20;
//     }

//     return price;
//   }
// }

// const hamb = new Hamburger('small', 'cheese');

// console.log(hamb);

// console.log(hamb.calculate());
// console.log(hamb.calculatePrice());

// hamb.addToping('mayo');

// console.log(hamb);
// console.log(hamb.calculate());
// console.log(hamb.calculatePrice());

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toping = [];
  }

  static SIZE_SMALL = {
    calories: 20,
    price: 50
  };

  static SIZE_BIG = {
    calories: 40,
    price: 100
  };

  static STUFFING_CHEESE = {
    calories: 20,
    price: 10
  };

  static STUFFING_SALAD = {
    calories: 5,
    price: 20
  };

  static STUFFING_POTATO = {
    calories: 10,
    price: 15
  };

  static TOPPING_MAYO = {
    calories: 5,
    price: 20
  };

  static TOPPING_SAUCE = {
    calories: 0,
    price: 15
  };

  addTopping(value) {
    this.toping.push(value);
  }

  calculate() {
    let calories = this.size.calories + this.stuffing.calories;
    this.toping.forEach((el) => (calories += el.calories));
    return calories;
  }

  calculatePrice() {
    let price = this.size.price + this.stuffing.price;
    this.toping.forEach((el) => (price += el.price));
    return price;
  }
}

// Код нижче взято з лмс, для перевірки умов
// маленький гамбургер з начинкою з сиру
// const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// // добавка з майонезу
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// // запитаємо скільки там калорій
// console.log(`Calories:` + hamburger.calculate());

// // скільки коштує
// console.log(`Price:` + hamburger.calculatePrice());

// // я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// // А скільки тепер коштує?
// console.log(`Price with sauce: ` + hamburger.calculatePrice());

let size = '';
do {
  size =
    confirm('Бажаєш великий бургер?') == true
      ? Hamburger.SIZE_BIG
      : confirm('Бажаєш малий бургер?')
      ? Hamburger.SIZE_SMALL
      : null;
} while (!size);

let stuffing = '';

do {
  stuffing = confirm('Бажаєш начинку з сиром?')
    ? Hamburger.STUFFING_CHEESE
    : confirm('Бажаєш начинку з салатом?')
    ? Hamburger.STUFFING_SALAD
    : confirm('Бажаєш начинку з картоплею?')
    ? Hamburger.STUFFING_POTATO
    : null;
} while (!stuffing);

const hamburger = new Hamburger(size, stuffing);

document.write(`Calories: ` + hamburger.calculate() + '<br>');
document.write(`Price: ` + hamburger.calculatePrice());

const block = document.querySelector('.block');

block.innerHTML = `<button class="btn"> Додати топінг</button>`;

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let mayoTopping = confirm('Бажаєш додати майонез?')
    ? hamburger.addTopping(Hamburger.TOPPING_MAYO)
    : '';
  console.log(mayoTopping);
  if (mayoTopping != '') {
    let res = `
    <br> =================== <br>
    Оновлені дані: <br>
    Calories:  ${hamburger.calculate()} <br>
    Price: ${hamburger.calculatePrice()}<br>
    `;

    let paragraph = document.createElement('p');
    paragraph.innerHTML = res;

    document.body.appendChild(paragraph);
  }

  const sauceTopping = confirm('Бажаєш посипати приправою?')
    ? hamburger.addTopping(Hamburger.TOPPING_SAUCE)
    : '';

  console.log(sauceTopping);
  if (sauceTopping != '') {
    let res = `
      <br> =================== <br>
        Оновлені дані: <br>
        Calories:  ${hamburger.calculate()} <br>
        Price: ${hamburger.calculatePrice()}<br>
        `;

    let paragraph = document.createElement('p');
    paragraph.innerHTML = res;

    document.body.appendChild(paragraph);
  }
});

// const mayoTopping = confirm('Бажаєш додати майонез?')
//   ? hamburger.addTopping(Hamburger.TOPPING_MAYO)
//   : '';

// alert(`Calories:` + hamburger.calculate());
// alert(`Price:` + hamburger.calculatePrice());

// const sauceTopping = confirm('Бажаєш інший соус?')
//   ? hamburger.addTopping(Hamburger.TOPPING_SAUCE)
//   : '';

// alert(`Calories:` + hamburger.calculate());
// alert(`Price:` + hamburger.calculatePrice());
