document.addEventListener('DOMContentLoaded', function() {
  const typeSelect = document.getElementById('impairmentType');
  const intensitySlider = document.getElementById('intensity');
  const intensityValue = document.getElementById('intensityValue');
  const toggleButton = document.getElementById('toggle');
  
  let enabled = false;

  function updateSimulation() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: typeSelect.value,
        intensity: parseInt(intensitySlider.value),
        enabled: enabled
      });
    });
  }

  typeSelect.addEventListener('change', function() {
    updateSimulation();
  });

  intensitySlider.addEventListener('input', function() {
    intensityValue.textContent = this.value + '%';
    updateSimulation();
  });

  toggleButton.addEventListener('click', function() {
    enabled = !enabled;
    this.textContent = enabled ? 'Disable Simulation' : 'Enable Simulation';
    this.style.background = enabled ? '#ef4444' : '#22c55e';
    updateSimulation();
  });
});
