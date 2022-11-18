var users = []
$( document ).ready(function() {
users = [];

  $.ajax({
    url: "https://65.21.248.233:8082/utenti",
    type: "GET",
    success: function(response) {
      for(var i = 0; i < response.length; i++) {
        users.push(response[i]);
      }
    },
    error: function(xhr) {

    }
});
});

function login() {
  var check = false;
  for(var i = 0; i < users.length; i++) {
    if ($("#username").val() == users[i].username+'' && $("#password").val() == users[i].password+'') {
      
      sessionStorage.setItem('utenteId', users[i].idUtente)
      check = true;
      window.location.assign("../home.html");
    }
  }
  if(check == false) {
    alert("Username e/o password errati");
  }
  }
  $('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



