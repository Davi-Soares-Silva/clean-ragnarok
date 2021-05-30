import { ValidationError } from 'yup';

export interface PrettyYupError {
  message: string;
  param: string | undefined;
}

export function formatYupError(error: ValidationError): PrettyYupError[] {
  return error.inner.map((item) => ({
    message: item.message,
    param: item.path,
  }));
}
