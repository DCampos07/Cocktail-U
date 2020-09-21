//Variables
var searchButton = $(".searchButton");
var drinksListEl = $("#drink-list");
var drinksHistory = $("#saved-searches");
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
var drinks = "" || searchHistory[0];



// for the nav bar
$(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else{
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });
  
  // For loop for persisting the drinks on the DOM
  function loadHistory(){
      for (var i = 0; i < searchHistory.length; i++) {
          var historyDivs = $('<div>');
          historyDivs.addClass("saved-items");
          historyDivs.addClass('list-group-item');
          historyDivs.innerHTML(searchHistory[i]);
          historyDivs.attr("data-index", searchHistory[i]);
          drinkHistory.append(historyDivs);
      }
  } 



//function to call drinks
  $(".drink").on("click", function(){
  console.log($(this))

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
      method: "GET",
      dateType: 'json'
    }).then(function (response) {
      console.log(response)
      for (var i=0; i<response.drinks.length; i++) {
         var drink = response.drinks[i] 
      
      }
    })
});




// Search button click event
searchButton.click(function (event) {
  // event.preventDefault();
  var searchInput = $(".searchInput").val();
  if (searchInput !== "") {
      // var list = $("#saved-searches");
      var drinksName = $("<li>");
      var drinksName2 = $("<a>");
      drinksName2.attr("href","#");
      drinksName2.text(searchInput);
      drinksName.attr("data-index", searchInput);
      drinksName.addClass("saved-items");
      // cityName.text(searchInput);
      // // Local storage
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      drinksName.append(drinksName2);
      drinksHistory.append(drinksName);
  }
  getDrinks(searchInput);
});
$(document).on("click", ".saved-items", function(){
  var drinks = $(this).attr("data-index");
  console.log(city)
  getDrinks(city);
});
$(document).ready(function() {
  loadHistory();
});


// take id from results and add data index in case its clicked.

//add onclick to local storage for each drink

//add shopping cart to save drink order