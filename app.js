// Initial array of stocks
const stocks = ['FB', 'AAPL'];
// Validation list
const validationList = []

// Store all available stocks in this array as the validation list
$.ajax({
  url: 'https://api.iextrading.com/1.0/ref-data/symbols?filter=symbol',
  method: 'GET'
}).then(function(response) {
  for (let i = 0; i < response.length; i++) {
    const element = response[i].symbol;
    validationList.push(element);
  }
})

// displaystockInfo function re-renders the HTML to display the appropriate content
const displayStockInfo = function () {
  // Grab the stock symbol from the button clicked and add it to the queryURL
  const stock = $(this).attr('data-name');
  
  const queryURL = `https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote,news,logo&last=10`;
  // Creating an AJAX call for the specific stock button being clicked
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    // Creating a div to hold the stock
    const stockDiv = $('<div>').addClass('stock');

    // Storing the company name
    const companyName = response.quote.companyName;

    // Creating an element to display the company name
    const nameHolder = $('<p>').text(`Company Name: ${companyName}`);

    // Appending the name to our stockDiv
    stockDiv.append(nameHolder);

    // Storing the stock symbol
    const stockSymbol = response.quote.symbol;

    // Creating an element to display the stock symbol
    const symbolHolder = $('<p>').text(`Stock Symbol: ${stockSymbol}`);

    // Appending the symbol to our stockDiv
    stockDiv.append(symbolHolder);

    // Storing the price
    const stockPrice = response.quote.latestPrice;

    // Creating an element to display the price
    const priceHolder = $('<p>').text(`Stock Price: $${stockPrice}`);

    // Appending the price to our stockDiv
    stockDiv.append(priceHolder);

    // Storing the first news summary
    var companyURL1 = undefined
    var companyURL2 = undefined
    var companyURL3 = undefined
    var companyURL4 = undefined
    var companyURL5 = undefined
    var companyURL6 = undefined
    var companyURL7 = undefined
    var companyURL8 = undefined
    var companyURL9 = undefined
    var companyURL10 = undefined

    var newsHeadline1 = undefined
    var newsHeadline2 = undefined
    var newsHeadline3 = undefined
    var newsHeadline4 = undefined
    var newsHeadline5 = undefined
    var newsHeadline6 = undefined
    var newsHeadline7 = undefined
    var newsHeadline8 = undefined
    var newsHeadline9 = undefined
    var newsHeadline10 = undefined
    if (typeof(response.news[0]) !== 'undefined') {  companyURL1 = response.news[0].url;   }
    if (typeof(response.news[1]) !== 'undefined') {  companyURL2 = response.news[1].url;   }
    if (typeof(response.news[2]) !== 'undefined') {  companyURL3 = response.news[2].url;   }
    if (typeof(response.news[3]) !== 'undefined') {  companyURL4 = response.news[3].url;   }
    if (typeof(response.news[4]) !== 'undefined') {  companyURL5 = response.news[4].url;   }
    if (typeof(response.news[5]) !== 'undefined') {  companyURL6 = response.news[5].url;   }
    if (typeof(response.news[6]) !== 'undefined') {  companyURL7 = response.news[6].url;   }
    if (typeof(response.news[7]) !== 'undefined') {  companyURL8 = response.news[7].url;   }
    if (typeof(response.news[8]) !== 'undefined') {  companyURL9 = response.news[8].url;   }
    if (typeof(response.news[9]) !== 'undefined') {  companyURL10 = response.news[9].url;   }
    // News Headlines
    if (typeof(response.news[0]) !== 'undefined') {  newsHeadline1 = response.news[0].headline;   }
    if (typeof(response.news[1]) !== 'undefined') {  newsHeadline2 = response.news[1].headline;   }
    if (typeof(response.news[2]) !== 'undefined') {  newsHeadline3 = response.news[2].headline;   }
    if (typeof(response.news[3]) !== 'undefined') {  newsHeadline4 = response.news[3].headline;   }
    if (typeof(response.news[4]) !== 'undefined') {  newsHeadline5 = response.news[4].headline;   }
    if (typeof(response.news[5]) !== 'undefined') {  newsHeadline6 = response.news[5].headline;   }
    if (typeof(response.news[6]) !== 'undefined') {  newsHeadline7 = response.news[6].headline;   }
    if (typeof(response.news[7]) !== 'undefined') {  newsHeadline8 = response.news[7].headline;   }
    if (typeof(response.news[8]) !== 'undefined') {  newsHeadline9 = response.news[8].headline;   }
    if (typeof(response.news[9]) !== 'undefined') {  newsHeadline10 = response.news[9].headline;   }

    // Creating an element to display the news summary
    if (typeof(companyURL1) !== 'undefined') { summaryHolder1 = $('<p>').append(`News Article 1: <a href="${companyURL1}">${newsHeadline1}</a>`); }
    if (typeof(companyURL2) !== 'undefined') { summaryHolder2 = $('<p>').append(`News Article 2: <a href="${companyURL2}">${newsHeadline2}</a>`); }
    if (typeof(companyURL3) !== 'undefined') { summaryHolder3 = $('<p>').append(`News Article 3: <a href="${companyURL3}">${newsHeadline3}</a>`); }
    if (typeof(companyURL4) !== 'undefined') { summaryHolder4 = $('<p>').append(`News Article 4: <a href="${companyURL4}">${newsHeadline4}</a>`); }
    if (typeof(companyURL5) !== 'undefined') { summaryHolder5 = $('<p>').append(`News Article 5: <a href="${companyURL5}">${newsHeadline5}</a>`); }
    if (typeof(companyURL6) !== 'undefined') { summaryHolder6 = $('<p>').append(`News Article 6: <a href="${companyURL6}">${newsHeadline6}</a>`); }
    if (typeof(companyURL7) !== 'undefined') { summaryHolder7 = $('<p>').append(`News Article 7: <a href="${companyURL7}">${newsHeadline7}</a>`); }
    if (typeof(companyURL8) !== 'undefined') { summaryHolder8 = $('<p>').append(`News Article 8: <a href="${companyURL8}">${newsHeadline8}</a>`); }
    if (typeof(companyURL9) !== 'undefined') { summaryHolder9 = $('<p>').append(`News Article 9: <a href="${companyURL9}">${newsHeadline9}</a>`); } 
    if (typeof(companyURL10) !== 'undefined') { summaryHolder10 = $('<p>').append(`News Article 10: <a href="${companyURL10}">${newsHeadline10}</a>`); }

    // Appending the summary to our stockDiv
    if (typeof(summaryHolder1) !== 'undefined') { stockDiv.append(summaryHolder1); }
    if (typeof(summaryHolder2) !== 'undefined') { stockDiv.append(summaryHolder2); }
    if (typeof(summaryHolder3) !== 'undefined') { stockDiv.append(summaryHolder3); }
    if (typeof(summaryHolder4) !== 'undefined') { stockDiv.append(summaryHolder4); }
    if (typeof(summaryHolder5) !== 'undefined') { stockDiv.append(summaryHolder5); }
    if (typeof(summaryHolder6) !== 'undefined') { stockDiv.append(summaryHolder6); }
    if (typeof(summaryHolder7) !== 'undefined') { stockDiv.append(summaryHolder7); }
    if (typeof(summaryHolder8) !== 'undefined') { stockDiv.append(summaryHolder8); }
    if (typeof(summaryHolder9) !== 'undefined') { stockDiv.append(summaryHolder9); }
    if (typeof(summaryHolder10) !== 'undefined') { stockDiv.append(summaryHolder10); }

    // Storing the logo
    const logo = response.logo.url;

    // Creating an element to display the logo
    const logoHolder = $('<img>').attr("src", `${logo}`);

    // Appending the logo to our stockDiv
    stockDiv.prepend(logoHolder);

    // Finally adding the stockDiv to the DOM
    // Until this point nothing is actually displayed on our page
    $('#stocks-view').append(stockDiv);
  });

}

// Function for displaying stock data
const render = function () {
  // check the stock with the validation array and only after it has been validated then you can display it

  // Deleting the stocks prior to adding new stocks
  // (this is necessary otherwise you will have repeat buttons)
  $('#buttons-view').empty();

  // Looping through the array of stocks
  for (let i = 0; i < stocks.length; i++) {

    // Then dynamicaly generating buttons for each stock in the array
    // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
    const newButton = $('<button>');
    
    // Adding a class of stock-btn to our button
    newButton.addClass('stock-btn');
    
    // Adding a data-attribute
    newButton.attr('data-name', stocks[i]);
    
    // Providing the initial button text
    newButton.text(stocks[i]);
    
    // Adding the button to the buttons-view div
    $('#buttons-view').append(newButton);
  }
}

// This function handles events where one button is clicked
const addButton = function(event) {

  // event.preventDefault() prevents the form from trying to submit itself.
  // We're using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault();

  // This line will grab the text from the input box
  const stock = $('#stock-input').val().trim().toUpperCase();
  // Validate if in array
  if (validationList.includes(stock)) {
    // Only push if stock is included in validationList
    stocks.push(stock);
  }

  // Deletes the contents of the input
  $('#stock-input').val('');

  // calling render which handles the processing of our stock array
  render();
}

// Even listener for #add-stock button
$('#add-stock').on('click', addButton);

// Adding a click event listener to all elements with a class of 'stock-btn'
$('#buttons-view').on('click', '.stock-btn', displayStockInfo);

// Calling the renderButtons function to display the intial buttons
render();