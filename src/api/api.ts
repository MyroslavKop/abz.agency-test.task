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
        Token:
          'eyJpdiI6InhFbnFKZkFHUG5FRlkyU3A0UnFGcUE9PSIsInZhbHVlIjoidTRlME9uUlJoeU9YK1ZIK2hxK0xyam5xQWZJYTJNUXRvMGNld1ArMGE0SHJYQ1wvMXhJdjFpM1pjK3BMOVVneGliNWlBWEJsUmxCc1hGTmZDV0dsRGRnPT0iLCJtYWMiOiJkNzNhN2JkNjZjMTUxMWRmOGM4OGNhYzM3YjYyNGJkNjk5MTdiOTQyZWU0YWY2YjViNDdjZjg0MmY4OGM2MmNiIn0=',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
