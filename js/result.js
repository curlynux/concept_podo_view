var form = {
  get : function(){
    $.ajax({
      url: "http://192.168.1.70:3000/api/v1/suggests",
      type: 'GET',
      success: function(data) {
        console.log(data, 'data');
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
    console.log('data', data);
    for (var key in data.result) {
      console.log(data.result[key], 'value');
    }
    /*   for (var memberKey in json.table[key].member) {

    var table = json.table[key].number;
    this.CreateTable(json.table[key]);
    if (json.table[key].member[memberKey].nom) {
    var users = json.table[key].member[memberKey].nom;
    var userId = json.table[key].member[memberKey].id;
    this.pushUsersToTab(users, table, userId)
  }
}*/
}
}
form.get();