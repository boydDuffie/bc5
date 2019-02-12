angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://calm-escarpment-66341.herokuapp.com/api/listings');
    },
  
  create: function(listing) {
    return $http.post('https://calm-escarpment-66341.herokuapp.com/api/listings', listing);
    }, 

    /*Return result of HTTP delete method*/
    delete: function(id) {
      return $http.delete('https://calm-escarpment-66341.herokuapp.com/api/listings/' + id);
    }
  };

  return methods;
});
