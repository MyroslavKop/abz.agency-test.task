import { IFormValues } from '../components/UserRegistration/Form/interface';

const createFormData = (user: IFormValues) => {
  const formData = new FormData();
  formData.append('name', user.name);
  formData.append('email', user.email);
  formData.append('phone', user.phone);
  formData.append('photo', user.photo[0]);
  user.position_id && formData.append('position_id', user.position_id);
  return formData;
};

export default createFormData;
