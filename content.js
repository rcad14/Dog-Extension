


chrome.runtime.sendMessage({action: "injectCSS"});
let dog;
class Dog {
  constructor(src) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'dog-img');
    this.node.src = src;
    this.bottom = 0;
    this.right = 0;
    this.node.style.right = this.right;
    this.node.style.bottom = this.bottom;
    document.querySelector('body').appendChild(this.node);
    this.move = this.move.bind(this);
  }

  move(e) {
    if (e.key === 'ArrowDown') {
      this.moveDown();
    } else if (e.key === 'ArrowUp') {
      this.moveUp();
    } else if (e.key === 'ArrowLeft') {
      this.moveLeft();  
    } else if (e.key === 'ArrowRight') {
      this.moveRight();
    }
  }

  moveUp(e) {
    console.log('trying to move up');
    this.bottom += 100;
    this.node.style.bottom = `${this.bottom}px`;
  }

  moveDown(e) {
    this.bottom -= 100;
    this.node.style.bottom = `${this.bottom}px`;
  }

  moveLeft(e) {
    this.right += 100;
    this.node.style.right = `${this.right}px`;
  }

  moveRight(e) {
    this.right -= 100;
    this.node.style.right = `${this.right}px`;
  }
}

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    let dogImageURL = data.message;
    dog = new Dog(dogImageURL);
    // let dogImg = document.createElement('img');
    // dogImg.setAttribute('id', 'dog-img');
    // dogImg.src = dogImageURL;
    // // dogImg.style.position = 'fixed';
    // // dogImg.style.bottom = '10px';
    // // dogImg.style.right = '10px';
    // // dogImg.style.width = '300px';
    // document.body.appendChild(dogImg);
  });

  // const randomInt = Math.floor(Math.random() * 12) + 1;
  // const dog = new Dog(`images/1.jpg`);
  //const dog = new Dog(`./images/${randomInt}.jpg`);


  document.addEventListener('keydown', function(event) {
    // Check if Ctrl key is pressed (event.ctrlKey) and the key code is equal to the desired key (in this case, 's' which corresponds to 83)
    
    if (event.key === 'Control') {
      document.querySelector('#dog-img').classList.add('gravity');
    }
    if (event.key === 'Alt') {
      document.querySelector('#dog-img').classList.remove('gravity');
    } 
    else {
      dog.move(event);
    }
    if (event.ctrlKey && event.keyCode === 83) {
      
      event.preventDefault();
    
    }
  });

