function CustomPizza(toppings, price){
  this.toppings = toppings;
  this.price = 7;
}

CustomPizza.prototype.pizzaPrice = function(toppingNumber){
  this.price += toppingNumber;
}

$(document).ready(function(){
  $("#finishedPizza").hide();
  $(".form").submit(function(event){
    event.preventDefault();
    var crust = $("input:radio[name=crust]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    var addOns = $("input:checkbox[name=topping]:checked").map(function(){return this.value;}).get();
    var allToppings = [];
    (allToppings).push(addOns);
    var toppingNumber = (allToppings[0]).length;
    console.log(allToppings);
    console.log(toppingNumber);
    if(crust,sauce){
    var newPizza = new CustomPizza(allToppings, toppingNumber);
      newPizza.pizzaPrice(toppingNumber);

      $("#cost").text(newPizza.price);
      $("#finishedPizza").show();
    }
  });
});
