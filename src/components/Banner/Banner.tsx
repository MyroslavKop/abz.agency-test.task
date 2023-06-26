import Button from '../Button/Button';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentBlock}>
        <h1 className={styles.title}>Test assignment for front-end developer</h1>
        <p className={styles.description}>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
          understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
          should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>
        <Button text="Sign up" />
      </div>
    </section>
  );
};

export default Banner;
