window.addEventListener('load', function () {

  function Stack(data) {
    let _stack = data || [];
    let _prev = {
      idx: -1,
      data: ''
    };

    Stack.prototype.push = function(val) {
      _stack.push(val);
      render();
    };

    Stack.prototype.pop = function() {
      _stack.pop();
      render();
    };

    Stack.prototype.undo = function() {
      if (_prev.idx > -1) {
        _stack.splice(_prev.idx, 0, _prev.data);
        _prev = { idx: -1, data: '' };
        render();
      }
    };

    Stack.prototype.remove = function({ data, idx }) {
      _prev = {
        idx,
        data
      };
      _stack = _stack.filter((item, index) => index !== idx);
      render();
    }

    Object.defineProperty(this, 'stack', {
      get() {
        return _stack;
      }
    });
  };

  function render() {
    console.log(state);
    const ul = listContainer.querySelector('ul');
    ul.innerHTML = '';

    state.stack.forEach((data, idx) => {
      const li = document.createElement('li');
      li.setAttribute('data-id', data);
      li.setAttribute('data-idx', idx);
      li.innerText = data;
      li.addEventListener('click', evt => {
        console.log('remove');
        state.remove({ data, idx });
      });
      ul.appendChild(li);
    });

  };

  const listContainer = document.querySelector('#stackContainer');
  let inputValue = '';
  const state = new Stack([ '1', '2', '3', '4', '5' ]);

  document.querySelector('#input').addEventListener('keyup', evt => {
    inputValue = evt.target.value;
  });
  document.querySelector('#push').addEventListener('click', evt => {
    state.push(inputValue);
  });
  document.querySelector('#pop').addEventListener('click', evt => {
    state.pop();
  });
  document.querySelector('#peek').addEventListener('click', evt => {
  });
  document.querySelector('#empty').addEventListener('click', evt => {
    state.empty();
  });
  document.querySelector('#swap').addEventListener('click', evt => {
    state.swap();
  });
  document.querySelector('#undo').addEventListener('click', evt => {
    state.undo();
  });


  (function() {
    render();
  })();
});
