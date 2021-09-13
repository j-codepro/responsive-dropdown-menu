/* EXPANDER MENU */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            // change "burger" to close icon "x"
            toggle.classList.toggle('bx-x');
        });
    }
};

showMenu('header-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');
}

navLink.forEach((link) => link.addEventListener('click', linkAction));
