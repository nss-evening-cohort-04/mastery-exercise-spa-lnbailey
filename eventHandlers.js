// The second IIFE should augment the original one with a function that creates all of the
// eventHandlers that you need for the application. Name the function activateEvents.

var CarLot = (function(activateEvents) {
	var userInput = document.getElementById("user-input");
	var inputString;

	var selectedCard = '';

	activateEvents.activateEvents = function() {

		var carCardsArray = document.getElementsByClassName("car-card");
		for (var i = 0; i < carCardsArray.length; i++) {
			thisCard = carCardsArray[i];
			thisCard.addEventListener("click", CarLot.unselectAll);
			thisCard.addEventListener("click", function(e){
				CarLot.makeSelected(e.currentTarget, "Gainsboro");
				selectedCard = e.currentTarget;
				userInput.hidden = false;
				userInput.value = "";
				userInput.focus();
			});
		};
		userInput.addEventListener("keyup", function(){
			selectedCard.lastChild.innerHTML = `Description: ${userInput.value}`;
		});
	};

	return activateEvents;
}) (CarLot);
