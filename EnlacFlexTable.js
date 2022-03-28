$(function () {
  generateTable();
});

$(window).resize(function () {
  generateTable();
});

function generateTable() {
  $('.column').css({ width: '18%' });
  $('.cell').css({ width: '100%' });
  $('.column, .cell').css({ 'word-break': 'break-word' });
}
