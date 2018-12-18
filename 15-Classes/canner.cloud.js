module.exports = {
  env: {
    default: []
  },

  navbarTheme: "dark",
  sidebarTheme: "light",
  sidebarMenu: [{
    title: "Back to home",
    pathname: '__backToHome',
    icon: 'left'
  }, {
    title: 'Students',
    pathname: 'students'
  }, {
    title: 'Courses',
    pathname: 'courses'
  }, {
    title: 'Rooms',
    pathname: 'rooms'
  }, {
    title: 'Departments',
    pathname: 'deps'
  }],
  theme: {
    "primary-color": "#39baea",
    "btn-primary-bg": "#39baea",
    "progress-default-color": "#9caec7",
    // navbar
    "layout-header-background": "#171e25",
    "menu-dark-bg": "#171e25",
    "menu-dark-item-selected-bg": "#39baea",
    "menu-dark-item-active-bg": "#39baea",
    "menu-item-color": "#f2f2f2",
    "menu-highlight-color": "#fff",
    // sidebar
    "layout-sider-background-light": "#314257",
    "menu-bg": "#314257",
    "menu-item-selected-bg": "#28b2e6",
    "menu-item-active-bg": "#28b2e6",
    "layout-trigger-background": "#314257",
    "border-radius-base": "3px",
    "menu-item-active-border-width": "0px",

    // body
    "layout-body-background": "#e9eef5",

    "table-header-bg": "#9caec7",
    "table-header-color": "#fff",
    // card
    // "card-head-background": '#337ab7',
    // "card-head-color": "#fff"
  }
}