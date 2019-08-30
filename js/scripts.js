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
Pizza.prototype.checkoutTotal = function(){
  var amount = 0;
  this.items.forEach(function(item){
    amount += item.price;
  });
  this.total = amount;
  return this.total;
}
function CustomPizza(crust, sauce, toppings){
  this.toppings = toppings,
  this.price = 0
}
CustomPizza.prototype.addToppings = function(toppingsAdded){
  this.toppings = toppingsAdded.concat(this.Toppings);
}
CustomPizza.prototype.pizzaPrice = function(){
  this.price = this.toppings.length * 2 + 7;
}

var order = new PizzaList();

$(document).ready(function(){
  $(".form").submit(function(){
    var = $("input:radio[name=crust]:checked").val();
    var = $("input:radio[name=sauce]:checled").val();
  });
});
