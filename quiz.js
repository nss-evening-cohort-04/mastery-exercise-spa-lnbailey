// Loop over your array of cars and build up an HTML string to build a card for each car.
// Also, use Bootstrap to create rows. Each row should contain 3 columns.
// Make sure you have a parent element with a class of container.
// Hint: You must build up the entire string of columns/rows before injecting into the DOM.
// Use a counter variable to know when to close a row after three columns.

function populatePage (inventoryArray) {
  var output = "";
  var outputEl = document.getElementById("container");
  var currentCar;
  output += `<div id="row-div" class="row">`;
  for (var i = 0; i < inventoryArray.length; i++) {
    currentCar = inventoryArray[i];
    if (i % 3 === 0 && i !== 0) {
      output += `</div><div class="row"><div class="car-card col-md-3 col-md-offset-1 unselected-card"><h2>${currentCar.year} ${currentCar.make} ${currentCar.model}</h2>`;
    output += `<p>Price: $${currentCar.price}</p>`;
    output += `<section>Description: ${currentCar.description}</section></div>`;
    } else {
      output += `<div class="car-card col-md-3 unselected-card"><h2>${currentCar.year} ${currentCar.make} ${currentCar.model}</h2>`;
      output += `<p>Price: $${currentCar.price}</p>`;
      output += `<section>Description: ${currentCar.description}</section></div>`;
    }
  }
  output += `</div>`;

  outputEl.innerHTML = output;

  CarLot.activateEvents();
}

CarLot.loadInventory(populatePage);
