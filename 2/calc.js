function updatePrice() {
	let price = 0;
	let prices = getPrices();
	let count = parseInt(document.getElementById("number").value);
	//document.getElementById("number").value;

	let s = document.getElementsByName("productType");
	let select = s[0];
	let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
        price = prices.productTypes[priceIndex]*count;
    }
	
	// Смотрим какая товарная опция выбрана.
	let radios = document.getElementsByName("productOptions");
	radios.forEach(function(radio) {
  		if (radio.checked) {
    		let optionPrice = prices.productOptions[radio.value];
    		if (optionPrice !== undefined) {
      			price += optionPrice;
    		}
  		}
	});

	// Смотрим какие товарные свойства выбраны.
	  let checkboxes = document.querySelectorAll("#checkboxes input");
	  checkboxes.forEach(function(checkbox) {
	    if (checkbox.checked) {
	      let propertyPrice = prices.productProperties[checkbox.name];
	      if (propertyPrice !== undefined) {
	        price += propertyPrice;
	      }
	    }
	  });

	let productPrice = document.getElementById("productPrice");
 	productPrice.innerHTML = price + " рублей";
 	productPrice.style.fontWeight = "bold";

}

function getPrices() {
  return {
    productTypes: [2190, 2890, 4790, 1490, 2390, 1790, 1990, 3390, 3590],
    productOptions: {
      option1: 890,
      option2: 690,
      option3: 490,
    },
    productProperties: {
    	properties: 390,
    }
  };
}



	//Скрываем или показываем радиокнопки
    window.addEventListener('DOMContentLoaded', function (event) {
    	let radioDiv = document.getElementById("radios");
  		radioDiv.style.display = "none";

  		let checkboxesDiv = document.getElementById("checkboxes");
  		checkboxesDiv.style.display = "none";

  		//Находим select
	  let product = document.getElementsByName("productType");
	  

	  document.getElementById("number").addEventListener("input", updatePrice);
	  //
	  product[0].addEventListener("change", function(event) {
	    let select = event.target;
	    console.log(select.value);
	    updatePrice();
	    let radios = document.getElementById("radios");
	    //console.log(select.value);
	    // Можно использовать getElementsByClassName()
	    if (select.value == "1") {
	      radios.style.display = "none";
	      checkboxes.style.display = "none";
	    }
	    if (select.value == "2") {
	      radios.style.display = "flex";
	      checkboxes.style.display = "none";
	    }
	    if (select.value == "3") {
	      radios.style.display = "none";
	      checkboxes.style.display = "flex";
	    }
	    if (select.value >= "4") {
	      radios.style.display = "flex";
	      checkboxes.style.display = "flex";
	    }
	  });

	  //Назначаем обработчик радиокнопок
		let r = document.querySelectorAll("#radios input[type=radio]");
	  	r.forEach(function(radio) {
	    radio.addEventListener("change", function(event) {
	      let r = event.target;
	      console.log(r.value);
	      updatePrice();
	    });
	  //Назначаем обработчик чекбокса
	  let checkboxes = document.querySelectorAll("#checkboxes input");
	  	checkboxes.forEach(function(checkbox) {
	    checkbox.addEventListener("change", function(event) {
	      let c = event.target;
	      console.log(c.name);
	      console.log(c.value);
	      updatePrice();
	      });
	  	});

  });
	updatePrice();
  });
