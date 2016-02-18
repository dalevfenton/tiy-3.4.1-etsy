(function(){
  console.dir(items);
  var displayWin = document.querySelector('.report-window');

  // items.forEach( function(currentValue, index, array){
  //   displayWin.innerHTML += currentValue.title + '<br>';
  // } );

  //------------------------------------------------------------
  //              Question 1 - Average Price of Items
  //------------------------------------------------------------
  //tried this with .reduce but couldn't get obj.price to return a value
  var totPrice = 0;
  items.forEach( function(cV, index, array){
    totPrice += cV.price;
  });
  var avgPrice =  (totPrice / items.length).toFixed(2);
  console.log('The average price is $' + avgPrice );
  displayWin.innerHTML += '<h3 class="q-title">Question 1</h3><br>';
  displayWin.innerHTML += '<span class="q-a">The average price is $' + avgPrice + '</span><br>';


  //------------------------------------------------------------
  //        Question 2 - Array of Items Between $14-18
  //------------------------------------------------------------

  function filterItems(value){
    if(value.price > 14 && value.price < 18){
      return true;
    }else{
      return false;
    }
  }

  var filteredItems = items.filter( filterItems );
  console.log( 'Items that cost between $14.00 and $18.00 USD' );
  console.log( filteredItems );
  displayWin.innerHTML += '<h3 class="q-title">Question 2</h3><br>';
  displayWin.innerHTML += '<span class="q-a">Items that cost between $14.00 and $18.00 USD</span><br>';
  filteredItems.forEach(function(cV){
    displayWin.innerHTML += '<span class="q-a">' + cV.title + '</span><br>';
  });


  //------------------------------------------------------------
  //        Question 3 - Item Priced in GBP
  //------------------------------------------------------------
  var filteredGBP = items.filter( function( value ){
    console.log(value.currency_code);
    if( value.currency_code == "GBP" ){
      return true;
    }else{
      return false;
    }
  });
  console.log( 'Items that are priced in GBP:' );
  console.log( filteredGBP[0].title + ' costs ' + filteredGBP[0].price + ' GBP' );
  displayWin.innerHTML += '<h3 class="q-title">Question 3</h3><br>';
  displayWin.innerHTML += '<span class="q-a">Items that cost are priced in GBP</span><br>';
  filteredGBP.forEach(function(cV){
    displayWin.innerHTML += '<span class="q-a">' + cV.title + ' costs ' + cV.price + '&pound;</span><br>';
  });

  //------------------------------------------------------------
  //        Question 4 - Wood Items
  //------------------------------------------------------------
  function sortWood( value ){
    var wood = false;
    value.materials.forEach(function(cV){
       if(cV == 'wood'){
         wood =  true;
       }
     });
     return wood;
  }
  var woodItems = items.filter( sortWood );
  console.log( 'Items that are tagged as Wood:' );
  displayWin.innerHTML += '<h3 class="q-title">Question 4</h3><br>';
  displayWin.innerHTML += '<span class="q-a">Items that tagged as Wood:</span><br>';
  woodItems.forEach( function(cV){
    console.log(cV.title);
    displayWin.innerHTML += '<span class="q-a">' + cV.title + '</span><br>';
  });

}());
