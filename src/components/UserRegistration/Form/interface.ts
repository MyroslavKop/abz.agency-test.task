import { Dispatch, SetStateAction } from 'react';

import { IUser } from '../../../interfaces';

export interface IFormValues {
  name: string;
  phone: string;
  email: string;
  position_id?: string;
  photo: FileList;
}

export interface IFormProps {
  successRegistration: boolean;
  setSuccessRegistration: Dispatch<SetStateAction<boolean>>;
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}
