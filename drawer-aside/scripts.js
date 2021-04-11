document.body.classList.toggle('js-enable');

// ContentLoaded
document.addEventListener("DOMContentLoaded", function () {

    const showMenuTrigger = document.querySelectorAll('input[type=checkbox][id=drawer__menu]');
    const hamburger = document.getElementById('hamburger');
    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    const item3 = document.getElementById('item3');
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab3 = document.getElementById('tab3');
    
    item1.onclick = function () {
        showMenuTrigger.forEach(menu => 
        menu.addEventListener('change', function (event) {
            if (!event.target.checked || !item1.getAttribute("aria-expanded") == "true") {
                item1.setAttribute("aria-expanded", "false");
            } else  {
                item1.setAttribute("aria-expanded", "true");
            }
        })
    )};

    item2.onclick = function () {
        showMenuTrigger.forEach(menu => 
        menu.addEventListener('change', function (event) {
            if (!event.target.checked || !item2.getAttribute("aria-expanded") == "true") {
                item2.setAttribute("aria-expanded", "false");
            } else  {
                item2.setAttribute("aria-expanded", "true");
            }
        })
    )};


    item3.onclick = function () {
        showMenuTrigger.forEach(menu => 
        menu.addEventListener('change', function (event) {
            if (!event.target.checked || !item3.getAttribute("aria-expanded") == "true") {
                item3.setAttribute("aria-expanded", "false");
            } else  {
                item3.setAttribute("aria-expanded", "true");
            }
        })
    )};

    hamburger.onclick = function () {
        showMenuTrigger.forEach(menu => 
        menu.addEventListener('change', function (event) {
            if (!event.target.checked || !hamburger.getAttribute("aria-expanded") == "true") {
                hamburger.setAttribute("aria-expanded", "false");
            } else  {
                hamburger.setAttribute("aria-expanded", "true");
            }
        })
    )};


    hamburger.forEach(item => 
        hamburger.onclick = function () {
            showMenuTrigger.forEach(menu => 
            menu.addEventListener('change', function (event) {
                if (!event.target.checked || !hamburger.getAttribute("aria-expanded") == "true") {
                    hamburger.setAttribute("aria-expanded", "false");
                } else  {
                    hamburger.setAttribute("aria-expanded", "true");
                }
            })
        );
    });


    const getCart = document.querySelectorAll('input[type=checkbox][id=drawer__cart]');
    const toggleCart = document.getElementById("cart");
    toggleCart.onclick = function () {
        for (let cart of getCart) {
            cart.addEventListener('change', function (event) {
                if (event.target.checked || toggleCart.getAttribute("aria-expanded") == "false") {
                    toggleCart.setAttribute("aria-expanded", "true");
                } else  {
                    toggleCart.setAttribute("aria-expanded", "false");
                }
            });
        };
    };

    // const getCustomer = document.querySelectorAll('input[type=checkbox][id=drawer__customer]');
    // const toggleCustomer = document.getElementById("customer");
    // toggleCustomer.onclick = function () {
    //     for (let customer of getCustomer) {
    //         customer.addEventListener('change', function (event) {
    //             if (event.target.checked || customer.getAttribute("aria-expanded") == "false") {
    //                 customer.setAttribute("aria-expanded", "true");
    //             } else  {
    //                 customer.setAttribute("aria-expanded", "false");
    //             }
    //         });
    //     };
    // };

    const getSearch = document.querySelectorAll('input[type=checkbox][id=drawer__search]');
    const toggleSearch = document.getElementById("search");
    toggleSearch.onclick = function () {
        for (let searches of getSearch) {
            searches.addEventListener('change', function (event) {
                if (event.target.checked || toggleSearch.getAttribute("aria-expanded") == "false") {
                    toggleSearch.setAttribute("aria-expanded", "true");
                } else  {
                    toggleSearch.setAttribute("aria-expanded", "false");
                }
        })
    }} 


})