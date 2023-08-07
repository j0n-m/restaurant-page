const menu = (() => {
  const name = "Menu";
  function create() {
    const main = document.createElement('main');
    const pageContent = document.createElement('div');
    const title = document.createElement('h1');


    pageContent.classList.add('page-content');
    title.textContent = 'Menu';

    pageContent.appendChild(title);
    main.appendChild(pageContent);

    return main;
  }
  function getName() {
    return name;
  }
  return { create, getName };

})();

export default menu;