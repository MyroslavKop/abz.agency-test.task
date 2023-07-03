import * as yup from 'yup';

const phoneRegExp: RegExp = /^[\+]{0,1}380([0-9]{9})$/;
const MAX_FILE_SIZE: number = 5 * 1024 * 1024; //5MB

const validFileExtensions: Record<string, string[]> = {
  image: ['jpg', 'jpeg'],
};

function isValidFileType(fileName: string, fileType: string): boolean {
  const fileExtension = fileName.split('.').pop();
  return !!fileExtension && validFileExtensions[fileType].includes(fileExtension.toLowerCase());
}

const schema = yup.object({
  name: yup.string().trim().required('This field is required!').min(2, 'Min length is 2').max(60, 'Max length is 60'),
  email: yup.string().email('Must be a valid email').trim().required('This field is required!'),
  phone: yup.string().trim().required('This field is required!').matches(phoneRegExp, 'Phone number is not valid'),
  photo: yup
    .mixed<FileList>()
    .test('is-valid-file', 'Photo is required', (value) => value && value.length > 0)
    .test('is-valid-size', 'Max allowed size is 5MB', (value) => value && value[0] && value[0].size <= MAX_FILE_SIZE)
    .test(
      'is-valid-type',
      'Not a valid image type',
      (value) => value && value[0] && isValidFileType(value[0].name.toLowerCase(), 'image'),
    ),
});

export default schema;
