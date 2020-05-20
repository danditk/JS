
var tabliczka = 3;
var msg = ' ';

for (var i = 0; i < 11; i++){
  msg += '<p>'
  for (var j = 0; j < 11; j++) {
    var wynik = i * j
    msg += i + " * " + j +  " = " + wynik + " -> ";
  }
  msg += '</p>'
}

var el = document.getElementById('pudelko');
el.innerHTML = msg;
