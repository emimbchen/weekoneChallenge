console.log('javascript sourced');

$(queryGo);

function queryGo(){
  console.log('query went');
$('button').on('click', buttonClick);
}

var salaryArray = [];
//when buton is clicked add all inputs to table
function buttonClick(){
//resets rowData per click
var rowData = "";
//creates row via for loop
 var $inputArray = $('#inputDiv').children();
 for(var i = 0; i < ($inputArray).length; i++){
 var inputValue = $($inputArray[i]).val();
 rowData+= "<td>" + inputValue + "</td>";
 }
 //append row after array is complete
 var trow = $('table').append('<tr>' + rowData + '<td>' + '<button>' + 'Remove' +'</button>'+ '</td>' + '</tr>');

//create an array of salaries

 var salary = parseInt($($inputArray[4]).val());
    salaryArray.push(salary);

 //clear input values
$('input').val('');

//calculate the costs
var totalCosts;
totalCosts = calculateCosts(salaryArray);
$('span').text(totalCosts);
}

//function for the math
function calculateCosts(array){
var total = 0;
  for( var j = 0; j < array.length; j++){
    total += array[j];
}
return total;
}
