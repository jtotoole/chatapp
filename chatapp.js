//var ws = new WebSocket("ws://james.princesspeach.nyc:3000"); //for running on http
var ws = new WebSocket("ws://localhost:3000"); //for running locally

ws.addEventListener("message", function(evt){
  var ul = document.querySelector("ul");
  var newLi = document.createElement("li");
  var messageText = evt.data;
  var messageArray = messageText.split(" ");
  for (i=0; i<messageArray.length; i++){
    var messageWord = messageArray[i];
    var messageLink = messageWord.substring(0,7);
    if (messageArray[i] === "(tableflip)"){
      messageArray.splice(i, 1, "(╯°□°）╯︵ ┻━┻");
    }
    else if (messageArray[i] === "/yell"){
      messageArray.splice(i, 1);
      for (i; i<messageArray.length; i++){
        messageArray[i] = (messageArray[i]).toUpperCase();
      }
    }
    else if (messageArray[i] === "(shrug)"){
      messageArray.splice(i, 1, "¯\_(ツ)_/¯");
    }
    else if (messageArray[i] === "(smile)"){
      messageArray.splice(i, 1, "(✿◠‿◠)");
    }
    else if (messageArray[i] === "(eyebrow)"){
      messageArray.splice(i, 1, "(͡° ͜ʖ ͡°)");
    }
    else if (messageArray[i] === "(anger)"){
      messageArray.splice(i, 1, "(ಠ_ಠ)");
    }
    else if (messageArray[i] === "(ping pong)"){
      messageArray.splice(i, 1, "( •_•)O*¯`·.¸.·´¯`°Q(•_• )");
    }
    else if (messageArray[i] === "(surprise)"){
      messageArray.splice(i, 1, "(ﾉﾟ0ﾟ)ﾉ");
    }
    else if (messageArray[i] === "(tears)"){
      messageArray.splice(i, 1, "༼ ༎ຶ ෴ ༎ຶ༽");
    }
    else if (messageArray[i].substring(0, 4) === "http"){
    var link = messageArray[i];
    var linkTag = ("<a href='" + link + "'>" + link + "</a>");
    messageArray.splice(i, 1, linkTag);
    }
  }
  newLi.innerHTML = "<li>" + messageArray.join(" ") + "</li>";
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
