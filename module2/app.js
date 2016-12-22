var app = angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  this.items = ShoppingListCheckOffService.getItemsToBuy();

  this.bought = function(index) {
    ShoppingListCheckOffService.itemBought(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
  this.items = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService() {
  var toBuy = [{
    name: "cookies",
    quantity: 10
  }, {
    name: "cake",
    quantity: 1
  }, {
    name: "pen",
    quantity: 150
  }, {
    name: "brownie",
    quantity: 20
  }, {
    name: "computer",
    quantity: 3
  }];

  var bought = [];

  this.getItemsToBuy = function() {
    return toBuy;
  }

  this.getItemsBought = function() {
    return bought;
  }

  this.itemBought = function(index) {
    bought.push(toBuy.splice(index, 1)[0]);
  }
}