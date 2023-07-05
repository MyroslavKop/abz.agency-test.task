import { Dispatch, SetStateAction } from 'react';

import { IUser } from '../../interfaces';

export interface IUsersProps {
  data: IUser[];
  setData: Dispatch<SetStateAction<IUser[]>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
