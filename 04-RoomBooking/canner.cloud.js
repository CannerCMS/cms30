module.exports = {
  env: {
    default: []
  },

  navbarTheme: "light",
  sidebarTheme: "dark",
  sidebarMenu: [{
    title: 'Back to home',
    pathname: '__backToHome',
    href: '/',
    icon: 'left'
  }, {
    title: 'Calendar',
    pathname: 'calendar',
    icon: 'calendar'
  }, {
    title: 'Bookings',
    pathname: 'bookings',
    icon: 'solution'

  }, {
    title: 'Rooms',
    pathname: 'rooms',
    icon: 'home'
  }],
  navbarStyle: {
    boxShadow: '0 0 5px 0 #333'
  },
  theme: {
    "primary-color": "#3bafda",
    "btn-primary-bg": "#3bafda",
    "layout-header-background": "#3bafda",
    "menu-bg": "#3bafda",
    "menu-item-selected-bg": "#3bafda",
    "menu-item-active-bg": "#3bafda",
    "menu-item-color": "#eee",
    "menu-highlight-color": "#fff",
    "layout-sider-background": "#252b33",
    "menu-dark-bg": "#252b33",
    "menu-dark-item-selected-bg": "#3bafda",
    "menu-dark-item-active-bg": "#3bafda",
    "layout-body-background": "#f1f2f7",
    "border-radius-base": "2px",
    "input-height-base": "38px",
    // "item-active-bg": "rgba(242, 177, 115, 0.1)",
    // "item-hover-bg": "rgba(242, 177, 115, 0.3)",
    // "font-size-base": "14px",

    // // https://colorlib.com//polygon/admindek/default

    // "layout-trigger-background": "#2A3544",
    "card-shadow": "0 0 5px 0 rgba(43,43,43,0.1), 0 11px 6px -7px rgba(43,43,43,0.1)",
  }
}
