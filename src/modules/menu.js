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

/* MAKE LINK ACTIVE */

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach((n) => n.classList.remove('active'));
    this.classList.add('active');
}

const clickToActiveClass = () => {
    navLink.forEach((n) => n.addEventListener('click', linkAction));
};

const menuActions = () => {
    showMenu('header-toggle', 'nav-menu');
    clickToActiveClass();
};

export default menuActions;
