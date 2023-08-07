const header = (() => {
  function create(headerNameList) {
    const main_header = document.createElement('div');
    const ul = document.createElement('ul');
    let countIndex = 0;

    main_header.classList.add('header');

    headerNameList.forEach(navName => {
      const anchor = document.createElement('a');
      const li = document.createElement('li');

      anchor.setAttribute("href", "#");
      li.textContent = navName;
      li.classList.add(navName.toLowerCase());
      li.setAttribute('data-index', countIndex)

      anchor.appendChild(li);
      ul.appendChild(anchor);
      main_header.appendChild(ul);
      countIndex++;
    })
    return main_header;
  }

  return { create };
})();

export default header;