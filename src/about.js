const about = (() => {
  const name = "About";
  function create() {
    const main = document.createElement('main');
    const pageContent = document.createElement('div');
    const title = document.createElement('h1');
    const desc = document.createElement('div');
    const desc_content1 = document.createElement('p');
    const desc_content2 = document.createElement('p');
    const desc_content3 = document.createElement('p');
    const desc_content4 = document.createElement('p');

    pageContent.classList.add('page-content');
    title.textContent = 'About';
    desc.classList.add('hours');

    desc_content1.textContent = "Dining Hours:";
    desc_content2.textContent = "Mon-Thu: 10am-9pm";
    desc_content3.textContent = "Fri-Sat: 11am-10pm";
    desc_content4.textContent = "Sun: Closed";


    pageContent.appendChild(title);
    desc.appendChild(desc_content1);
    desc.appendChild(desc_content2);
    desc.appendChild(desc_content3);
    desc.appendChild(desc_content4);
    pageContent.appendChild(desc);

    main.appendChild(pageContent);

    return main;
  }
  function getName() {
    return name;
  }
  return { create, getName };

})();

export default about;