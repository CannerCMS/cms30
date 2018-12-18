module.exports = {
  env: {
    default: []
  },
  navbarTheme: "dark",
  sidebarTheme: "light",
  sidebarMenuStyle: {
    height: '100%'
  },
  sidebarMenu: [{
    title: 'Back to home',
    pathname: '__backToHome',
    href: 'https://cms30.canner.io/',
    icon: 'left'
  }, {
    title: 'Matches',
    pathname: 'matches',
  }, {
    title: 'Countries',
    pathname: 'countries'
  }, {
    title: 'Groups',
    pathname: 'groups'
  }],
  theme: {
    "primary-color": "#104583",
    "btn-primary-bg": "#104583",
    "progress-default-color": "#104583",
    // navbar
    "layout-header-background": "#104583",
    "menu-dark-bg": "#104583",
    "menu-dark-item-selected-bg": "#3c8dbc",
    "menu-dark-item-active-bg": "#3c8dbc",

    // sidebar
    "layout-sider-background-light": "#fff",
    "menu-bg": "#fff",
    "menu-item-selected-bg": "#f9f9f9",
    "menu-item-active-bg": "#f9f9f9",
    "layout-trigger-background": "#fff",
    "border-radius-base": "2px",

    // body
    "layout-body-background": "#fff",

    "item-hover-bg": '#f9f9f9',
    "table-row-hover-bg": '#f9f9f9'
    // card
    // "card-head-background": '#337ab7',
    // "card-head-color": "#fff"
  }
}
