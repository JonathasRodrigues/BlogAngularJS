(function(){
	angular.module('blog.sidebar', [])

	.directive('uiSidebar', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/shared/sidebar/sidebar.view.html'
		}
	});
})();
