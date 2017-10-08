(function() {
  // Load the script
  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
  script.type = 'text/javascript';
  script.onload = function() {
    var $ = window.jQuery;
    var form = {
      get : function(){
        $.ajax({
          url: "http://192.168.1.70:3000/api/v1/suggests",
          type: 'GET',
          success: function(data) {
            form.display(data);
          },
          error: function(data) {

          }
        });
      },

      add : function(){
        $.ajax({
          url: "http://192.168.1.70:3000/api/v1/entry",
          type: 'POST',
          data: {

          },
          success: function(data) {
            console.log('send')
          },
          error: function(data) {

          }
        });
      },

      display : function(data){
        var valeur = data.result
        for (var key in valeur) {
          for (var item in valeur[key].doc) {
            console.log(item, '=', valeur[key].doc[item]);

            $('#res td').text(valeur[key].doc[item]);
            // console.log(td);
          }
        }
      }
    }
    form.get();
  };
  document.getElementsByTagName("head")[0].appendChild(script);
})();
