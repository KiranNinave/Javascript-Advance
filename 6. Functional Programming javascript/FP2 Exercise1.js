// Implement cart feature
// add item to cart
// add 3% tax to item in cart
// buy item cart -> purchase
// empty cart

// note: this example is classic object oriented solution at the end we will convert this to functional programming :)

class User {
  constructor(name) {
    this.name = name;
    this.active = true;
    this.cart = [];
    this.purchase = [];
  }

  addToCart(item) {
    item.price = item.price + (item.price * 3) / 100; // adding 3% tax
    this.cart.push(item);
  }

  getCart() {
    let total = 0;
    for (var i = 0; i < this.cart.length; i++) {
      console.log(this.cart[i]);
      total += this.cart[i].price;
    }
    console.log("total : " + total);
  }

  buy() {
    this.purchase = [...this.cart];
    this.cart = [];
  }
}

const user = new User("kiran");

const product1 = {
  name: "a",
  price: 100
};

const product2 = {
  name: "b",
  price: 200
};

user.addToCart(product1);
user.addToCart(product2);

user.getCart();

user.buy();

user.getCart();
