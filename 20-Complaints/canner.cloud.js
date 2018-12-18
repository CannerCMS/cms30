module.exports = {
  env: {
    default: []
  },
  sidebarMenu: [{
    title: 'Back to home',
    icon: 'left',
    pathname: '__backToHome'
  }, {
    title: 'Complaints',
    pathname: 'complaints'
  }, {
    title: 'Categories',
    pathname: 'categories'
  }, {
    title: 'Members',
    pathname: 'members'
  }],
  navbarTheme: "dark",
  sidebarTheme: "light",
  sidebarMenuStyle: {
    height: '100%'
  },
  theme: {
    "primary-color": "#04a1a1",
    "btn-primary-bg": "#04a1a1",
    // "progress-default-color": "#158ebd",
    // navbar
    "layout-header-background": "#04a1a1",
    "menu-dark-bg": "#04a1a1",
    "menu-dark-item-selected-bg": "#04a1a1",
    "menu-dark-item-active-bg": "#04a1a1",

    // sidebar
    // "layout-sider-background-light": "#f4f4f4",
    // "menu-bg": "#f4f4f4",
    "menu-item-selected-bg": "#eef1f1",
    "menu-item-active-bg": "#eef1f1",
    // "layout-trigger-background": "#f9f9f9",
    // "border-radius-base": "3px",

    // body
    // "layout-body-background": "#f9f9f9",

    // table
    // "table-header-bg": "#9caec7",
    // "table-header-color": "#fff",

    // card
    // "card-head-background": '#337ab7',
    // "card-head-color": "#fff"
  }
}
