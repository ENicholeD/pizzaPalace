// Background logic

function CustomPizza(crust, sauce, toppings, size){
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.size = size;
  this.price = 2;
}
// adds addOns to the toppings on the CustomPizza
CustomPizza.prototype.addPizza = function(addOns){
  $(this.toppings).push(addOns);
}
// adds the price together to get the total
CustomPizza.prototype.pizzaPrice = function(){
  this.price += this.toppings.length;
  this.price += this.size;
}

// UI logics

$(document).ready(function(){
  $(".col-md-4").hide();
  $("#total").hide();
  $("#oops").hide();
  $(".form").submit(function(event){
    event.preventDefault();
    // gathers all user input
    var crustChoice = $("input:radio[name=crust]:checked").val();
    var sauceChoice = $("input:radio[name=sauce]:checked").val();
    var addOns = $("input:checkbox[name=topping]:checked").map(function(){return this.value;}).get();
    var size = parseInt($("#size").val());
    // conditional
    if(crustChoice, sauceChoice){
    var newPizza = new CustomPizza(crustChoice, sauceChoice, addOns, size);
      newPizza.addPizza();
      newPizza.pizzaPrice();
      $("#total").show();
      $("oops").hide();
      $("#cost").text(newPizza.price);
      $(".col-md-4").show();
    } else {
      $(".col-md-4").show();
      $("#total").hide();
      $("#oops").show();
    }
  });
});
