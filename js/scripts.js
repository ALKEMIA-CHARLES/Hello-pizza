var totalOrderprice = [];

var size = ["small", "medium", "large"];
var crust = ["crispy", "stuffed", "Gluten-free"];
var toppings = ["chicken", "hawaiian", "borewores", "pepperoni", "vegeterian"];

var size = $("#sizeSelect").val();
var crust = $("#crustSelect").val();
var toppings = $("Glutenfree").val();

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

function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.price = 0;
}

// var placeorder = new Pizza(size, crust, toppings);

Pizza.prototype.costOfPizza = function() {
  if (this.size === small) {
    this.price += 100;
  } else if (this.size === medium) {
    this.price += 200;
  } else if (this.size === large) {
    this.price += 300;
  }
  if (this.crust === crispy) {
    this.price += 50;
  } else if (this.crust === stuffed) {
    this.price += 100;
  } else if (this.crust === glutenFree) {
    this.price += 200;
  }
  if (this.toppings === Chicken) {
    this.price += 50;
  } else if (this.toppings === Hawaiian) {
    this.price += 50;
  } else if (this.toppings === Borewores) {
    this.price += 50;
  } else if (this.toppings === Pepperoni) {
    this.price += 50;
  } else if (this.toppings === Vegeterian) {
    this.price += 50;
  }
  return this.price;
};

// placeorder.prototype.deliveryCost = function() {
//   return this.deliveryFee;
// };
// placeorder.prototype.totalCost = function() {
//   var shoppingCartTotal = 0;
//   for (var order = 0; order < totalOrderprice.length; order++) {
//     shoppingCartTotal += totalOrderprice[order];
//   }
//   return shoppingCartTotal;
// };

// function ShippingAddress(
//   cityName,
//   cityStreet,
//   nameOfBuilding,
//   phoneNumber,
//   deliveryAddress
// ) {
//   this.cityName = cityName;
//   this.cityStreet = cityStreet;
//   this.nameOfBuilding = nameOfBuilding;
//   this.phoneNumber = phoneNumber;
//   this.deliveryAddress =
//     cityStreet +
//     "" +
//     nameOfBuilding +
//     "" +
//     "we will call you on this phone number" +
//     phoneNumber;
// }

$(document).ready(function() {
  var size = $("#sizeSelect").val();
  var crust = $("crustSelect").val();
  var toppings = $("#Glutenfree").val();

  var placeorder = new Pizza(size, crust, toppings);
  placeorder.price;

  $("h3.card-text").text("Your total price is " + placeorder.price);
});
