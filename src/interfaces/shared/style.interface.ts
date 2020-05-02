type ClassesType<S extends (...args: any[]) => any, T extends ReturnType<S>> = {
  [P in keyof T]: string;
};

export interface WithStyles<T extends (...args: any[]) => any> {
  classes: ClassesType<T, ReturnType<T>>;
}

export interface ButtonProps {
  buttonText: string;
  variant: 'text' | 'outlined' | 'contained';
  type: 'button' | 'reset' | 'submit';
  color: 'inherit' | 'default' | 'primary' | 'secondary';
}

export interface TypographyProps {
  headerText: string;
  type:
    | 'inherit'
    | 'button'
    | 'overline'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'srOnly';
}
