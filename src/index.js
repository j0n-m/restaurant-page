import './style.css';
import header from './header.js';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';

const loadHTMLPage = (() => {
  const htmlPage = document.querySelector('#content');
  const headerLinks = [home, menu, about];
  const headerNames = [];

  htmlPage.appendChild(header.create(getHeaderNames()));
  htmlPage.appendChild(home.create());

  function getHTMLPage() {
    return htmlPage;
  }
  function getHeaderNames() {
    if (!headerNames.length) {
      headerLinks.forEach(item => {

        headerNames.push(item.getName());
      })
    }

    return headerNames;
  }
  function getHeaderLinks() {
    return headerLinks;
  }

  return { getHTMLPage, getHeaderNames, getHeaderLinks, htmlPage };
})();



const DOMController = (() => {
  const navNames = document.querySelectorAll('.header ul li')
  navNames.forEach(node => {
    node.addEventListener('click', function () {
      changePageContent(node.attributes['data-index'].value);
    });
  })

  function changePageContent(index) {
    const mainContent = document.querySelector('main');
    const content = loadHTMLPage.getHeaderLinks()[index].create();
    mainContent.remove();
    loadHTMLPage.getHTMLPage().appendChild(content);
  }
  return { changePageContent };

})();
