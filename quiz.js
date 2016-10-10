var xhr = new XMLHttpRequest();

xhr.onload = function () {
	if (xhr.status === 200) {
		responseObject = JSON.parse(xhr.responseText);

	var newContent = '';
	for (var i = 0; i < responseObject.cars.length; i++) {
		newContent += '<div class="object">';
		newContent += responseObject.cars[i].make + '<br>';
		newContent += responseObject.cars[i].model + '<br>';
		newContent += responseObject.cars[i].year + '<br>';
		newContent += responseObject.cars[i].price + '<br>';
		newContent += responseObject.cars[i].description + '<br>';
		newContent += '</div>';
		}
	document.getElementById('car-inventory').innerHTML = newContent;	
	}
};

xhr.open('GET', 'inventory.json', true);
xhr.send(null);