
var Adjective = [ 'stinky', 'smelly', 'ugly', 'useless', 'dirty', 'nasty', 'silly', 'dopey', 'ugly', 'corny', 'sappy', 'dumb', 'chubby', 'flubby'];

var Noun = [ 'dog', 'booger', 'knob', 'dork', 'nerd', 'geek', 'airhead', 'snot', 'poop', 'lizard', 'puppet', 'butt', 'hole', 'simpleton', 'teletubby'];


$(document).ready(function() {
  //will pick random adjective, firstNoun, and secondNoun and combine as a string
  // will check if any are the same, if they are will run again
  //load message into div
  // store it in link
  //clicking link will take to twitter
  //generate will update
  var insult = 'chubby, flubby, teletubby'
  $('#generateInsult').on('click', function() {
      var adj = Adjective[Math.floor(Math.random() * Adjective.length)];
      var noun1 = Noun[Math.floor(Math.random() * Noun.length)];
      var noun2 = Noun[Math.floor(Math.random() * Noun.length)];
      if (noun2 === noun1) {
        var noun2 = Noun[Math.floor(Math.random() * Noun.length)];
        var noun1 = Noun[Math.floor(Math.random() * Noun.length)];
      };
      insult = 'You ' + adj + ', ' + noun1 + ' ' + noun2 + '.';
      $('#insult').text(insult);
      $("a").attr("href", "https://twitter.com/intent/tweet?text=" + insult);
    });
});