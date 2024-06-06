const DrawerInitiator = {
  init({ hamburger, navMenuMobile, content }) {
    hamburger.addEventListener("click", (event) => {
      this._toggleDrawer(event, navMenuMobile);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, navMenuMobile);
    });

    window.addEventListener("click", (e) => {
      this._closeDrawerWindow(e, hamburger, navMenuMobile);
    });
  },

  _toggleDrawer(event, navMenuMobile) {
    event.stopPropagation();

    navMenuMobile.classList.toggle("active");
  },

  // ini untuk posisi window browser
  _closeDrawer(event, navMenuMobile) {
    event.stopPropagation();
    navMenuMobile.classList.remove("active");
  },

  _closeDrawerWindow(e, hamburger, navMenuMobile) {
    if (!hamburger.contains(e.target) && !navMenuMobile.contains(e.target)) {
      navMenuMobile.classList.remove("active");
    }
    // console.log(e.target);
  },
};

export default DrawerInitiator;
