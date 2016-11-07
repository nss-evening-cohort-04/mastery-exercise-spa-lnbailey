// The final IIFE should augment the object with two more functions. One function resets the
// border thickness and background color for each car element back to the original values.
// The other function changes the thickness of the border of a car element, and changes its background color.
// The function must accept two arguments.
//   A car DOM element that was clicked on.
//   A color name of your choice (see behavior requirement 5 above).

var CarLot = (function(setStyles) {
	setStyles.unselectAll = function() {
		var carCardsArray = document.getElementsByClassName("car-card");
		for (var i = 0; i < carCardsArray.length; i++) {
			thisCard = carCardsArray[i];
			thisCard.classList.remove("selected-card");
			thisCard.classList.add("unselected-card");
		}
	}
	setStyles.makeSelected = function(domEl, newColor) {
		domEl.classList.remove("unselected-card");
		domEl.classList.add("selected-card");
	}

	return setStyles;
}) (CarLot);
