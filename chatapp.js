//var ws = new WebSocket("ws://james.princesspeach.nyc:3000"); //for running on http
var ws = new WebSocket("ws://localhost:3000"); //for running locally

ws.addEventListener("message", function(evt){
  var ul = document.querySelector("ul");
  var newLi = document.createElement("li");
  newLi.innerText = evt.data;
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
