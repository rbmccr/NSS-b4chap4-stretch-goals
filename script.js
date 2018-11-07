/* STRETCH GOALS */

// 1. Allow a restaurant to define the items in its combo meal, based on
// items from the menu (i.e. this.menu.breadsticks), using a setter. 
// Then have your comboPrice getter use the combo property created by 
// the setter instead of the hard-coded menu items to calculate the cost.
// 2. Make sure that the value of the combo property is an array before setting it.

class Restaurant {

  constructor (props) {
      this.discount = props.discount;
      this.menu = props.menu;
  }

  // check if items is an array and set value of _combo (_ is needed to prevent recursive
  // call of setter with this.combo)
  set combo (items) {
    if (items.constructor === Array) {
      this._combo = items;
    } else {
      console.log("'items' is not an array.");
    }
  }

  get combo () {
    this.comboPrice = this._combo.reduce((total, next) => total + next) * this.discount;
    return console.log(`The combo price is ${this.comboPrice}`);
  }

}

let PizzaHut = new Restaurant({
  discount: 0.8,
  menu: {
      pizza: 10.00,
      drink: 2.50
  }
})

// call stter and provide array of menu items ($) to be included in getter calculation
// of comboPrice
PizzaHut.combo = [PizzaHut.menu.pizza, PizzaHut.menu.drink];
// call getter to return information about comboPrice
PizzaHut.combo;
// check new value of comboPrice
console.log(PizzaHut.comboPrice)