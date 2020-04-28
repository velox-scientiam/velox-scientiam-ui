type ClassesType<S extends (...args: any[]) => any, T extends ReturnType<S>> = {
  [P in keyof T]: string;
};

export interface WithStyles<T extends (...args: any[]) => any> {
  classes: ClassesType<T, ReturnType<T>>;
}

export interface FormProps {
  [key: string]: any;
  validationRules: ValidationProps;
}

export type Validator = (
  inputName: string,
  values: FormProps,
  arg?: any,
) => string;

export interface FormValidation {
  validator: Validator;
  arg?: any;
}

export interface ValidationProps {
  [key: string]: FormValidation | FormValidation[];
}
