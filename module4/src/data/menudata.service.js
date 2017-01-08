(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$http']
function MenuDataService ($q, $http) {
  this.getAllCategories = function() {
    return $http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function(response) {
      return response.data;
    })
  }

  this.getItemsForCategory = function(categoryShortName) {
    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName).then(function(response) {
      return response.data;
    })
  }
}

})();