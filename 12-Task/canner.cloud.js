module.exports = {
  env: {
    default: []
  },

  navbarTheme: "dark",
  sidebarTheme: "light",
  sidebarMenu: [{
    pathname: '__backToHome',
    title: 'Back to home',
    icon: 'left',
    href: '/'
  }, {
    title: 'Tasks',
    pathname: 'tasks',
  }, {
    title: 'Employees',
    pathname: 'employees'
  }, {
    title: 'Teams',
    pathname: 'teams'
  }, {
    title: 'Time Tyoes',
    pathname: 'timeTypes'
  }],
  theme: {
    "primary-color": "#04a1a1",
    "btn-primary-bg": "#04a1a1",
    // "progress-default-color": "#04a1a1",
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
    "layout-body-background": "#f9f9f9",


    // card
    // "card-head-background": '#337ab7',
    // "card-head-color": "#fff"
  }
}
