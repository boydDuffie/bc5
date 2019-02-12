angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    /*
     Save the article using the Listings factory. If the object is successfully 
     saved redirect back to the list page. Otherwise, display the error
    */
    $scope.addListing = function() {
      Listings.create($scope.newListing).then(function(response){
        window.location = '/';
      }, function(error){
        console.log('Could not add listing: ', error)
      });
    };

    /*
      Delete the article using the Listings factory. If the removal is successful, 
      navigate back to 'listing.list'. Otherwise, display the error.
    */
    $scope.deleteListing = function(id) {
       Listings.delete(id).then(function(response){
        window.location = '/';
       }, function(error){
        console.log('Could not delete listing: ', error);
       });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);