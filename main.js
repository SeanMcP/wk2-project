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
  avgPrice = priceSum / priceSum.length;
  return avgPrice;
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let priceRange14to18 = [];
  for (let i = 0; i < data.length; i++) {
    if ((data[i].price < 18) && (data[i].price > 14)) {
      priceRange14to18.push(data[i]);
    }
  }
  return priceRange14to18;
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
  return gBP;
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let woodItems = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials == "wood") { //Intentionally used two == to allow for imperfect truths
      woodItems.push(data[i]);
    }
  }
  return woodItems
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
  return eightPlusMaterials;
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let artisans = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      artisans.push(data[i]);
    }
  }
  return artisans;
}
