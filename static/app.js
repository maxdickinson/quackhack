// Initialize API

Twitch.init({clientId: 'fit1xqstrdo3xqttn2zkfy8shozcsgf'}, function(error, status){
  if(error) {
    // If error encountered while loading
    console.error(error);
  }
  if(status.authenticated){
    // Tell console authentication == Success
    $('.twitch-connect').hide();
    console.log("Authentication successful of client ID: fggf2ntfyarqxw7sl16vwrq36rzcs26");
  }
});

// Allow login
$('.twitch-connect').click(function(){
  Twitch.login({
    redirect_uri: "http://128.223.17.130:8080/",
    scope: ['user_read', 'channel_read']
  });
})

// Parse Token
var tokenHash = location.hash;

var token = () => {
  var token_string = {};
  var splitHash = tokenHash.split("&");
  for(var i=0; i<splitHash.length; i++){
    var pair = splitHash[i].split("=");
  }
  return pair;
};

// Directly request 'profile' info

var streams = {};
Twitch.api({method: 'user'}, function(error, user){
    console.log(user.display_name);
});


