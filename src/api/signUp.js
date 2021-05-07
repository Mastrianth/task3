export const fetchPositions = () => fetch(`${process.env.NEXT_PUBLIC_API_URL}/positions`);
export const fetchToken = () => fetch(`${process.env.NEXT_PUBLIC_API_URL}/token`);
export const postForm = (formData, token) => fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/users`,
  {
    method: 'POST',
    body: formData,
    headers: {
      Token: token,
    },
  },
);
