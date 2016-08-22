// play a hand of blackjack
//

var _       = require('lodash');
var shuffle = require('knuth-shuffle').knuthShuffle;



(function() {

  /*
   * Prepare deck
   */

  var numOfDecks = 1;

  var cards = (function() {
    var a = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    return _.flattenDeep(
      _.times(numOfDecks, function() {
        return _.times(4 - 1, function() {
          return a.concat(a);
        });
      })
    );
  }());

  cards = shuffle(cards);


  /*
   * Play a hand
   */

  var player = [];
  var dealer = [];

  _.times(2, function() {
    player.push(cards.pop());
    dealer.push(cards.pop());
  });

  console.log('Player:', player, 'Dealer:', ['?', dealer[]]);

}());
