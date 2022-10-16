
var spr = window.webkitSpeechRecognition ;
var r = new spr ;

function start() 
{
    r.start() ;
}

r.onresult = function (event) 
{
    console.log(event) ;

    var text = event.results[0][0].transcript ;
    console.log(text);

    if(text=="selfie 1")
    {
        console.log("taking selfie1--");
        speak1() ;
    }
    if(text=="selfie 2")
    {
        console.log("taking selfie2--");
        speak2() ;
    }
    if(text=="selfie 3")
    {
        console.log("taking selfie3--");
        speak3() ;
    }
}

function speak1() 
{
    var synth = window.speechSynthesis ;
    speak_data = "Taking your Selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data) ;
    synth.speak(utterThis) ;
    Webcam.attach(camera) ;

    setTimeout(function()
    {
        take_snapshot1();
        save()
    }
    ,5000) ;
}
function speak2() 
{
    var synth = window.speechSynthesis ;
    speak_data = "Taking your Selfie in 3 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data) ;
    synth.speak(utterThis) ;
    Webcam.attach(camera) ;

    setTimeout(function()
    {
        take_snapshot2();
        save()
    }
    ,3000) ;
}
function speak3() 
{
    var synth = window.speechSynthesis ;
    speak_data = "Taking your Selfie in 2 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data) ;
    synth.speak(utterThis) ;
    Webcam.attach(camera) ;

    setTimeout(function()
    {
        take_snapshot3();
        save()
    }
    ,2000) ;
}

function save() 
{
    link = document.getElementById("link") ;
    img = document.getElementById("selfieimg").src ;
    link.href = img ;
    link.click() ;
}

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera") ;

function take_snapshot1() 
{
    Webcam.snap(function(data_uri) 
    {
        document.getElementById("result1").innerHTML = '<img id ="selfieimg" src="'+data_uri+'" style="border-radius: 20px;">'
    }) ;
}

function take_snapshot2() 
{
    Webcam.snap(function(data_uri) 
    {
        document.getElementById("result2").innerHTML = '<img id ="selfieimg" src="'+data_uri+'" style="border-radius: 20px;">'
    }) ;
}

function take_snapshot3() 
{
    Webcam.snap(function(data_uri) 
    {
        document.getElementById("result3").innerHTML = '<img id ="selfieimg" src="'+data_uri+'" style="border-radius: 20px;">'
    }) ;
}