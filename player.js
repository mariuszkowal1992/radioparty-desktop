$(document).ready(function () {
  // Pobierz elementy DOM
  var channelSelect = document.getElementById('channelSelect');
  var audioSource = document.getElementById('audioSource');
  var radioPlayer = document.getElementById('radioPlayer');
  var playButton = document.getElementById('play');
  var pauseButton = document.getElementById('pause');
  var stopButton = document.getElementById('stop');
  var channelNameSpan = document.getElementById('channelName');
  var volumeSlider = document.getElementById('volume');

  // Ustaw początkowy kanał
  audioSource.src = channelSelect.value;
  radioPlayer.load();
  updateChannelName(); // Ustawia nazwę kanału na początku

  // Obsługa zmiany kanału
  channelSelect.addEventListener('change', function () {
    audioSource.src = channelSelect.value;
    radioPlayer.load();
    updateChannelName(); // Aktualizuje nazwę kanału po zmianie
  });

  // Obsługa przycisku Play
  playButton.addEventListener('click', function () {
    radioPlayer.play();
  });

  // Obsługa przycisku Pause
  pauseButton.addEventListener('click', function () {
    radioPlayer.pause();
  });

  // Obsługa przycisku Stop
  stopButton.addEventListener('click', function () {
    radioPlayer.pause();
    radioPlayer.currentTime = 0;
  });
  
  // Obsługa zmiany głośności
  volumeSlider.addEventListener('input', function () {
    radioPlayer.volume = volumeSlider.value;
  });

  // Funkcja aktualizująca nazwę kanału
  function updateChannelName() {
    channelNameSpan.textContent = getSelectedChannelName();
  }

  // Funkcja pobierająca nazwę aktualnie wybranego kanału
  function getSelectedChannelName() {
    var selectedIndex = channelSelect.selectedIndex;
    return channelSelect.options[selectedIndex].text;
  }
});