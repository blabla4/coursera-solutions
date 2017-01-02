var app = angular.module("app",[])
app.controller("NarrowItDownController", NarrowItDownController)
app.service("MenuSearchService", MenuSearchService)
app.directive("foundItems", foundItems)

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  this.nothing = false;
  this.search = function() {
    var promise = MenuSearchService.getMatchedMenuItems(this.term);
    promise.then(function(foundItems) {
      ctrl.found = foundItems;
      if(foundItems.length === 0) { ctrl.nothing = true; } else { ctrl.nothing = false; }
    })
  }

  this.removeItem = function (itemIndex) {
    this.found.splice(itemIndex, 1)
  };
}

function foundItems() {
  return {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsController,
    controllerAs: 'ctrl',
    bindToController: true
  }
}

function FoundItemsController() {

}

MenuSearchService.$inject = ['$q', '$http']
function MenuSearchService($q, $http) {
  var deferred = $q.defer();

  this.getMatchedMenuItems = function(searchTerm) {
    return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json").then(function (result) {
        this.foundItems = [];
        result.data.menu_items.forEach(function(item) {
          if(item.description.indexOf(searchTerm) != -1) {
            this.foundItems.push(item)
          }
        }, this);

        return foundItems;
    });
  }
}