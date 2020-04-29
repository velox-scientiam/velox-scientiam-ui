/* type ClassesType<S extends (...args: any[]) => any, T extends ReturnType<S>> = {
  [P in keyof T]: string;
};

export interface WithStyles<T extends (...args: any[]) => any> {
  classes: ClassesType<T, ReturnType<T>>;
}

export interface FormProps<T> {
  values: T;
  validationRules: ValidationProps<T>;
}

export type Validator<T> = (
  inputName: string,
  values: T,
  arg?: string | number,
) => string;

export interface FormValidation<T> {
  validator: Validator<T>;
  arg?: string | number;
}

export interface ValidationProps<T> {
  [key: string]: FormValidation<T> | FormValidation<T>[];
}
 */
export interface SignUpFormFields {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormFields {
  email: string;
  password: string;
}
