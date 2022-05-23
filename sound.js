let n = 0

while (n < 3) {


window.AudioContext = window.AudioContext||window.webkitAudioContext;
var audioContext = new AudioContext();

var osciillatorNode = audioContext.createOscillator();

osciillatorNode.frequency.value =880 + n * 200;

var audioDestinationNode = audioContext.destination;

osciillatorNode.connect(audioDestinationNode);

osciillatorNode.start = osciillatorNode.start || osciillatorNode.noteOn;
osciillatorNode.start();

setTimeout(function(){
    osciillatorNode.stop();
},1000);

n+=1;

}