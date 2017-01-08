(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

function CategoriesController() {
  console.log(this.items)
}

})();