/**
 * Gets links for auth related paths
 * @returns 
 */
const getAuthLinks = () => {
  return [
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "logout",
      link: "/logout",
    },
  ];
};

export default getAuthLinks;
