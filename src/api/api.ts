import axios from '../helpers/axios';

export const getUsers = async (page: number): Promise<any> => {
  try {
    const data = await axios.get('/users?', {
      params: {
        page,
        count: 6,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPositions = async (): Promise<any> => {
  try {
    const data = await axios.get('/positions');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async (): Promise<any> => {
  try {
    const data = await axios.get('/token');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (token: string, userInfo: any): Promise<any> => {
  try {
    const data = await axios.post('/users', userInfo, {
      headers: {
        Token: token,
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
