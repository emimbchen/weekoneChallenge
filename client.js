console.log('javascript sourced');

$(queryGo);

function queryGo(){
  console.log('query went');
$('button').on('click', buttonClick);
}
var inputValue;
var $inputArray;

function buttonClick(){
 var trow = $('table').append('<tr></tr>');
 var $inputArray = $('#inputDiv').children();
 for(var i = 0; i < ($inputArray).length; i++){
 var inputValue = $($inputArray[i]).val();
 $(trow).append('<td>' + inputValue + '</td>');
 }
}
