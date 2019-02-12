angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https:///api/listings');
    },
  
  create: function(listing) {
    return $http.post('https:///api/listings', listing);
    }, 

    /*Return result of HTTP delete method*/
    delete: function(id) {
      return $http.delete('https:///api/listings/' + id);
    }
  };

  return methods;
});
