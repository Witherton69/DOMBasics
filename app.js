// DOM BASICS EXERCISE
// 1
console.log(`Number 1`);
const xMen = document.getElementById(`x-men`);
console.dir(xMen);

// 2
console.log(`Number 2`);
const centered = document.getElementsByClassName(`center`);
console.dir(centered);

// 3
console.log(`Number 3`);
const batman = document.querySelector(`div`);
// OR
// const batman = document.querySelector(`#batman`);
console.dir(batman);

// 4
console.log(`Number 4`);
const h3s = document.querySelectorAll(`h3`);
console.dir(h3s);

// 5a
console.log(`Number 5`);
const h1 = document.querySelector(`h1`);
console.dir(h1);

// 5b
h1.innerText = "The Best Animated Superhero TV Shows Ever!";
console.log(h1.innerText);

// 6a
console.log(`Number 6`);
const honorableMentions = document.querySelector(`#honorable-mentions`);
console.dir(honorableMentions);

// 6b
honorableMentions.innerHTML = "<p>OTHER GREAT SHOWS</p>";
console.log(honorableMentions.innerHTML);

// 7a
console.log(`Number 7`);
const aTag = document.querySelector(`a`);
console.dir(aTag);

// 7b
aTag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/";
console.log(aTag.href);

// 8
console.log(`Number 8`);
h1.classList.add(`background`, `text-color`);
console.log(h1.classList);

// 9
console.log(`Number 9`);
h1.classList.remove(`background`);
console.log(h1.classList);

// 10a
console.log(`Number 10`);
const h4 = document.createElement(`h4`);
console.dir(h4);

// 10b
h4.innerText = "Is Avatar: The Last Airbender A Superhero Show?";
console.log(h4.innerText);

// 10c
const body = document.querySelector(`body`);
body.prepend(h4);
console.log(body.style);

// 11a
console.log(`Number 11`);
const h5 = document.createElement(`h5`);
console.dir(h5);

// 11b
h5.innerText = "Heroes in a half shell Turtle Power!";
console.log(h5.innerText);

// 11c
aTag.insertAdjacentElement(`afterend`, h5);

// 12
console.log(`Number 12`);
document.querySelector(`li`).remove();