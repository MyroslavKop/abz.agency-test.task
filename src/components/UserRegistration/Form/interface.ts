export interface IFormValues {
  name: string;
  phone: string;
  email: string;
  position_id?: string;
  photo: FileList;
}

export interface IPosition {
  id: number;
  name: string;
}
