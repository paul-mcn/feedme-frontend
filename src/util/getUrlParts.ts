export const getOrigin = (urlString: string) => {
  try {
    const url = new URL(urlString);
    return url.origin;
  } catch (error) {
    console.log(error);
    return "";
  }
};
export const getNameFromUrl = (urlString: string) => {
  try {
    const url = new URL(urlString);
    const host = url.host.replace("www.", "").split(".")[0];
    return host;
  } catch (error) {
    console.log(error);
    return "";
  }
};
