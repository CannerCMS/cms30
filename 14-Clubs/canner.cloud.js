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
    title: "Back to home",
    pathname: '__backToHome',
    icon: 'left'
  }, {
    title: 'Group Members',
    pathname: 'groupMembers'
  }, {
    title: 'Members',
    pathname: 'members'
  }, {
    title: 'Groups',
    pathname: 'groups'
  }, {
    title: 'Group Types',
    pathname: 'groupTypes'
  }],
  theme: {
    "primary-color": "#8485be",
    "btn-primary-bg": "#8485be",
    "progress-default-color": "#8485be",
    // navbar
    "layout-header-background": "#8485be",
    "menu-dark-bg": "#8485be",
    "menu-dark-item-selected-bg": "#8485be",
    "menu-dark-item-active-bg": "#8485be",
    "menu-item-color": "#f2f2f2",
    "menu-highlight-color": "#fff",
    // sidebar
    "layout-sider-background-light": "#383545",
    "menu-bg": "#383545",
    "menu-item-selected-bg": "#43455B",
    "menu-item-active-bg": "#43455B",
    "layout-trigger-background": "#383545",
    "border-radius-base": "3px",
    "menu-item-active-border-width": "0px",

    // body
    "layout-body-background": "#eee",

    "table-header-bg": "#8485be",
    "table-header-color": "#fff"

    // card
    // "card-head-background": '#337ab7',
    // "card-head-color": "#fff"
  }
}
