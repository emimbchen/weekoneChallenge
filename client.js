console.log('javascript sourced');

$(queryGo);

function queryGo(){
  console.log('query went');
$('button').on('click', buttonClick);
$('table').on('click', 'button', removeButton);
}

var salaryArray = [];
var totalCosts;
//when buton is clicked add all inputs to table
function buttonClick(){
//resets rowData per click
var rowData = '';
//creates row via "for" loop
 var $inputArray = $('#inputDiv').children();
 for(var i = 0; i < ($inputArray).length - 1; i++){
 var inputValue = $($inputArray[i]).val();
 rowData+= "<td>" + inputValue + "</td>";
 }
 //append row after array is complete
 //adds the remove button to row
 var trow = $('table').append('<tr>' + rowData + '<td>' + '<button>' + 'Remove' +'</button>'+ '</td>' + '</tr>');

//create an array of salaries
 var salary = parseInt($($inputArray[4]).val());
    salaryArray.push(salary);

 //clear input values
$('input').val('');

//calculate the costs
totalCosts = calculateCosts(salaryArray);
$('span').text(totalCosts);
return totalCosts;
}

//function for the math
function calculateCosts(array){
var total = 0;
  for( var j = 0; j < array.length; j++){
    total += array[j];
}
return total;
}

//removes tr when remove button is clicked
function removeButton(){
  var $buttonRow = $(this).parent().parent();
  console.log(parseInt($(this).closest().val()));
  $($buttonRow).remove();

  //try to id the td of tr of this.

}
