(function(){
	angular.module("WebAppMaker")
	.controller("RegisterController", RegisterController);
		
	function RegisterController($location, UserService) {
		var vm = this;
		vm.createUser = createUser;
		
		function createUser(username, password, verifyPassword) {
			if(password!=verifyPassword){
				vm.error="Password didn't match !";
			}
			else{
				var newUser = UserService.createUser(username, password);
				if(newUser){
					$location.url("/user/"+newUser._id);

				}else{
					vm.error="Unable to create new user";
				}
			}
		}
	}
})();
