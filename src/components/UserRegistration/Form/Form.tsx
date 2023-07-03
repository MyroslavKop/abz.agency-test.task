import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { getPositions } from '../../../api/api';
import schema from '../../../helpers/schema';

import Button from '../../Button/Button';
import { FileUpload, RadioButton, TextField } from '../../Input/Input';

import axios from '../../../helpers/axios';
import styles from './Form.module.scss';
import { IFormValues, IPosition } from './interface';

const Form = () => {
  const [data, setData] = useState<IPosition[]>([]);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isDirty },
  } = useForm<IFormValues | any>({
    resolver: yupResolver(schema),
  });

  const hasErrors: boolean = Object.keys(errors).length > 0;
  const isFormEmpty: boolean = !isDirty;

  const onSubmit: SubmitHandler<IFormValues> = async (user) => {
    try {
      const data = await axios.post('users', {
        headers: {
          token:
            'eyJpdiI6Ik1YeG13cFRUTDU3bEdONElkeUp1OHc9PSIsInZhbHVlIjoiUnMrU2ZTaWNqU2ZFRnUzOGI4bjhPS1wvamZxaHB3S1wvRElvcVBUczNHVGdvaE53bmUxeTFFQ2FuZnZWalVORTdRXC84ODQxdkpSb0Z2cWJhNFlINDFicHc9PSIsIm1hYyI6IjYxYjQxNTgzY2ZhM2Q5MjJmMGZhYzhlZTk0YTc3MzY2OTU1ZGM1OGZkNjM5OTkyZGNkZmIzZjJiY2Q4M2ZiMmQifQ==',
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const { positions }: { positions: IPosition[] } = await getPositions();
        setData(positions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        label="Your name"
        placeholder="Your name"
        register={register}
        name="name"
        error={errors.name}
        errorMessage={errors.name?.message}
      />
      <TextField
        type="email"
        label="Email"
        placeholder="Email"
        register={register}
        name="email"
        error={errors.email}
        errorMessage={errors.email?.message}
      />
      <TextField
        type="tel"
        label="Phone"
        placeholder="Phone"
        helperText="+38 (XXX) XXX - XX - XX"
        register={register}
        error={errors.phone}
        errorMessage={errors.phone?.message}
        name="phone"
      />
      <div className={styles.RadioButtonBlock}>
        <p>Select your position</p>
        {data &&
          data.map(({ name, id }: IPosition, index: number) => {
            return (
              <React.Fragment key={id}>
                <RadioButton name={name} value={id} register={register} checked={index === 0} />
              </React.Fragment>
            );
          })}
      </div>
      <FileUpload register={register} watch={watch} error={errors.photo} errorMessage={errors.photo?.message} />
      <Button text="Sign up" type="submit" disabled={hasErrors || isFormEmpty} />
    </form>
  );
};

export default Form;
