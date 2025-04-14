let lastMode = null;

function loadResponsiveIframe() {
  if (document.fullscreenElement) return;

  const container = document.getElementById('iframecontainer');
  const isMobile = window.matchMedia("(max-width: 700px)").matches;
  const currentMode = isMobile ? "mobile" : "desktop";

  if (lastMode === currentMode) return;
  lastMode = currentMode;

  if (isMobile) {
    container.innerHTML = `
      <iframe
        src="https://www.scorebat.com/embed/videofeed/?token=..."
        frameborder="0"
        style="width:295px; height:650px; overflow:hidden; display:block;"
        allowfullscreen allow="autoplay; fullscreen"
        class="_scorebatEmbeddedPlayer_">
      </iframe>
      <script>
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'scorebat-jssdk'));
      </script>`;
  } else {

    container.innerHTML = `
      <iframe
        src="https://www.scorebat.com/embed/videofeed/?token=..."
        frameborder="0"
        style="width:1000px; height:760px; overflow:hidden; display:block;"
        allowfullscreen allow="autoplay; fullscreen"
        class="_scorebatEmbeddedPlayer_">
      </iframe>
      <script>
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'scorebat-jssdk'));
      </script>`;
  }
}

let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(loadResponsiveIframe, 250);
});

window.addEventListener('load', loadResponsiveIframe);
