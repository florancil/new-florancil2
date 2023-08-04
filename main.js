
function typingAnimation(element, speed) {
  const text = element.innerHTML;
  element.innerHTML = ''; // Clear the original text
  const lines = text.split('\n');
  let lineIndex = 0;
  let characterIndex = 0;

  function typeNextCharacter() {
    if (lineIndex < lines.length) {
      const line = lines[lineIndex];
      if (characterIndex < line.length) {
        element.innerHTML += line.charAt(characterIndex);
        characterIndex++;
      } else {
        element.innerHTML += '<br>'; // Add line break when the line is fully typed
        lineIndex++;
        characterIndex = 0;
      }
      setTimeout(typeNextCharacter, speed);
    }
  }

  typeNextCharacter();
}

// Call the typing animation function on page load
window.onload = function () {
  const headerText = document.querySelector('.header__text');
  typingAnimation(headerText, 10); // Adjust the speed (milliseconds per character) as desired
};

