var result1 = 0;
var result2 = 0;
var result3 = 0;
var result4 = 0;
var Resultdict = {
  "result1": "",
  "result2": "idk",
  "result3": "some value"
  "result4": "idk"
};
var tempHigh = 0;
//change amountresultclicked to the above result variable that you want
function handleClick(resultno, amountresultclicked){                  
  for(var i = 1; i <= 45; i++) {
    var radios = document.getElementsByName('group'+i);  
    for(var j = 0; j < radios.length; j++) {
       var radio = radios[j];
      if(radio.value == "resultno" && radio.checked) {
        amountresultclicked++;
      }
    }
  }   
   for(var i = 1; i <= resultsize; i++){
    if (tempHigh < ["result" + i]){
      tempHigh = ["result" + i]
    }
  }
  //tomorrow morning iterate through some text
  window.alert("Your result is" Resultdict[tempHigh])
}
} 
function Redirect() {
  window.location="http://www2.ncssm.edu/~morrison/currentClasses/";
}

//resultsize is the number of results

   


 
 
