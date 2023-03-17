s = "";
SpeechRecognition = window.webkitSpeechRecognition;
e = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    e.start();
}
e.onresult = function run(event)
{
console.log(event);
content = event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML = content;
if (content == "Selfie.")
{
tts();
}
}
function tts()
{
    var synth = window.speechSynthesis;
    Webcam.attach("#camera");
    data = "Taking your selfie in 5 seconds"
    l = new SpeechSynthesisUtterance(data);
    synth.speak(l);
    setTimeout(function()
    {  
        s = "selfie1";
        takepic();
        data =  "Taking your next selfie in 5 seconds";
        l = new SpeechSynthesisUtterance(data);
        synth.speak(l);
    }, 5000);
    setTimeout(function()
    {
        s = "selfie2";
        takepic();
        data =  "Taking your next selfie in 5 seconds";
        l = new SpeechSynthesisUtterance(data);
        synth.speak(l);
    }, 10000);
    synth.speak(l);
    setTimeout(function()
    {
        s = "selfie3";
        takepic()
    }, 15000);
}
Webcam.set
(
    {
        width:350,
        height: 350,
        image_quality: "png",
        png_quality: 90
    }
)
camera = document.getElementById("camera");
function takepic(){
Webcam.snap(function(data_uri)
{
if(s == "selfie1")
{
    r = "<img src="+data_uri+" id = 'selfie1'>";
    document.getElementById("result1").innerHTML = r;
}
if(s == "selfie2")
{
    r = "<img src="+data_uri+" id = 'selfie2'>";
    document.getElementById("result2").innerHTML = r;
}
if(s == "selfie1")
{
    r = "<img src="+data_uri+" id = 'selfie3'>";
    document.getElementById("result3").innerHTML = r;
}
})
}
