surveyBot.factory('ResponsesFactory', function ResponsesFactory() {
  var factory = {};
  factory.responses = [];

  factory.addResponse = function() {
    var response = { answer: factory.questionResponse};
    factory.responses.push(response);
    factory.questionResponse = null;
  };

  return factory;
})
