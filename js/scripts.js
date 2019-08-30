function CustomPizza(toppings){
  this.toppings = [],
  this.price = 0
}
CustomPizza.prototype.addToppings = function(toppingsAdded){
  this.toppings = toppingsAdded.concat(this.Toppings);
}
CustomPizza.prototype.pizzaPrice = function(){
  this.price = (this.toppings.length * 2) + 7;
}

$(document).ready(function(){
  var order = new PizzaList();

  $(".form").submit(function(event){
    event.preventDefault();
    var crust = $("input:radio[name=crust]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    var topping = $("input:checkbox[name=topping]:checked").val();
    if (crust, sauce){
      var newPizza = new CustomPizza(topping);
      newPizza.addToppings;
      newPizza.pizzaPrice;
      console.log(topping);
      $("#cost").text(newPizza.price);
    }
  });
});
