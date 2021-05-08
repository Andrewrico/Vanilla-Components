var navButtons = document.querySelectorAll('nav .toggle__button');

navButtons.forEach(item => {

    item.addEventListener('click', function() {
        let expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        //                let menu = this.nextElementSibling;
        //                menu.hidden = !menu.hidden;
    });

    //            item.addEventListener("keyup", function(event) {
    // event.preventDefault();
    // if (event.keyCode === 13) {
    // navInput.forEach(item => {
    // navInput.click()
    // });
    // let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    // this.setAttribute('aria-expanded', !expanded);
    // let menu = this.nextElementSibling;
    // menu.hidden = !menu.hidden;
    // }
    // });

})