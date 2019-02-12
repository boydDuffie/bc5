angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http:///api/listings');
    },
	
	create: function(listing) {
	  return $http.post('http:///api/listings', listing);
    }, 

    /*Return result of HTTP delete method*/
    delete: function(id) {
      return $http.delete('http:///api/listings/' + id);
    }
  };

  return methods;
});
