//var ws = new WebSocket("ws://james.princesspeach.nyc:3000"); //for running on http
var ws = new WebSocket("ws://localhost:3000"); //for running locally

ws.addEventListener("message", function(evt){
  var ul = document.querySelector("ul");
  var newLi = document.createElement("li");
  var messageText = evt.data;
  var messageArray = messageText.split(" ");
  for (i=0; i<=messageArray.length; i++){
    if (messageArray[i] === "(tableflip)"){
      messageArray.splice(i, 1, "(╯°□°）╯︵ ┻━┻");
    }
    else if (messageArray[i] === "/yell"){
      messageArray.splice(i, 1);
      for (i; i<messageArray.length; i++){
        messageArray[i] = (messageArray[i]).toUpperCase();
      }
    }
  }
  newLi.innerText = messageArray.join(" ");
  ul.appendChild(newLi);
});

var message = document.getElementById("input");
var namebox = document.getElementById("namebox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
  var hash = {name: namebox.value}
  hash["words"] = message.value;
  var stuff = JSON.stringify(hash);
  ws.send(stuff);
  message.value = "";
});

message.addEventListener("keypress", function(){
  if (event.keyCode === 13){
    var hash = {name: namebox.value}
    hash["words"] = (message.value).toString().trim();
    var stuff = JSON.stringify(hash);
    ws.send(stuff);
    message.value = "";
  };
});
