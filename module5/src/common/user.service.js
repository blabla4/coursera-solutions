(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = [];
function UserService() {
  var service = this;
  service.userInfos = null;

  service.getInfos = function () {
    return service.userInfos
  };


  service.setInfos = function (infos) {
    service.userInfos = infos;
    console.log(infos)
  };

}



})();
