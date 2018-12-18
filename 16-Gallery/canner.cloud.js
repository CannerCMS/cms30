module.exports = {
  env: {
    default: []
  },

  navbarTheme: "dark",
  sidebarTheme: "light",
  sidebarMenu: [{
    title: 'Back to home',
    pathname: '__backToHome',
    href: '/',
    icon: 'left'
  }, {
    title: 'Photos',
    pathname: 'photos'
  }, {
    title: 'Authors',
    pathname: 'authors'
  }],
  sidebarMenuStyle: {
    height: '100%'
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
    "menu-dark-bg": "#3bafda",
    "menu-dark-item-selected-bg": "#3bafda",
    "menu-dark-item-active-bg": "#3bafda",
    "layout-body-background": "#f1f2f7",
    "border-radius-base": "2px",
    "input-height-base": "38px",

    // body
    // "layout-body-background": "#f9f9f9",


    // card
    // "card-head-background": '#337ab7',
    // "card-head-color": "#fff",
    "card-padding-wider": "12px",
    "card-padding-base": "12px"
  }
}
