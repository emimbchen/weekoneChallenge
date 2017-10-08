console.log('javascript sourced');

$(queryGo);

function queryGo(){
  console.log('query went');
  $('button').on('click', buttonClick);
  $('table').on('click', 'button', removeButton);
}

var totalCosts;
//when button is clicked add all inputs to table
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
  return totalCosts;
}

//function for the math
function calculateCosts(salary){
  var $currentTotal = parseInt($('span').text());
  salary= Math.round(salary/12);
  $currentTotal += salary;
  return $currentTotal;
}

function removeButton(){
  var $buttonRow = $(this).parent().parent();
  var $rowData = $($buttonRow).children()[4];
  var $income = parseInt( $($rowData).text() );
  //removes income from totalCosts
  $income = Math.round($income/12);
  totalCosts= totalCosts - $income;
  $('span').text(totalCosts);
  //removes button row
  $($buttonRow).remove();
  return totalCosts;
}
