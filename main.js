(function(){
  console.dir(items);
  var displayWin = document.querySelector('.report-window');

  items.forEach( function(currentValue, index, array){
    displayWin.innerHTML += currentValue.title + '<br>';
  } );
}());
