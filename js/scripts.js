function PizzaList(){
  this.items = [],
  this.total = 0,
  this.currentId = 0
}
PizzaList.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}
PizzaList.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.items.push(pizza);
}
PizzaList.prototype.removePizza = function(){
  for (var i = 0; i < this.items.length; i + 1){
    if(this.items[i].id === id){
      this.items.splice(this.items.indexOf(this.items[i], 1))
    }
  }
}
PizzaList.prototype.checkoutTotal = function(){
  var amount = 0;
  this.items.forEach(function(item){
    amount += item.price;
  });
  this.total = amount;
  return this.total;
}
function CustomPizza(toppings){
  this.toppings = toppings,
  this.price = 0
}
CustomPizza.prototype.addToppings = function(toppingsAdded){
  this.toppings = toppingsAdded.concat(this.Toppings);
}
CustomPizza.prototype.pizzaPrice = function(){
  this.price = this.toppings.length * 2 + 7;
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
      order.addPizza;
    }
  });
});
