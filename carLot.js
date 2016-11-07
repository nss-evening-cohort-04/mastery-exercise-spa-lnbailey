// Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.
// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory
// in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).

var CarLot = (function () {
  var inventory = [];

  return {

    loadInventory: function (callback) {
      var inventoryRequest = new XMLHttpRequest();

      inventoryRequest.open("GET", "../inventory.json");
      inventoryRequest.send();
      inventoryRequest.addEventListener("load", function () {
      	var data = JSON.parse(this.responseText);
      	inventory = data.cars;
      callback(inventory)
      });

    },

    getInventory: function () {
    	return inventory;
    }
  };

})();
