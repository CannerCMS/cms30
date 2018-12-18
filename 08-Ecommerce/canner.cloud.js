module.exports = {
  env: {
    default: []
  },
  logo: 'https://cdn.canner.io/images/logo/logo-word.png',
  sidebarMenu: [{
    title: 'Back to home',
    pathname: '__backToHome',
    href: 'https://cms30.canner.io/',
    icon: 'left'
  }, {
    title: 'Products',
    pathname: 'products',
    icon: 'shopping-cart'
  }, {
    title: 'Categories',
    pathname: 'categories',
    icon: 'tags'
  }, {
    title: 'Orders',
    pathname: 'orders',
    icon: 'solution'
  }, {
    title: 'Customers',
    pathname: 'customers',
    icon: 'team'
  }, {
    title: 'Home',
    pathname: 'home',
    icon: 'home'
  }],
  navbarTheme: "light",
  sidebarTheme: "light",
  sidebarMenuStyle: {
    height: '100%',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)'
  },
  navbarStyle: {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)',
    zIndex: 10,
    height: '66px',
    lineHeight: '66px'
  },
  theme: {
    "primary-color": "#00AAF8",
    "btn-primary-bg": "#00AAF8",
    "progress-default-color": "#00AAF8",
    // navbar
    "layout-header-background": "#fff",
    "menu-bg": "#fff",
    // "menu-item-selected-bg": "#3c8dbc",
    // "menu-item-active-bg": "#3c8dbc",

    // sidebar
    "layout-sider-background-light": "#fff",
    // "menu-item-selected-bg": "#f9f9f9",
    // "menu-item-active-bg": "#f9f9f9",
    "layout-trigger-background": "#fff",
    "border-radius-base": "4px",

    // body
    "layout-body-background": "#f1f2f7",


    // card
    // "card-head-background": '#337ab7',
    // "card-head-color": "#fff",
    // "card-shadow": '0 0 20px rgba(0, 0, 0, 0.08)',
  }
}
