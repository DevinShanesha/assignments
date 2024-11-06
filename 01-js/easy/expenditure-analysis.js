/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  
  const categories = new Map(); // creating empty map
  transactions.forEach( obj => {
    let category_ = obj["category"];
    if(categories.has( category_ ) ){
      let amountSpent = categories.get( category_ );
      categories.set(category_, amountSpent + obj["price"] )
    } else {
      categories.set(obj["category"], obj["price"]);
    }
  });

  const totalSpentByCategory = Array.from(categories, ([category, totalSpent]) => {
    return {
      category,
      totalSpent
    }
  });
  return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
