import * as yup from 'yup';

export const string = yup.string().nullable(true);

export const number = (field: string) =>
  yup.string().matches(/[0-9]/, `${field} precisa ser um número`);

  export const url = yup
  .string()
  .matches(
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    'A url está inválida',
  )
  .nullable(true)
  .required('A url é obrigatória');

  