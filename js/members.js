$(document).ready(function () {
	var members = $('#members');
    if (members) {
        var children = members.children();
        var orderArray = new Array();
        for (var i = 0  ;  i < children.length  ;  i++) {
            orderArray.push(i);
        }
        orderArray = shuffle(orderArray);
        for (var i = 0  ;  i < children.length  ;  i++) {
            console.log(children[i]);
            children[i].style.order = orderArray[i].toString();
        }
    }
});

/*
 * with thanks to stackoverflow
 * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}