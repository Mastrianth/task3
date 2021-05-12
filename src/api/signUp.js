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

const _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1';
const getResourse = async (url) => await fetch(`${_apiBase}${url}`);
const getUserInfo = async (userId) => await getResourse(`/users/${userId}`);

export {
  getResourse, getUserInfo,
};
