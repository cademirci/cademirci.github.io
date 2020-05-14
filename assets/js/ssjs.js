window.addEventListener('DOMContentLoaded', () => {
  var nightButton = document.querySelector('#lightButton');
  var light = false;
  nightButton.addEventListener('click', () => {
    if (!light) {
      nightButton.innerHTML = 'freedom is dark?';
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#1a1a1a';
      light = true;
    }
    else {
      nightButton.innerHTML = 'knowledge is light?';
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#efefef';
      light = false;
    }

  })
})
