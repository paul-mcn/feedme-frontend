export const fetchData = async (
  input: RequestInfo | URL,
  options?: RequestInit,
) => {
  try {
    const res = await fetch(input, options);
    if (!res.ok) {
      const error = await res.json();
      console.log(error);
      throw new Error(error.detail);
    }
    return res.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(error);
      throw new Error("Network Error: try again later");
    } else {
      throw error;
    }
  }
};
