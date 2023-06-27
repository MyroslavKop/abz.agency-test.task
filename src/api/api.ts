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
