var navButtons = document.querySelectorAll('.toggle__button');
var drawer = document.querySelector('#drawer');
var backdrop = document.querySelector('#backdrop');
navButtons.forEach(item => {
    item.addEventListener('click', function () {
        let expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        let menu = this.nextElementSibling;
        //        menu.hidden = !menu.hidden;
        //        if (this.setAttribute('aria-expanded', !expanded)) {
        //            show();
        //        } else{
        //            hide();
        //
        //        }
    });

    item.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            let expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
            document.querySelector('.toggle__button').setAttribute('aria-expanded', !expanded);
            //            drawer.click()
            //            hide(backdrop);

        };
    });

    //    function show(element) {
    //        return element.style.display = "block";
    //    }
    //    function hide(element) {
    //        return element.style.display = "none";
    //    }
});

document.getElementById('toggleLabel1').onclick = function openMenu() {
    document.querySelector('input#toggleMenu1').click();
    document.getElementById('toggleLabel1').addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById('toggleLabel1').click()
        };
    });
}
document.getElementById('toggleLabel1').onclick = function openMenu() {
    // checkedThis('#toggleMenu1')
    document.querySelector('input#toggleMenu1').click();
}

document.getElementById('toggleLabel2').onclick = function openMenu() {
    // checkedThis('#toggleMenu32')

    document.querySelector('input#toggleMenu2').click();
}

document.getElementById('toggleLabel3').onclick = function openMenu() {
    // checkedThis('#toggleMenu3')
    document.querySelector('input#toggleMenu3').click();
}

// function checkedThis(this) {
//     this.click();
// }
