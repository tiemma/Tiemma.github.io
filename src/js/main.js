window.onload = () => {

  const createEventForNodes = (eventType, selector,  func) => {
    [].forEach.call(document.querySelectorAll(selector),  (node) => {
      node.addEventListener(eventType, () => {
        func(node);
      });
    });

  };

  const addOpenCardClass = (e) => {
    e.target.classList.add('open-card');
  };

  const removeOpenCardClass = (e) => {
    e.classList.remove('open-card');
  };

  createEventForNodes('click', '.card', addOpenCardClass);
  createEventForNodes('click', '.close', removeOpenCardClass);



};
