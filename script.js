const tags = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (event) => {
  createTags(event.target.value);

  if (event.key === 'Enter') {
    setTimeout(() => {
      event.target.value = '';
    }, 10);

    randomSelect(tags);
  }
});

function createTags(input) {
  const texts = input
    .split(',')
    .filter((i) => i.trim() !== '')
    .map((i) => i.trim());

  tags.innerHTML = '';

  texts.forEach((i) => {
    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.innerText = i;
    tags.appendChild(tag);
  });
}

function createDefaultTags() {
  const defaultText = ['Choice 1', 'Choice 2', 'Choice 3'];
  defaultText.forEach((i) => {
    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.innerText = i;
    tags.appendChild(tag);
  });
}

function randomSelect() {
  const times = 20;
  const interval = setInterval(() => {
    //const randomNum = getRandomNum();
    const randomTag = getRandomTag();
    if (!randomTag) {
      createDefaultTags();
    } else {
      highlightTag(randomTag);
      setTimeout(() => {
        unhighlightTag(randomTag);
      }, 100);
    }
  }, 100);
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = getRandomTag();
      if (!randomTag) {
        createDefaultTags();
      } else {
        highlightTag(randomTag);
      }
    }, 100);
  }, times * 100);
}

function getRandomTag() {
  const randomNum = Math.floor(Math.random() * tags.childElementCount);
  return tags.childNodes[randomNum];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}
