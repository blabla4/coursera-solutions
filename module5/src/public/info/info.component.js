(function () {
"use strict";

angular.module('public')
.component('info', {
  templateUrl: 'src/public/info/info.html',
  bindings: {

  },
  controller: InfoController
});


InfoController.$inject = ['MenuService', 'UserService'];
function InfoController(MenuService, UserService) {
  var $ctrl = this;
  $ctrl.MenuService = MenuService;
  $ctrl.UserService = UserService;
  $ctrl.infos = $ctrl.UserService.getInfos()
}

})();
