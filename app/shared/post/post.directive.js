(function(){
	angular.module('blog.post', [])

	.directive('uiPost', function(){
		return {
			restrict: 'E',
			scope: { posts:'=modelPosts' },
			templateUrl: 'app/shared/post/post.view.html'
		}
	});
})();
