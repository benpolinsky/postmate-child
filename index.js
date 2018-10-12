import Postmate from 'postmate'

Postmate.debug = true

const handshake = new Postmate.Model({
  // Expose your model to the Parent. Property values may be functions, promises, or regular values
  replaceText: ({
    querySelector,
    newText
  }) => {
    document.querySelector(querySelector).innerText = newText
  },
});

// When parent <-> child handshake is complete, events may be emitted to the parent
handshake.then(parent => {
  parent.emit('hello-from', window.document.title);
});