var currentValue = 0;

function handleClick(myRadio) {
    alert('Old value: ' + currentValue);
    alert('New value: ' + myRadio.value);
    currentValue = myRadio.value;
}

document.body.classList.toggle('js-enable');

document.addEventListener("DOMContentLoaded", function () {

    const getMenu = document.querySelectorAll('input[type=checkbox][id=drawer__menu]');
    const getCart = document.querySelectorAll('input[type=checkbox][id=drawer__cart]');
    const getSearch = document.querySelectorAll('input[type=checkbox][id=drawer__search]');
    const toggleMenu = document.getElementById('hamburger');
    const toggleItem1 = document.getElementById('item1');
    const toggleItem2 = document.getElementById('item2');
    const toggleItem3 = document.getElementById('item3');

    const toggleCart = document.getElementById("cart");
    const toggleSearch = document.getElementById("search");

    const tab1 = document.getElementById('Catties');
    const tab2 = document.getElementById('Doggies');
    const tab3 = document.getElementById('Froggies');

    const tabcontent1 = document.getElementById('menu1_conent');
    const tabcontent2 = document.getElementById('menu2_conent');
    const tabcontent3 = document.getElementById('menu3_conent');

    isFocus = false

    toggleItem1.addEventListener('click', function () {
        tab1.focus();
        tab1.checked;
        isFocus = true
        if (isFocus === true) {
            tabcontent1.style.display = "block";
        } else{
            isFocus = false
            tabcontent1.style.display = "none";
            tabcontent2.style.display = "none";
            tabcontent3.style.display = "none";
        }
    });

    toggleItem2.addEventListener('click', function () {
        tab2.focus();
        tab2.checked;
        isFocus = true
        if (isFocus === true) {
            tabcontent2.style.display = "block";
        } else {
            isFocus = false
            tabcontent1.style.display = "none";
            tabcontent2.style.display = "none";
            tabcontent3.style.display = "none";
        }
    });

    toggleItem3.addEventListener('click', function () {
        tab3.focus();
        tab3.checked;
        isFocus = true
        if (isFocus === true) {
            tabcontent3.style.display = "block";
        } else {
            isFocus = false
            tabcontent1.style.display = "none";
            tabcontent2.style.display = "none";
            tabcontent3.style.display = "none";
        }
    });

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