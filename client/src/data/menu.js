export const menu = [
  {
    menuItem: "Home",
    menuLink: "/",
    className: "option",
    loginView: true,
    logoutView: true,
  },
  {
    menuItem: "Login",
    menuLink: "/login",
    className: "option",
    loginView: false,
    logoutView: true,
  },
  {
    menuItem: "Search",
    menuLink: "/search",
    className: "option",
    loginView: true,
    logoutView: true,
  },
  {
    menuItem: "Profile",
    menuLink: "/me",
    className: "option",
    loginView: true,
    logoutView: false,
  },
];

export default menu;
