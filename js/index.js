const heading = document.querySelector("h5");
const advice = document.querySelector(".content p");
const icon = document.querySelector(".dice");
// console.log(heading);
// console.log(advice);
let data;

icon.addEventListener("click", function () {
  getAdvice();
});

async function getAdvice() {
  const result = await fetch("https://api.adviceslip.com/advice");
  data = await result.json();
  //   console.log(data);
  display();
}

function display() {
  heading.innerHTML = ` Advice # ${data.slip.id} `;
  advice.innerHTML = data.slip.advice;
}

window.onload = getAdvice;
