const typingElement = document.querySelector('.typing');

const text = "greetings, user. i'm ali, a multi-disciplinary creative from Singapore.";

let index = 0; 

const typewriter = () => {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typewriter, 25)
  }
}

typewriter();

