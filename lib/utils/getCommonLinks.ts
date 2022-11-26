/**
 * Gets links used in header such as **Home**, **About**, **etc..**
 * @returns 
 */
const getCommonLinks = () => {
  return [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Meals",
      link: "/meals",
    },
    {
      title: "About",
      link: "/about",
    },
  ];
};

export default getCommonLinks;
