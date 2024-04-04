
chrome.runtime.sendMessage({action: "injectCSS"});


fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    let dogImageURL = data.message;
    let dogImg = document.createElement('img');
    dogImg.setAttribute('id', 'dog-img');
    dogImg.src = dogImageURL;
    // dogImg.style.position = 'fixed';
    // dogImg.style.bottom = '10px';
    // dogImg.style.right = '10px';
    // dogImg.style.width = '300px';
    document.body.appendChild(dogImg);
  });


  document.addEventListener('keydown', function(event) {
    // Check if Ctrl key is pressed (event.ctrlKey) and the key code is equal to the desired key (in this case, 's' which corresponds to 83)
    
    if (event.key === 'Control') {
      document.querySelector('#dog-img').classList.add('gravity');
    }
    if (event.key === 'Alt') {
      document.querySelector('#dog-img').classList.remove('gravity');
    } 
    if (event.ctrlKey && event.keyCode === 83) {
      
      event.preventDefault();
    
    }
  });