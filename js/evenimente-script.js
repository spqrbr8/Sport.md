function loadResponsiveIframe() {
    const container = document.getElementById('iframecontainer');
    
    // Verifică dacă lățimea ecranului este sub sau egal cu 700px
    if (window.matchMedia("(max-width: 700px)").matches) {
      // Codul iframe pentru dispozitive mobile
      container.innerHTML = `
        <iframe
        src="https://www.scorebat.com/embed/videofeed/?token=MjA1OTM5XzE3NDM4NDU5MzVfNzdmOWIzYTBiMWY5NGFhYTc0MGY1MTY1ZTI5N2M1NzdjMjUzNTkzNw=="
         frameborder="0"
          width="600"
           height="760"
            allowfullscreen allow='autoplay;
             fullscreen'
              style="width:295px;
              height:650px;
              overflow:hidden;
              display:block;"
               class="_scorebatEmbeddedPlayer_">
               </iframe>
               <script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>`;
    } else {
      // Codul iframe pentru desktop
      container.innerHTML = `
        <iframe
        src="https://www.scorebat.com/embed/videofeed/?token=MjA1OTM5XzE3NDM4NDU5MzVfNzdmOWIzYTBiMWY5NGFhYTc0MGY1MTY1ZTI5N2M1NzdjMjUzNTkzNw=="
         frameborder="0"
          width="100px"
           height="760px"
            allowfullscreen allow='autoplay;
             fullscreen'
              style="width:1000px;
              height:760px;
              overflow:hidden;
              display:block;"
               class="_scorebatEmbeddedPlayer_">
               </iframe>
               <script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>`;
    }
  }

  // Se apelează funcția la încărcarea paginii
  window.addEventListener('load', loadResponsiveIframe);

  // Se apelează funcția și la redimensionarea ferestrei pentru a actualiza iframe-ul dinamic
  window.addEventListener('resize', loadResponsiveIframe);