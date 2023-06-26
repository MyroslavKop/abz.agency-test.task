import { useEffect, useState } from 'react';

import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';

import { getUsers } from '../../api/api';
import IUser from './interface';
import styles from './Users.module.scss';

const Users = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const { users }: { users: IUser[] } = await getUsers(page);
        setData(data.concat(users));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const handleLoadPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className={styles.users}>
      <h2 className={styles.title}>Working with GET request</h2>
      <div className={styles.cards}>
        {data &&
          data.map(({ photo, name, position, email, phone, id }: IUser) => (
            <div key={id} className={styles.card}>
              <img src={photo} alt={name} className={styles.photo} />
              <p>{name}</p>
              <div>
                <p className={styles.text}>{position}</p>
                <p className={styles.text}>{email}</p>
                <p className={styles.text}>{phone}</p>
              </div>
            </div>
          ))}
      </div>
      {loading ? <Spinner /> : <Button text="Show more" onClick={handleLoadPage} />}
    </section>
  );
};

export default Users;
