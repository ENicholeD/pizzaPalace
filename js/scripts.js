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
