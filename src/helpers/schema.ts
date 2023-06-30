import * as yup from 'yup';

const phoneRegExp = /^[\+]{0,1}380([0-9]{9})$/;
const MAX_FILE_SIZE = 5120; //5MB

const schema = yup.object({
  name: yup.string().trim().required('This field is required!').min(2, 'Min length is 2').max(60, 'Max length is 60'),
  email: yup.string().email('Must be a valid email').trim().required('This field is required!'),
  phone: yup.string().trim().required('This field is required!').matches(phoneRegExp, 'Phone number is not valid'),
  photo: yup
    .mixed<FileList>() // Pass in the type of `fileUpload`
    .required('Photo is required')
    .test('is-valid-size', 'Max allowed size is 5MB', (value) => value && value.size <= MAX_FILE_SIZE),
});

export default schema;
