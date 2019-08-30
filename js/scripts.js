function CustomPizza(toppings, price){
  this.toppings = toppings;
  this.price = price;
}
CustomPizza.prototype.pizzaPrice = function(toppingNumber){
  this.total = toppingNumber += this.price;
}

$(document).ready(function(){

  $(".form").submit(function(event){
    var crust = $("input:radio[name=crust]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    event.preventDefault();
    var newPizza = new CustomPizza(allToppings);
    if (crust, sauce){
      var addOns = $("input:checkbox[name=topping]:checked").map(function(){ return this.value;}).get();
      var allToppings = [];
      (allToppings).push(addOns);
      var toppingNumber = allToppings[0].length;
      newPizza.addToppings;
      newPizza.pizzaPrice;
      $("#cost").text(newPizza.pice);
    }
  });
});
