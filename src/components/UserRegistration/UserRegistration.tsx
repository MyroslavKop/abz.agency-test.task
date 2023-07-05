import { Dispatch, SetStateAction, useState } from 'react';

import Form from './Form/Form';

import { IUser } from '../../interfaces';
import styles from './UserRegistration.module.scss';

const UserRegistration = ({ setData }: { setData: Dispatch<SetStateAction<IUser[]>> }) => {
  const [successRegistration, setSuccessRegistration] = useState<boolean>(false);

  return (
    <section className={styles.userRegistration} id="user-registration">
      <h2 className={styles.title}>
        {!setSuccessRegistration ? 'Working with POST request' : 'User successfully registered'}
      </h2>
      <Form
        setUsers={setData}
        successRegistration={successRegistration}
        setSuccessRegistration={setSuccessRegistration}
      />
    </section>
  );
};

export default UserRegistration;
