var plays = require('./basic-4_8-deck-dealer_hit_soft_17.json');

module.exports = (function() {
  var strategy = {};



  var get = function(playerHand, dealerUpCard) {
    var hand = getHand(playerHand);

    var type        = hand[0];
    var value       = hand[1];
    var dealerIndex = plays.dealer.indexOf(dealerUpCard);

    if (value > 21)
      return 'bust';

    var symbol = plays[type][value][dealerIndex];
    var move   = plays.key[symbol];

    return { symbol: symbol, move: move };
  }



  // Get hand type
  function getHand(playerHand) {
    // Check if a split hand
    if (playerHand.length === 2 && playerHand[0] === playerHand[1])
      if (playerHand[0] !== 5 && playerHand[0] !== 10)
        return { type: 'splits', value: `${playerHand[0]},${playerHand[1]}` };

    var isSoft = false;
    var total  = playerHand.reduce((memo, card) = > {
      var value = 0;

      if (card === 'A')
        value = 11;
        if (memo + 11 > 21)
          value = 1;
        else
          isSoft = true;
      else
        value = +card;

      return memo += value;
    });

    // Check if a soft hand
    if (isSoft)
      return { type: 'soft', value: `${total}` };

    // Else is a hard hand
    return { type: 'hard', value: `${total}` };
  }



  return strategy;
}());
