chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    state: 'fullscreen'
  });
});