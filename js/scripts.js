// $('#ordersheet').submit(function(e){
  // e.preventDefault;

  var totalOrderprice = [];
  function pizza(size, crust, toppings) {
    this.totalOrderPrice
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.calculated= false;
    this.price = 0;
  }
    var size = ["small", "medium", "large"];
    var crust = ["crispy", "stuffed", "Gluten-free"];
    var toppings = ["chicken", "hawaiian", "borewores", "pepperoni", "vegeterian"];


pizza.prototype.setSize =  function(size){
  if(size){
    this.size = size;
    this.calculated=false;
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
        if(this.calculated===true){
          return this.price;
        }
        this.price=0;

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
        this.calculated =  true;
        return this.price;
      };
    pizza.prototype.totalOrderprice = function(){
      var orderTotal = 0;
      for (var order = 0 ; order < totalOrderprice.length; Pizza ++){
        orderTotal += totalOrderprice[order];
      }
      return orderTotal;
    }



var newOrder = new pizza();

$(document).ready(function(){
  $("input#totalOrderprice").click(function(event){
    event.preventDefault();
    var size = $("select#sizeSelect").val();
    newOrder.setSize(size);
    var crust = $("select#crustSelect").val();
    newOrder.setCrust(crust);
    var toppings = $("select#toppingsSelect").val();
    newOrder.setToppings(toppings);
    // var newOrder = new pizza(size, crust, toppings);
    console.log(newOrder.costOfPizza())

    // newOrder.totalOrderPrice.push(newOrder.price);

    $("#pz").text(size);
    $("#cr").text(crust);
    $("#vt").text(toppings);
    $("#tc").text(newOrder.price);

  })
})

$(document).ready(function () {
  $("#delivery").click(function () {
    alert("Your charges for delivery is ksh200")
    alert("Thank you for Your Purchase!Your order will be delivered to your location")
  });
});






















    // var placeorder = new Pizza(size, crust, toppings);
    // Pizza.prototype.costOfPizza = function(){
    //   if(this.size == "small" && this.crust=="crispy" && this.toppings == "Chicken" || "Hawaiian" || "Pepporoni" || "Borewores" || "Vegeterian"){
    //     this.price +=200;
    //   }else if (this.size == "small" && this.crust == "stuffed" && this.toppings == "Chicken" || "Hawaiian" || "Pepporoni" || "Borewores" || "Vegeterian"){
    //     this.price += 250;
    //   }else if (this.size == "small" && this.crust == "glutenFree" && this.toppings == "Chicken" || "Hawaiian"|| "Pepperoni" || "Borewores" ||"Vegeterian"){
    //     this.price += 350;
    //   }
    //   if (this.size == "medium" && this.crust == "crispy" && this.toppings == "Chicken" || "Hawaiian" || "Pepperoni" || "Borewores" || "Vegeterian"){
    //     this.price += 300;
    //   }else if (this.size == "medium" && this.crust == "stuffed" && this.toppings == "Chicken" || "Hawaiian" || "Pepperoni" || "Borewores" || "Vegeterian") {
    //     this.price += 350;
    //   }else if (this.size == "medium" && this.crust == "glutenFree" && this.toppings == "Chicken" || "Hawaiian" ||"Pepperoni" ||"Borewores" || "Vegetation"){
    //     this.price += 450;
    //   }
    //   if(this.size == "large" && this.crust == "crispy" && this.toppings == "chicken" || "Hawaiian" || "Borewores" || "Pepperoni"){
    //     this.price += 400;
    //   }else if (this.size == "large" && this.crust == "stuffed" && this.toppings == "chicken" || "Hawaiian" || "Borewores" || "Pepperoni"){
    //     this.price += 450;
    //   }else if (this.size == "large" && this.crust == "glutenFree" && this.toppings == "chicken" || "Hawaiian" || "Borewores" || "Pepperoni"){
    //     this.price += 550;
    //   }
    // };
    // alert(placeorder.costOfPizza())
    // } return this.price;
    // alert('something')
// })


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

// $(document).ready(function() {
//   var size = $("#sizeSelect").val();
//   var crust = $("crustSelect").val();
//   var toppings = $("#Glutenfree").val();

//   var placeorder = new Pizza(size, crust, toppings);
//   placeorder.price;

//   $("h3.card-text").text("Your total price is " + placeorder.price);
// });
