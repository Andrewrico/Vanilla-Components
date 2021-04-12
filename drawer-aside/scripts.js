

document.body.classList.toggle('js-enable');

document.addEventListener("DOMContentLoaded", function () {
    const getMenu = document.querySelectorAll('input[type=checkbox][id=drawer__menu]');
    const getCart = document.querySelectorAll('input[type=checkbox][id=drawer__cart]');
    const getSearch = document.querySelectorAll('input[type=checkbox][id=drawer__search]');
    const toggleMenu = document.getElementById('hamburger');
    const toggleItem1 = document.getElementById('menuitem1');
    const toggleItem2 = document.getElementById('menuitem2');
    const toggleItem3 = document.getElementById('menuitem3');
    const toggleBrand = document.getElementById("menuitem4");
    const toggleSupport = document.getElementById("menuitem5");
    const toggleSearch = document.getElementById("menuitem6");
    const toggleCart = document.getElementById("menuitem7");

    const tab1 = document.getElementById('Catties');
    const tab2 = document.getElementById('Doggies');
    const tab3 = document.getElementById('Froggies');
    const tabcontent1 = document.getElementById('menu1_conent');
    const tabcontent2 = document.getElementById('menu2_conent');
    const tabcontent3 = document.getElementById('menu3_conent');

    toggleMenu.addEventListener('click', function () {
        getMenu.forEach(item => {
            item.addEventListener('change', function (event) {
                if (!event.target.checked || !toggleMenu.getAttribute("aria-expanded") == "true") {
                    toggleMenu.setAttribute("aria-expanded", "false");
                } else {
                    toggleMenu.setAttribute("aria-expanded", "true");
                }
            });
        });
    });

    toggleItem1.addEventListener('click', function () {
        getMenu.forEach(item => {
            item.addEventListener('change', function (event) {
                if (!event.target.checked || !toggleItem1.getAttribute("aria-expanded") == "true") {
                    toggleItem1.setAttribute("aria-expanded", "false");
                } else {
                    toggleItem1.setAttribute("aria-expanded", "true");
                }
            });
        });
    });

    toggleItem2.addEventListener('click', function () {
        getMenu.forEach(item => {
            item.addEventListener('change', function (event) {
                if (!event.target.checked || !toggleItem2.getAttribute("aria-expanded") == "true") {
                    toggleItem2.setAttribute("aria-expanded", "false");
                } else {
                    toggleItem2.setAttribute("aria-expanded", "true");
                }
            });
        });
    });

    toggleItem3.addEventListener('click', function () {
        getMenu.forEach(item => {
            item.addEventListener('change', function (event) {
                if (!event.target.checked || !toggleItem3.getAttribute("aria-expanded") == "true") {
                    toggleItem3.setAttribute("aria-expanded", "false");
                } else {
                    toggleItem3.setAttribute("aria-expanded", "true");
                }
            });
        });
    });

    toggleCart.addEventListener('click', function () {
        getCart.forEach(cart => {
            cart.addEventListener('change', function (event) {
                if (!event.target.checked || !toggleCart.getAttribute("aria-expanded") == "true") {
                    toggleCart.setAttribute("aria-expanded", "false");
                } else {
                    toggleCart.setAttribute("aria-expanded", "true");
                }
            });
        });
    });

    toggleSearch.addEventListener('click', function () {
        getSearch.forEach(searches => {
            searches.addEventListener('change', function (event) {
                if (!event.target.checked || !toggleSearch.getAttribute("aria-expanded") == "true") {
                    toggleSearch.setAttribute("aria-expanded", "false");
                } else {
                    toggleSearch.setAttribute("aria-expanded", "true");
                }
            });
        });
    });

});