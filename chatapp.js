var ws = new WebSocket("ws://james.princesspeach.nyc:80");

ws.addEventListener("message", function(evt){
  var body = document.querySelector("body");
  var newP = document.createElement("p");
  newP.innerText = evt.data;
  body.appendChild(newP);
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
