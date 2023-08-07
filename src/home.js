const home = (() => {
  function createHome() {
    const main = document.createElement('main');
    const pageContent = document.createElement('div');
    const restaurantTitle = document.createElement('h1');
    const footer = document.createElement('p');

    pageContent.classList.add('page-content');

    restaurantTitle.textContent = "le Pavillon";
    footer.textContent = "Jon Monarrez &copy; 2022";

    pageContent.appendChild(restaurantTitle);
    pageContent.appendChild(footer);
    main.appendChild(pageContent);

    return main;
  }
  return { createHome };

})();

export default home;