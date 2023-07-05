import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { IFormValues } from '../UserRegistration/Form/interface';

export interface ITextField {
  placeholder: string;
  type: string;
  label: string;
  helperText?: string;
  register: UseFormRegister<IFormValues>;
  errorMessage?: any;
  name: 'phone' | 'email' | 'name';
  error?: any;
}

export interface IRadioButton {
  name: string;
  register: UseFormRegister<IFormValues>;
  value: string | number;
  isChecked: boolean;
}

export interface IFileUpload {
  register: UseFormRegister<IFormValues>;
  watch: UseFormWatch<IFormValues>;
  error: any;
  errorMessage: any;
}
