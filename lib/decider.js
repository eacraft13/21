var strategy = require('./strategy');

module.exports = (function() {
  var decider = {};



  decider.play = function(play, playerCards) {
    if ()
  };



  decider.strategy = function(playerHand, dealerUpCard) {
    return strategy.get(playerHand, dealerUpCard);
  };



  return decider;
}());
