
var spr = window.webkitSpeechRecognition ;
var r = new spr ;

function start() 
{
    document.getElementById("textbox").innerHTML = "" ;
    r.start() ;
}

r.onresult = function (event) 
{
    console.log(event) ;

    var text = event.results[0][0].transcript ;
    console.log(text);

    document.getElementById("textbox").innerHTML = text ;
}