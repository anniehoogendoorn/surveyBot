surveyBot.controller('QuestionsCtrl', function QuestionsCtrl($scope, ResponsesFactory) {
  $scope.responses = ResponsesFactory.results;
  $scope.ResponsesFactory = ResponsesFactory;
});
