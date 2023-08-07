const home = (() => {
  const name = 'Home';
  function create() {
    const main = document.createElement('main');
    const pageContent = document.createElement('div');
    const restaurantTitle = document.createElement('h1');
    const footer = document.createElement('p');

    pageContent.classList.add('page-content');

    restaurantTitle.textContent = "le Pavillon";
    footer.textContent = "Jon Monarrez © 2022";
    footer.classList.add('footer');

    pageContent.appendChild(restaurantTitle);
    pageContent.appendChild(footer);
    main.appendChild(pageContent);

    return main;
  }
  function getName() {
    return name;
  }
  return { create, getName };

})();

export default home;