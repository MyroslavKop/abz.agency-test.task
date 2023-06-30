import Form from './Form/Form';
import styles from './UserRegistration.module.scss';

const UserRegistration = () => {
  return (
    <section className={styles.userRegistration}>
      <h2 className={styles.title}>Working with POST request</h2>
      <Form />
    </section>
  );
};

export default UserRegistration;
