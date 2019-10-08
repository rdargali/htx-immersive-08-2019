document.getElementById("deal-button").addEventListener("deal-button", dealCards);
    function dealCards() {

        document.getElementById("dealer-hand").innerHTML= '<img src="images/2_of_diamonds.png"> <img src="images/8_of_diamonds.png">'
        document.getElementById("player-hand").innerHTML= '<img src="images/8_of_diamonds.png">'

  }; 


document.getElementById("hit-button").addEventListener("hit-button", hitMe)
  function hitMe() {

      document.getElementById('player-hand').innerHTML= '<img src="images/2_of_hearts.png">'
  }


//THIRD BUTTON PLACE HOLDER




var deck = [ 

{ point: 2, suit: 'hearts', card: 'two' },
{ point: 3, suit: 'hearts', card: 'three' },
{ point: 4, suit: 'hearts', card: 'four' },
{ point: 5, suit: 'hearts', card: 'five' },
{ point: 6, suit: 'hearts', card: 'six' },
{ point: 7, suit: 'hearts', card: 'seven' },
{ point: 8, suit: 'hearts', card: 'eight' },
{ point: 9, suit: 'hearts', card: 'nine' },
{ point: 10, suit: 'hearts', card: 'ten' },
{ point: 10, suit: 'hearts', card: 'jack' },
{ point: 10, suit: 'hearts', card: 'queen' },
{ point: 10, suit: 'hearts', card: 'king' },
{ point: 11, suit: 'hearts', card: 'ace' },
{ point: 2, suit: 'diamonds', card: 'two' },
{ point: 3, suit: 'diamonds', card: 'three' },
{ point: 4, suit: 'diamonds', card: 'four' },
{ point: 5, suit: 'diamonds', card: 'five' },
{ point: 6, suit: 'diamonds', card: 'six' },
{ point: 7, suit: 'diamonds', card: 'seven' },
{ point: 8, suit: 'diamonds', card: 'eight' },
{ point: 9, suit: 'diamonds', card: 'nine' },
{ point: 10, suit: 'diamonds', card: 'ten' },
{ point: 10, suit: 'diamonds', card: 'jack' },
{ point: 10, suit: 'diamonds', card: 'queen' },
{ point: 10, suit: 'diamonds', card: 'king' },
{ point: 11, suit: 'diamonds', card: 'ace' },
{ point: 2, suit: 'spades', card: 'two' },
{ point: 3, suit: 'spades', card: 'three' },
{ point: 4, suit: 'spades', card: 'four' },
{ point: 5, suit: 'spades', card: 'five' },
{ point: 6, suit: 'spades', card: 'six' },
{ point: 7, suit: 'spades', card: 'seven' },
{ point: 8, suit: 'spades', card: 'eight' },
{ point: 9, suit: 'spades', card: 'nine' },
{ point: 10, suit: 'spades', card: 'ten' },
{ point: 10, suit: 'spades', card: 'jack' },
{ point: 10, suit: 'spades', card: 'queen' },
{ point: 10, suit: 'spades', card: 'king' },
{ point: 11, suit: 'spades', card: 'ace' },
{ point: 2, suit: 'clubs', card: 'two' },
{ point: 3, suit: 'clubs', card: 'three' },
{ point: 4, suit: 'clubs', card: 'four' },
{ point: 5, suit: 'clubs', card: 'five' },
{ point: 6, suit: 'clubs', card: 'six' },
{ point: 7, suit: 'clubs', card: 'seven' },
{ point: 8, suit: 'clubs', card: 'eight' },
{ point: 9, suit: 'clubs', card: 'nine' },
{ point: 10, suit: 'clubs', card: 'ten' },
{ point: 10, suit: 'clubs', card: 'jack' },
{ point: 10, suit: 'clubs', card: 'queen' },
{ point: 10, suit: 'clubs', card: 'king' },
{ point: 11, suit: 'clubs', card: 'ace' },

];
 


function shuffle(deck) {
    deck[Math.floor(Math.random()*deck.length)];

    return deck
}

shuffle(deck)