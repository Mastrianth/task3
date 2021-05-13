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

const apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1';
const getResourse = (url) => fetch(`${apiBase}${url}`);
const getUserInfo = (userId) => getResourse(`/users/${userId}`);
const getToken = async () => await getResourse('/token');

const userRegisterRequest = async ({
  name, email, phone, photo: { 0: photo }, position_id, token,
}) => {
  const formData = new FormData();
  formData.append('position_id', position_id);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', photo);

  return fetch(`${apiBase}/users`, {
    method: 'post',
    headers: new Headers({
      Token: token,
    }),
    body: formData,
  });

  // return await axios.post(`${_apiBase}/users`, formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //     Token: token,
  //   },
  // });
};

export {
  getResourse, getUserInfo, getToken, userRegisterRequest,
};
