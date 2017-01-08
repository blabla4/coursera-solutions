(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

function ItemsController() {
  console.log(this.item)
}

})();