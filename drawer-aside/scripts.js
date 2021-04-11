document.body.classList.toggle('js-enable');

// Content is loaded
document.addEventListener("DOMContentLoaded", function (event) {

    // Menu Items
    let hamburger =  document.getElementById("hamburger");

    // Click Event
    hamburger.onclick = function() {

        // Open Drawer Trigger Checkbox
        let drawer__menu = document.querySelectorAll('input[type=checkbox][id=drawer__menu]');

        // Looping Drawers
        for (var drawer of drawer__menu) {

            // On change event
            drawer.addEventListener('change', function(event) {

            // Conditional
            if (!event.target.checked || !hamburger.getAttribute("aria-expanded") == "true") {
                    hamburger.setAttribute("aria-expanded", "false");
                    hamburger.setAttribute("aria-pressed", "false");
                } else {
                    hamburger.setAttribute("aria-expanded", "true");
                    hamburger.setAttribute("aria-pressed", "true");
            };
        });
    }};

});