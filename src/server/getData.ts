export const userUrl = "http://localhost:3000";

export const getData = async (url: string) => {
  const response = await fetch(`${userUrl}/${url}`);

  if (!response.ok) {
    throw new Error("GET request failed");
  }

  return response.json();
};
