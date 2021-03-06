(function(){
	angular
		.module("WebAppMaker")
		.controller("WidgetListController",WidgetListController);
	
	function WidgetListController($routeParams, WidgetService, $sce) {
		var vm = this;
		vm.userId = $routeParams.userId;
		vm.websiteId = $routeParams.websiteId;
		vm.pageId = $routeParams.pageId;
		vm.getSafeHtml = getSafeHtml;
		vm.getSafeUrl = getSafeUrl;
		
		function init() {
			vm.widgets = WidgetService.findWidgetsForPageId(vm.pageId);
		}
		init();
		
		function getSafeHtml(widget) {
			return $sce.trustAsHtml(widget.text);
		}
		function getSafeUrl(widget) {
			var urlParts = widget.url.split("/");
			var id = urlParts[urlParts.length-1];
			var url = "https://www.youtube.com/embed/"+id;
			console.log(url);
			return $sce.trustAsResourceUrl(url);
		}
	}
})();
