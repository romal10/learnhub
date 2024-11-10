document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript Loaded');
    const button = document.getElementById('loadVideos');
    button.addEventListener('click', () => {
      alert('Videos will be loaded here!');
    });
  });
  