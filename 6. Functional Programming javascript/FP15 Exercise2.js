// this is the solution of problem in Exercise1 in functional programming way
// avantages
// by using this approach addning function to our program become easy beacuse they didn't affect another function
// taking track of history beacome easy
// code can easily get updates
// code beacome easy to maintain

const user = {
  name: "name",
  active: true,
  cart: [],
  purchases: []
};

const item = {
  name: "laptop",
  price: 20000
};

const transactionHistory = []; // this will track the transaction

// here we call reverse way because we are using compose
purchaseItem(transactionComplete, emptyCart, buy, addTax, addItemToCart)(
  user,
  item
);

// working of compose function
// first fn = emptyCart, gn = buy
// sencond fn = return of first call, gn = addTax
// third fn = return of second, gn = addItemToCart
// output = return of third

// overall calles look like follos
// emptyCart( buy(...args) )( addTax(...args) )( addItemToCart( ...args ) )

// beacause of property of higher order function and closure ( remaimbering )
// parameters of above equation
// addItemToCart(...args) -> args = user, item (intery point of hof from purchaseItem function call)
// addTax(...args) -> return of addItemToCart() = user
// buy(...args) -> return of addTax() = user
// emptyCart -> return of buy -> user

// above all call returns functions and this function finaly get executed by purchaseItem(emptyCart, buy, addTax, addItemToCart)(user, item); this call

function compose(fn, gn) {
  return function(...args) {
    // here args is all functions returns
    return fn(gn(...args)); // emptyCart( buy(...args) )( addTax(...args) )( addItemToCart( ...args ) ) (note: uses hof and closure property)
  };
}

function purchaseItem(...args) {
  return args.reduce(compose);
}

function addItemToCart(user, item) {
  transactionHistory.push(user);
  const cart = [...user.cart, item]; // adding item to cart but not affecting orignal user object
  return Object.assign({}, user, { cart: cart }); // we modify the cart but on clone real object maitained (pure function property)
}

function addTax(user) {
  transactionHistory.push(user);
  const taxRate = 30 / 100; // 30% tax
  const updatedCart = user.cart.map(item => {
    var updatedProduct = Object.assign({}, item, {
      price: item.price + item.price * taxRate
    });
    return updatedProduct;
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buy(user) {
  transactionHistory.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  transactionHistory.push(user);
  return Object.assign({}, user, { cart: [] });
}

function transactionComplete(user) {
  transactionHistory.push(user);
  return user;
}

// transaction history
transactionHistory.forEach(item => console.log(item));
