// ---------------- practice: big scary birds

class bigScaryBird {

  constructor (props) {
    this.height = props.height
    this.flightless = true
    this.name = props.name
    this.isExtinct = props.isExtinct
    this.running_speed = props.running_speed
  }

  toString () {
    console.log(`Damn. Just look at that thing. It's called a ${this.name}. The brochure says it's ${this.height} tall. It can top ${this.running_speed} mph running!`);
  }

}

const kori_bustard = new bigScaryBird({
  height: "4' 11\"",
  name: "kori bustard",
  isExtinct: false,
  running_speed: 16
});

const great_bustard = new bigScaryBird({
  height: "3' 5\"",
  name: "Great bustard",
  isExtinct: false,
  running_speed: 11
});

const beaky_buzzard = new bigScaryBird({
  height: "3' 0\"",
  name: "Beaky Buzzard",
  isExtinct: true,
  running_speed: 3
});

kori_bustard.toString();
great_bustard.toString();
beaky_buzzard.toString();

// ---------------- practice: calculated properties

class Restaurant {
  constructor (props) {
      this.comboDiscount = props.discount
      this.menu = props.menu
  }

  get combo() {
    let comboPrice = this.menu.fries + this.menu.burger
    return `$${(comboPrice * this.comboDiscount).toFixed(2)}`
  }

  set combo(price) {
    this.comboPrice = price;
  }
}

let bobsBurgers = new Restaurant({
  discount: 0.85,
  menu: {
      fries: 1.29,
      burger: 3.69
  }
})

// Note the lack of parenthesis after comboPrice. It's a property. 
// console.log(bobsBurgers.comboPrice);

// It is also a read-only property since you did not define a setter. 
// So while the following code will not throw an error, it won't 
// change the output.
console.log(bobsBurgers)
console.log(bobsBurgers.combo)
// bobsBurgers.comboPrice(29.99);
bobsBurgers.combo = 29.99;
console.log(bobsBurgers.comboPrice);