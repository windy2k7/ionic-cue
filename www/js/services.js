angular.module('cue.services', [])
.factory('MenuService', function($http, $q) {
    return {
        get: function() {
            var deferred = $q.defer();
            var params = {              
            };
            
            $http({
                method  : 'GET',
                url     : baseConfig.getApiUrl()+'api/common/get_menu/',
                params  : params                
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function(data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        }
    }
})
.factory('PageService', function($http, $q) {
    return {
        getPage: function(pageUrl) {
            var deferred = $q.defer();
            var params = {              
            };
            
            $http({
                method  : 'GET',
                url     : pageUrl,
                params  : params                
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function(data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        }
    }
});