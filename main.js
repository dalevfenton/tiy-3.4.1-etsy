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



}());
