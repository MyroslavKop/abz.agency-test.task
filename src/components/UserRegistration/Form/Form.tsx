/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FileUpload, RadioButton, TextField } from '../../Input/Input';
import Spinner from '../../Spinner/Spinner';
import Button from '../../Button/Button';
import successImg from '../../../assets/svg/success-image.svg';

import { getPositions, getToken, getUsers, registerUser } from '../../../api/api';
import createFormData from '../../../helpers/createFormData';
import schema from '../../../helpers/schema';

import { IPosition, IUser } from '../../../interfaces';
import { IFormProps, IFormValues } from './interface';
import styles from './Form.module.scss';

const Form = ({ successRegistration, setSuccessRegistration, setUsers }: IFormProps) => {
  const [data, setData] = useState<IPosition[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors, isDirty },
  } = useForm<IFormValues | any>({
    resolver: yupResolver(schema),
  });

  const hasErrors: boolean = Object.keys(errors).length > 0;
  const isFormEmpty: boolean = !isDirty;

  const onSubmit: SubmitHandler<IFormValues> = async (user: IFormValues) => {
    try {
      setLoading(true);
      const { token, success: successToken } = await getToken();
      let response;

      if (successToken) {
        const formData = createFormData(user);
        const { success } = await registerUser(token, formData);

        if (success) {
          setSuccessRegistration(true);
          reset();

          try {
            const { users }: { users: IUser[] } = await getUsers(1);
            setUsers(users);
          } catch (error) {
            console.error(error);
          }

          setTimeout(() => {
            setSuccessRegistration(false);
          }, 1000);
        }
      }
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
    <>
      {successRegistration ? (
        <div className={styles.successBlock}>
          <img className={styles.successImg} src={successImg} />
        </div>
      ) : (
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
                    <RadioButton name={name} value={id} register={register} isChecked={index === 0} />
                  </React.Fragment>
                );
              })}
          </div>
          <FileUpload register={register} watch={watch} error={errors.photo} errorMessage={errors.photo?.message} />
          {loading ? <Spinner /> : <Button text="Sign up" type="submit" disabled={hasErrors || isFormEmpty} />}
        </form>
      )}
    </>
  );
};

export default Form;
