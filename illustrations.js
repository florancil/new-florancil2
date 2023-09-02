const typingElement = document.querySelector('.typing');

const text = 'take your pick';
let index = 0;

const typewriter = () => {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typewriter, 100)
  };
}

typewriter();