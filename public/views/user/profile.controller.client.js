(function(){
	angular.module("WebAppMaker")
	.controller("ProfileController", ProfileController);
		
	function ProfileController($routeParams, UserService, $location) {
		var vm = this;
		vm.updateUser = updateUser;		
	
		var id = $routeParams.id;
		function init() {
			vm.user = UserService.findUserById(id);
		}
		init();
		
		function updateUser(newUser) {
			var result = UserService.updateUser(id, newUser);
		}
	}
})();
