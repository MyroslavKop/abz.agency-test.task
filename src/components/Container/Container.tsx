import styles from './Container.module.scss';
import ContainerProps from './interface';

const Container = ({ children }: ContainerProps) => {
  return <main className={styles.container}>{children}</main>;
};

export default Container;
