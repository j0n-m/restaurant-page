import './style.css';
import header from './header.js';
import home from './home.js';

const htmlPage = document.querySelector('#content');

htmlPage.appendChild(header.createHeader());
htmlPage.appendChild(home.createHome());

const DOMEvents = (() => {


})();