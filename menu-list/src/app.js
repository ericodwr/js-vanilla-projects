import menu from './data.js';

const menuContent = document.querySelector('.section-center');
const btnContent = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItem(menu);
  getCategories(menu);
});

// Getting categories dynamicly
const getCategories = (data) => {
  const categories = data.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all'],
  );
  const categoryBtn = categories
    .map((category) => {
      return `
      <div class='btn-container'>
      <button type="button" class="filter-btn" data-id=${category}>${category}</button>
      </div>
    `;
    })
    .join('');
  btnContent.innerHTML = categoryBtn;
  filterBtn();
};

// Filtering Menu
const filterBtn = () => {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.target.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category == category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        return displayMenuItem(menu);
      } else {
        return displayMenuItem(menuCategory);
      }
    });
  });
};

// Displaying Menus
const displayMenuItem = (data) => {
  let menuItem = data.map((item) => {
    // console.log(item);
    const { id, title, img, price, category, desc } = item;
    return `
      <article class='menu-item' key=${id}>
        <img src=${img} class='photo'/>
        <div class='item-info'>
          <header>
          <h4>${title}</h4>
          <h5>${price}</h5>
          </header>
          <p class='item-desc'>
            ${desc}
          </p>
        </div>
      </article>
    `;
  });
  menuItem = menuItem.join('');
  // console.log(menuItem);
  menuContent.innerHTML = menuItem;
};
