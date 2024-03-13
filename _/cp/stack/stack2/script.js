window.addEventListener('load', function () {

  const stackEls = document.querySelectorAll('#stackContainer > ul > li');
  const inputEl = document.querySelector('#input');

  function render() {
    stackEls.forEach((el, idx) => state.stack[idx] ? el.innerHTML = state.stack[idx] : el.innerHTML = "");
  }

  const state = {};
  let stack = [1,2,3];
  Object.defineProperty(state, "stack", {
    get() {
      return stack;
    },
    set(value) {
      stack = value;

      console.log("### stack: ", stack);

      render();
    }
  });

  document.querySelector('#push').addEventListener('click', () => {
    const _state = state.stack;
    const last = _state[_state.length - 1];
    _state.push(last + 1);
    state.stack = _state;
  });
  document.querySelector('#pop').addEventListener('click', () => {
    const _state = state.stack;
    _state.pop();
    state.stack = _state;
  });
  document.querySelector('#peek').addEventListener('click', peek);
  document.querySelector('#empty').addEventListener('click', () => {
    state.stack = [];
  });
  document.querySelector('#swap').addEventListener('click', swap);

  render();
});

