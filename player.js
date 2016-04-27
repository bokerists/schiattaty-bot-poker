
exports = module.exports = {

  VERSION: 'Superstar poker js-player',

  bet: function (gamestate) {

    //
    // gamestate contains info about the state of the game.
    // check the documentation at https://bot-poker.herokuapp.com/wiki#gamestate for further info about the data structure.

    //
    // you just have to return the amount that you want to bet.



    // enjoy the game!

    //
    // currently we just fold every single hand.

    'use strict';

    console.log(`Currently playing tournament ${gamestate.tournamentId}`);

/*
    {
      // Unique id of the tournament that is being played.
      // ObjectId is a mongodb type.
      // A tournament is made by one or more Games.
      "tournamentId": ObjectId,

      // Id of the current Game.
      // A new game starts automatically when all the players (but one) get eliminated.
      // A Game is made by one or more Rounds.
        "game": Number,

      // Id of the current Round.
      // If there is more than one active player, a new round starts automatically
      // after the end of another round.
      // A round ends when the pot is assigned to one or more players.
        "round": Number,

      // Count the number of time
      // that players had already have the possibility to bet in the current session.
      // It starts from zero.
        "spinCount": Number,

      // Value of the small blind.
      // Big blind is always twice.
        "sb": Number,

      // Amount of chips currently on the table.
        "pot": Number,

      // List of the community cards,
      // with which players can form their best combination.
        "commonCards": [CARD],

      // List of the players;
      // It always contains all the players.
        "players": [PLAYER],

      // Index of the player who has the Dealer Button.
        "db": Number,

      // Index of the current player.
        "me": Number,

      // Amount of chips the current player must bet in order to remain in the game.
      // It depends by how much he bet previously; so it can change for each player.
        "callAmount": Number

    }
    */

    var player = gamestate.players[gamestate.me],
        ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        getCardValue = function  (card){
          return ranks.indexOf(card.rank)
        },
        getCouple = function(){
          var currentCard = player.cards[0].rank;

          for (var i = 1; i < player.cards.length; i++) {
            if (player.cards[i].rank == currentCard) {
              return true;
            }
          }
        };

        if (getCouple()) {
          return 20;
        }else{
          return 0;
        }


  }


};
