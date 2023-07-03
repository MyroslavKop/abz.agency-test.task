import styles from './Input.module.scss';
import { IFileUpload, IRadioButton, ITextField } from './interface';

export const TextField = ({
  placeholder,
  type,
  label,
  helperText,
  register,
  name,
  error,
  errorMessage,
}: ITextField) => {
  return (
    <div className={styles.textField}>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        className={`${styles.textFieldInput} ${error && styles.textFieldError}`}
        {...register(name)}
      />
      <label htmlFor={name} className={`${styles.textFieldLabel} ${error && styles.textFieldLabelError}`}>
        {label}
      </label>
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      {error && <span className={`${styles.helperText} ${styles.helperTextError}`}>{errorMessage}</span>}
    </div>
  );
};

export const RadioButton = ({ register, name, value, checked }: IRadioButton) => {
  return (
    <div className={styles.radioButton}>
      <input
        className={styles.radioButtonInput}
        type="radio"
        id={name}
        {...register('position_id')}
        value={value}
        checked={checked}
      />
      <label className={styles.radioButtonLabel} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export const FileUpload = ({ register, watch, error, errorMessage }: IFileUpload) => {
  return (
    <div className={styles.fileUpload}>
      <input type="file" className={styles.fileUploadInput} id="photo" {...register('photo')} />
      <label htmlFor="photo" className={styles.fileUploadLabel}>
        Upload
      </label>
      <div className={styles.fileUploadDescription}>
        {!watch('photo') || watch('photo').length === 0 ? (
          <span>Upload your photo</span>
        ) : (
          <span className={styles.file}>{watch('photo')[0].name}</span>
        )}
      </div>
      {error && <span className={styles.helperTextError}>{errorMessage}</span>}
    </div>
  );
};
