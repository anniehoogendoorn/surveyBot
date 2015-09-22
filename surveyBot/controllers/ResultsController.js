surveyBot.controller('ResultsCtrl', function ResultsCtrl($scope, ResponsesFactory) {
  $scope.responses = ResponsesFactory.responses;
  $scope.ResponsesFactory = ResponsesFactory;
  console.log($scope.responses);

  // $scope.generateResults = function(factory.responses) {
  //   return $scope.responses;
  // };



  // $scope.generateResults = function(factory.responses, response) {
  //   var indexes = [];
  //   while ((i = factory.responses.indexOf(response, i+1)) != -1){
  //       indexes.push(i);
  //   }
  //
  //   return indexes.length;
  //
  // };
});
