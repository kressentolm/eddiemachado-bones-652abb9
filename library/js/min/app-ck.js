var myapp=angular.module("myapp",[]);myapp.run(["$rootScope",function(o){o.dir=BlogInfo.url,o.site=BlogInfo.site,o.api=AppAPI.url}]),myapp.controller("mycontroller",["$scope","$http",function(o,p){p({method:"GET",url:o.api,params:{json:"get_posts"}}).success(function(p,t,r,n){o.postdata=p.posts}).error(function(o,p,t,r){})}]);