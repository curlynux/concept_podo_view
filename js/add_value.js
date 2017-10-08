$(document).ready(function()  {
  var td = $('td');
  td.attr("id", "td");
  var valeur = "<input type='text' name='value' value=''>"
  td.on('click', function() {
    $(this).append(valeur);
  });
});
