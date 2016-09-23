$(document).ready(function() {
  var rst = function() {
    $('p').remove();
    $('div').removeClass('xEd oEd');
    count = 0;
  }
  var count = 0;
  $('button').click(function(){
  	rst();
  });
  $('.gameSpace').click(function() {
    if (count % 2 === 0) {
      if ($(this).hasClass('xEd')) {
        return false;
      } else if ($(this).hasClass('oEd')) {
        return false;
      }
      $(this).prepend('<p>X</p>');
      $(this).css('color', 'red');
      $(this).addClass('xEd');
    } else {
      if ($(this).hasClass('xEd')) {
        return false;
      } else if ($(this).hasClass('oEd')) {
        return false;
      }
      $(this).prepend('<p>O</p>');
      $(this).css('color', 'blue');
      $(this).addClass('oEd');
    }
    count++;
    if ($("#a1").hasClass('xEd') && $("#a2").hasClass('xEd') && $("#a3").hasClass('xEd') === true) {
      alert('Player "X" win!');
      rst();
    } else if ($("#b1").hasClass('xEd') && $("#b2").hasClass('xEd') && $("#b3").hasClass('xEd') === true) {
      alert('Player "X" win!');
      rst();
    } else if ($("#c1").hasClass('xEd') && $("#c2").hasClass('xEd') && $("#c3").hasClass('xEd') === true) {
      alert('Player "X" win!');
      rst();
    } else if ($("#a1").hasClass('xEd') && $("#b1").hasClass('xEd') && $("#c1").hasClass('xEd') === true) {
      alert('Player "X" win!');
      rst();
    } else if ($("#a2").hasClass('xEd') && $("#b2").hasClass('xEd') && $("#c2").hasClass('xEd') === true) {
      alert('Player "X" win!');
      rst();
    } else if ($("#a3").hasClass('xEd') && $("#b3").hasClass('xEd') && $("#c3").hasClass('xEd') === true) {
      alert('Player "X" win!');
      rst();
    } else if ($("#a1").hasClass('xEd') && $("#b2").hasClass('xEd') && $("#c3").hasClass('xEd') === true) {
      alert('Player "X" win!');
      rst();
    } else if ($("#a3").hasClass('xEd') && $("#b2").hasClass('xEd') && $("#c1").hasClass('xEd') === true) {
      alert('Player "X" win!');
      rst();
    } else if ($("#a1").hasClass('oEd') && $("#a2").hasClass('oEd') && $("#a3").hasClass('oEd') === true) {
      alert('Player "O" win!');
      rst();
    } else if ($("#b1").hasClass('oEd') && $("#b2").hasClass('oEd') && $("#b3").hasClass('oEd') === true) {
      alert('Player "O" win!');
      rst();
    } else if ($("#c1").hasClass('oEd') && $("#c2").hasClass('oEd') && $("#c3").hasClass('oEd') === true) {
      alert('Player "O" win!');
      rst();
    } else if ($("#a1").hasClass('oEd') && $("#b1").hasClass('oEd') && $("#c1").hasClass('oEd') === true) {
      alert('Player "O" win!');
      rst();
    } else if ($("#a2").hasClass('oEd') && $("#b2").hasClass('oEd') && $("#c2").hasClass('oEd') === true) {
      alert('Player "O" win!');
      rst();
    } else if ($("#a3").hasClass('oEd') && $("#b3").hasClass('oEd') && $("#c3").hasClass('oEd') === true) {
      alert('Player "O" win!');
      rst();
    } else if ($("#a1").hasClass('oEd') && $("#b2").hasClass('oEd') && $("#c3").hasClass('oEd') === true) {
      alert('Player "O" win!');
      rst();
    } else if ($("#a3").hasClass('oEd') && $("#b2").hasClass('oEd') && $("#c1").hasClass('oEd') === true) {
      alert('Player "O" win!');
      rst();
    } else if (count === 9) {
      alert('It\'s a Draw!');
      rst();
    }
  });
});
