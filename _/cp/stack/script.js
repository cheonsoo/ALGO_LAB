function push() {
  console.log('val', inputEl.value);
  if (!inputEl.value) {
    alert('enter value');
    return;
  }

  stack.push(inputEl.value);
  inputEl.value = '';

  render();
}

function pop() {
  stack.pop();
  render();
}

function peek() {
  alert(stack[stack.length - 1]);
}

function empty() {
  if (stack.length === 0) {
    alert('stack is empty');
  } else {
    alert('stack is not empty');
  }
}

function swap() {
  const top = stack[stack.length - 1];
  stack[stack.length - 1] = stack[stack.length - 2];
  stack[stack.length - 2] = top;

  render();
}

function render() {
  stackEls.forEach(el => {
    const id = el.getAttribute('data-id');
    el.innerText = stack[parseInt(id) - 1] || '';
  });
}

let stackEls = null;
let inputEl = null;

const stack = [];

window.addEventListener('load', function () {
  console.log('loaded');

  stackEls = document.querySelectorAll('#stackContainer > ul > li');
  inputEl = document.querySelector('#input');

  const pushBtnEl = document.querySelector('#push');
  const popBtnEl = document.querySelector('#pop');
  const peekBtnEl = document.querySelector('#peek');
  const emptyBtnEl = document.querySelector('#empty');
  const swapBtnEl = document.querySelector('#swap');

  pushBtnEl.addEventListener('click', push);
  popBtnEl.addEventListener('click', pop);
  peekBtnEl.addEventListener('click', peek);
  emptyBtnEl.addEventListener('click', empty);
  swapBtnEl.addEventListener('click', swap);
});
