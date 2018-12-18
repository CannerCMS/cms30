module.exports = {
  env: {
    default: []
  },

  // navbarTheme: "light" | "dark",
  sidebarTheme: "light",
  sidebarMenu: [{
    pathname: '__backToHome',
    title: 'Back to home',
    icon: 'left',
    href: '/'
  }, {
    title: 'Movies',
    pathname: 'movies',
  }, {
    title: 'Actors',
    pathname: 'actors'
  }, {
    title: 'Directors',
    pathname: 'directors'
  }, {
    title: 'Genres',
    pathname: 'genres'
  }],
  theme: {
    // "primary-color": "#337ab7",
    // "btn-primary-bg": "#337ab7",
    // "progress-default-color": "#158ebd",
    // navbar
    // "layout-header-background": "#158ebd",
    // "menu-dark-bg": "#158ebd",
    // "menu-dark-item-selected-bg": "#3c8dbc",
    // "menu-dark-item-active-bg": "#3c8dbc",

    // sidebar
    // "layout-sider-background-light": "#f4f4f4",
    // "menu-bg": "#f4f4f4",
    // "menu-item-selected-bg": "#f9f9f9",
    // "menu-item-active-bg": "#f9f9f9",
    // "layout-trigger-background": "#f9f9f9",
    // "border-radius-base": "3px",

    // body
    // "layout-body-background": "#f9f9f9",


    // card
    // "card-head-background": '#337ab7',
    // "card-head-color": "#fff"
  }
}
