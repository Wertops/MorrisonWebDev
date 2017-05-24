function handleClick(resultno, amountresultclicked){         
  var amountresultclicked = 0;          
  for(var i = 1; i <= 45; i++) {
    var radios = document.getElementsByName('group'+i);
    for(var j = 0; j < radios.length; j++) {
       var radio = radios[j];
      if(radio.value == "resultno" && radio.checked) {
        amountresultclicked++;
      }
    }
  }                   
} 
function Redirect() {
  window.location="http://www2.ncssm.edu/~morrison/currentClasses/";
}


 
 
