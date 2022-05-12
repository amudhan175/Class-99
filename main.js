var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
function start(){
    document.getElementById("textarea").innerHTML="";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textarea").innerHTML = Content;
    speak();
}
function speak(){
    var Synth = speechSynthesis;
    var speech_data = document.getElementById("textarea").value;
    var utterthis = new SpeechSynthesisUtterance;
    Synth.speak(utterthis);
    Webcam.attach(camera);
}
document.getElementById("webcam");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
})
