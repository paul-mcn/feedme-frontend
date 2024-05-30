export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail);
    }
    return res.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Network Error: try again later");
    } else {
      throw error;
    }
  }
};
