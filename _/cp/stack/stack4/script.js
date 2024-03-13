window.addEventListener('load', function () {

  const stackEls = document.querySelectorAll('#stackContainer > ul > li');
  const inputEl = document.querySelector('#input');

  function render() {
    stackEls.forEach((el, idx) => st.stack[idx] ? el.innerHTML = st.stack[idx] : el.innerHTML = "");
    document.querySelector(".test").innerHTML = st.stack.join(",");
  }

  function Stack() {
    let _stack = [];

    Stack.prototype.push = function(value) {
      _stack.push(value);
      render();
    }

    Stack.prototype.pop = function() {
      _stack.pop();
      render();
    }

    Stack.prototype.clear = function() {
      _stack = [];
      render();
    }

    Object.defineProperty(this, "stack", {
      get() {
        return _stack;
      }
    });
  }

  const st = new Stack();
  console.log(st);

  document.querySelector('#push').addEventListener('click', (evt) => {
    const val = evt.target.value;
    if (!st.stack.length) st.push(evt.target.value);
    else st.push(st.stack[st.stack.length - 1] + 1);
  });

  document.querySelector('#pop').addEventListener('click', () => {
    st.pop();
  });

  document.querySelector('#empty').addEventListener('click', () => {
    st.clear();
  });

  (function() {
    const _div = document.createElement("div");
    _div.className = "test";
    _div.style.border = "1px solid red";
    _div.style.height = "50px";
    document.body.appendChild(_div);
  })();

  render();
});
