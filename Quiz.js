var result1 = 0;
var result2 = 0;
var result3 = 0;
var result4 = 0;
var Resultdict = {
  result1: "A",
  result2: "E",
  result3: "I",
  result4: "U"
};

var Resultdict = {
  result1: "A",
  result2: "E",
  result3: "I",
  result4: "U"
};
var Valuedict = {
  result1: 0,
  result2: 0,
  result3: 0,
  result4: 0
};

var tempHigh = 0;
//change amountresultclicked to the above result variable that you want
function click(resultno){                  
  for(var i = 1; i <= 10; i++) {
    var radios = document.getElementsByName('group'+i);  
    for(var j = 0; j < radios.length; j++) {
       var radio = radios[j];
       if(radio.value == "resultno" && radio.checked) {
        Valuedict[resultno]+=1;
      }
    }
  }  
	console.log(Valuedict);
}


var Newresult;
function handleClick(){
	for (var g=1; g < 5; g++){
		click("result" + g, "result" + g)
	} 
	for(var i = 1; i <= 4; i++){
		if (tempHigh < Valuedict["result" + i]){
			tempHigh = Valuedict["result" + i];   // will that work since string
			Newresult = "result" + i;
		}
	}
	window.alert("Your result is " + Resultdict[Newresult]);
}

//resultsize is the number of results
console.log(Valuedict);
console.log(Resultdict);
   


 
 
