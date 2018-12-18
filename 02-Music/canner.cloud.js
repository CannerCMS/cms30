const {FirebaseCredential} = require('canner-credential');

module.exports = {
  env: {
    default: [new FirebaseCredential(require('./cert.json'))]
  },
  sidebarMenu: [{
    title: 'Back to home',
    pathname: '__back',
    href: '/',
    icon: 'left'
  }, {
    title: 'Albums',
    pathname: '/albums',
    icon: 'solution'
  }, {
    title: 'Artists',
    pathname: '/artists',
    icon: 'user'
  },  {
    title: 'Songs',
    pathname: '/songs',
    icon: 'play-circle'
  }],
  navbarTheme: 'dark',
  sidebarTheme: 'light',
  theme: {
    // https://colorlib.com/polygon/notika/index-4.html
    "primary-color": "#00bf94",
    "btn-primary-bg": "#00bf94",
    "layout-body-background": "#f6f8fa",
    "layout-header-background": "#00bf94",
    "menu-bg": "transparent",
    "menu-dark-bg": "transparent",
    "item-active-bg": "",
    "item-hover-bg": "",
    "border-radius-base": "2px"
    // "progress-default-color": "#6bbcbc",
    // "font-size-base": "14px",
    // // https://colorlib.com//polygon/admindek/default
    // "menu-dark-bg": "#2A3544",
    // "layout-sider-background": "#2A3544",
    // "layout-trigger-background": "#2A3544",
    // "menu-dark-item-selected-bg": "#1a2431",
    // "menu-dark-item-active-bg": "#1a2431",
    // "input-height-base": "44px",
    // "card-shadow": "0 0 5px 0 rgba(43,43,43,0.1), 0 11px 6px -7px rgba(43,43,43,0.1)",
  }
}
