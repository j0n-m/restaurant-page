const header = (() => {

  function createHeader() {
    const main_header = document.createElement('div');
    const headerItems = ['Home', 'Menu', 'About'];

    // looping variables
    // const ul = document.create('ul');
    // const anchor = document.create('a');
    // const li = document.create('li');

    main_header.classList.add('header');
    // anchor.setAttribute("href", "#");
    // li.textContent = headerItems[0];
    //

    headerItems.forEach(item => {
      const ul = document.createElement('ul');
      const anchor = document.createElement('a');
      const li = document.createElement('li');

      anchor.setAttribute("href", "#");
      li.textContent = item;
      li.classList.add(item.toLowerCase());

      anchor.appendChild(li);
      ul.appendChild(anchor);
      main_header.appendChild(ul);
    })
    return main_header;
  }


  return { createHeader };
})();

export default header;