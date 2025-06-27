import { LoginUser } from "../component/Login";
import { User } from "../component/Register";

export const baseUrl = 'http://localhost:3000';

export const postData = async (url: string, data: User | LoginUser) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Request failed');
  }

  return response.json();
};
