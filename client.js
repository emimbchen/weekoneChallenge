console.log('javascript sourced');

$(queryGo);

function queryGo(){
  console.log('query went');
$('button').on('click', buttonClick);
$('table').on('click', 'button', removeButton);
}

var totalCosts;
//when buton is clicked add all inputs to table
function buttonClick(){
//resets rowData per click
var rowData;
//creates row via "for" loop
 var $inputArray = $('#inputDiv').children();
 for(var i = 0; i < ($inputArray).length - 1; i++){
 var inputValue = $($inputArray[i]).val();
 rowData+= "<td>" + inputValue + "</td>";
 }
 //append row after array is complete
 //adds the remove button to row
 var trow = $('table').append('<tr>' + rowData + '<td>' + '<button>' + 'Remove' +'</button>'+ '</td>' + '</tr>');

//add salary to $('span')
 var salary = parseInt($($inputArray[4]).val());

 //clear input values
$('input').val('');

//calculate the costs
totalCosts = calculateCosts(salary);
$('span').text(totalCosts);
}

//function for the math
function calculateCosts(salary){
var $currentTotal = parseInt($('span').text());
salary= salary/12;
$currentTotal += salary;
return $currentTotal;
}

function removeButton(){
  //subtracts from totalCosts
  var $buttonRow = $(this).parent().parent();
  var $income = $($buttonRow).children()[4];
  //removes button row
  $($buttonRow).remove();
}
