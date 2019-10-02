var totalOrderprice = [];

var pizza = {
  size: ["small", "medium", "large"],
  crust: {
    crispy: 50,
    stuffed: 100,
    glutenFree: 200
  },
  toppings: {
    Chicken: 50,
    Borewores: 50,
    Hawaiian: 50,
    Pepperoni: 50,
    Vegeterian: 50
  },
  price: {
    small: 100,
    medium: 200,
    large: 300
  }
};

function placeorder(size, crust, toppings, price) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.price = 0;
}

placeorder.prototype.costOfPizza = function() {
  if (this.size === pizza.size[0]) {
    this.price += 100;
  } else if (this.size === pizza.size[1]) {
    this.price += 200;
  } else if (this.size === pizza.size[2]) {
    this.price += 300;
  }
  if (this.crust === pizza.crust[pizza.crust.crispy]) {
    this.price += 50;
  } else if (this.crust === pizza.crust[pizza.crust.stuffed]) {
    this.price += 100;
  } else if (this.crust === pizza.crust[pizza.crust.glutenFree]) {
    this.price += 200;
  }
  if (this.toppings === pizza.toppings[pizza.toppings.Chicken]) {
    this.price += 50;
  } else if (this.toppings === pizza.toppings[pizza.toppings.Hawaiian]) {
    this.price += 50;
  } else if (this.toppings === pizza.toppings[pizza.toppings.Borewores]) {
    this.price += 50;
  } else if (this.toppings === pizza.toppings.Pepperoni) {
    this.price += 50;
  } else if (this.toppings === pizza.toppings.Vegeterian) {
    this.price += 50;
  }
  return this.price;
};

placeorder.prototype.deliveryCost = function() {
  return this.deliveryFee;
};
placeorder.prototype.totalCost = function() {
  var shoppingCartTotal = 0;
  for (var order = 0; order < totalOrderprice.length; order++) {
    shoppingCartTotal += totalOrderprice[order];
  }
  return shoppingCartTotal;
};

function shippingAddress(cityName, cityStreet, nameOfBuilding, phoneNumber) {
  this.cityName = cityName;
  this.cityStreet = cityStreet;
  this.nameOfBuilding = nameOfBuilding;
  this.phoneNumber = phoneNumber;
  this.deliveryAddress =
    cityStreet +
    "" +
    nameOfBuilding +
    "" +
    "we will call you on this phone number" +
    phoneNumber;
}
