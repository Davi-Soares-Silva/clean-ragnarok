import * as yup from 'yup';
import { number, string, email } from '../index';

const registerUser = yup.object().shape({
  name: string.required('O nome é obrigatório'),
  email: email,
  password: string.required('A senha é obrigatória'),
  user_type_id: number('O id do tipo de usuário').required('O tipo de usuário é obrigatório'),
})

export { registerUser };