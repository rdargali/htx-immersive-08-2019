document.getElementById("deal-button").addEventListener("deal-button", dealCards);
    function dealCards() {

        document.getElementById("dealer-hand").innerHTML= '<img src="images/2_of_diamonds.png"> <img src="images/8_of_diamonds.png">'
        document.getElementById("player-hand").innerHTML= '<img src="images/8_of_diamonds.png">'

  }; 


document.getElementById("hit-button").addEventListener("hit-button", hitMe)
  function hitMe() {

      document.getElementById('player-hand').innerHTML= '<img src="images/2_of_hearts.png">'
  }


//THIRD BUTTON GOES HERE



var deckOfCards = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

getDeck()