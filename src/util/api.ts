export const fetchData = async (input: RequestInfo, options?: RequestInit) => {
  try {
    const res = await fetch(input, options);
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
