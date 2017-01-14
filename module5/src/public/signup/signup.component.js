(function () {
"use strict";

angular.module('public')
.component('signup', {
  templateUrl: 'src/public/signup/signup.html',
  bindings: {

  },
  controller: SignUpController
});


SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var $ctrl = this;
  this.MenuService = MenuService;
  $ctrl.UserService = UserService;
  $ctrl.isValid = false;
  $ctrl.clicked = false;

  this.submit = function() {
    this.MenuService.getMenuItems().then(function(data) {
      data.menu_items.forEach(function(menu) {
        if($ctrl.fav == menu.short_name) {
          $ctrl.isValid = true;
          $ctrl.UserService.setInfos({
            firstname: $ctrl.firstname,
            lastname: $ctrl.lastname,
            email: $ctrl.email,
            phone: $ctrl.phone,
            fav: menu
          })
        } 
      })
      $ctrl.clicked = true;
    });
  }
}

})();
