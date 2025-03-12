let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.getElementById("voiceSelect");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; 

    voiceSelect.innerHTML = ""; 

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("#speakBtn").addEventListener("click", () => {
    speech.text = document.querySelector("#textInput").value;
    window.speechSynthesis.speak(speech);
});
