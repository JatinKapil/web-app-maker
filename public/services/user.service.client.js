(function(){
	angular
		.module("WebAppMaker")
		.factory("UserService", UserService);
	
	function UserService($http) {
		var api={
				createUser :createUser,
				findUserByUsernameAndPassword : findUserByUsernameAndPassword,
				findUserById : findUserById,
				updateUser : updateUser,
				deleteUser : deleteUser
		};
		return api;
		
		function createUser(username, password) {
			var newUser =  {
					_id: (new Date()).getTime()+"",
					username : username,
					password : password,
					firstName : "",
					lastName : ""
			}
			users.push(newUser);
			return newUser;
		}
		
		function deleteUser() {
			
		}
		
		function findUserByUsernameAndPassword(username, password) {
			var url = "/api/user?username="+username+"&password="+password;
			return $http.get(url);
		}
		function findUserById(id) {
			for(var i in users){
				if(users[i]._id===id){
					return users[i];
				}
			}
			return null;
		}
		function updateUser(id, newUser) {
			for(var i in users){
				if(users[i]._id===id){
					users[i].firstName = newUser.firstName;		
					users[i].lastName = newUser.lastName;
					return true;
				}
			}
			return false;
		}
	}
})();
