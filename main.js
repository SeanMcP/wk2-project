// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let avgPrice = 0;
  let priceSum = 0;
  for (let i = 0; i < data.length; i++) {
    priceSum += data[i].price;
  }
  avgPrice = priceSum / data.length;
  let roundAvg = avgPrice.toFixed(2);
  console.log("The average price is $" + roundAvg);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let priceRange14to18 = [];
  for (let i = 0; i < data.length; i++) {
    if ((data[i].currency_code === "USD") && ((data[i].price <= 18) && (data[i].price >= 14))) {
      priceRange14to18.push(data[i]);
    }
  }
  for (var i = 0; i < priceRange14to18.length; i++) {
    console.log(priceRange14to18[i].title);
  }
  // console.log(priceRange14to18);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let gBP = [];
  for (i = 0; i < data.length; i++){
    if (data[i].currency_code === "GBP") {
      gBP.push(data[i]);
    }
  }
  console.log(gBP[0].title + " costs " + gBP[0].price + " pounds.");
}

// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] === "wood") {
        console.log(data[i].title + " is made of wood.");
      }
    }
  }
}




// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let eightPlusMaterials = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      eightPlusMaterials.push(data[i]);
    }
  }
  for (var i = 0; i < eightPlusMaterials.length; i++) {
    console.log(eightPlusMaterials[i].title + " has " + eightPlusMaterials[i].materials.length + " materials:");
    for (var j = 0; j < eightPlusMaterials[i].materials.length; j++) {
      console.log("- " + eightPlusMaterials[i].materials[j]);
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let artisans = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      artisans += 1;
    }
  }
  console.log(artisans + " items were made by their sellers.");
}
