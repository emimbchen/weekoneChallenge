console.log('javascript sourced');

$(queryGo);

function queryGo(){
  console.log('query went');
$('button').on('click', buttonClick);
}
var inputValue;
function buttonClick(){
var trow = $('#tableDiv').append('<tr></tr>');
var $inputArray = $('#inputDiv').children();
for(var i = 0; i < ($inputArray).length; i++){
var inputValue = $($inputArray[i]).val();
$(trow).append('<td>' + inputValue + '</td>');
}
}
