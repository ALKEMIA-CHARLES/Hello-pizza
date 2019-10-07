var totalOrderprice = [];

function pizza(size, crust, toppings) {
  this.totalOrderPrice
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.calculated = false;
  this.price = 0;
}
var size = ["small", "medium", "large"];
var crust = ["crispy", "stuffed", "Gluten-free"];
var toppings = ["chicken", "hawaiian", "borewores", "pepperoni", "vegeterian"];


pizza.prototype.setSize = function (size) {
  if (size) {
    this.size = size;
    this.calculated = false;
    this.costOfPizza()
  }
}
pizza.prototype.setCrust = function (crust) {
  if (crust) {
    this.crust = crust;
    this.calculated = false;
    this.costOfPizza()
  }
}
pizza.prototype.setToppings = function (toppings) {
  if (toppings) {
    this.toppings = toppings;
    this.calculated = false;
    this.costOfPizza()
  }
}



pizza.prototype.costOfPizza = function () {
  if (this.calculated === true) {
    return this.price;
  }
  this.price = 0;

  if (this.size === "small") {
    this.price += 100;
  } else if (this.size === "medium") {
    this.price += 200;
  } else if (this.size === "large") {
    this.price += 300;
  }
  if (this.crust === "crispy") {
    this.price += 50;
  } else if (this.crust === "stuffed") {
    this.price += 100;
  } else if (this.crust === "glutenFree") {
    this.price += 200;
  }
  if (this.toppings === "chicken") {
    this.price += 50;
  } else if (this.toppings === "hawaiian") {
    this.price += 50;
  } else if (this.toppings === "borewores") {
    this.price += 50;
  } else if (this.toppings === "pepperoni") {
    this.price += 50;
  } else if (this.toppings === "vegeterian") {
    this.price += 50;
  }
  this.calculated = true;
  return this.price;
};
pizza.prototype.totalOrderprice = function () {
  var orderTotal = 0;
  for (var order = 0; order < totalOrderprice.length; Pizza++) {
    orderTotal += totalOrderprice[order];
  }
  return orderTotal;
}

var newOrder = new pizza();

$(document).ready(function () {
  $("input#totalOrderprice").click(function (event) {
    event.preventDefault();
    var size = $("select#sizeSelect").val();
    newOrder.setSize(size);
    var crust = $("select#crustSelect").val();
    newOrder.setCrust(crust);
    var toppings = $("select#toppingsSelect").val();
    newOrder.setToppings(toppings);

    console.log(newOrder.costOfPizza())

    $("#pz").text(size);
    $("#cr").text(crust);
    $("#vt").text(toppings);
    $("#tc").text(newOrder.price);

  })



})