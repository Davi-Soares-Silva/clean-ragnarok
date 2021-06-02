import * as yup from 'yup';
import { string, email } from '..'

const loginUser = yup.object().shape({
  email: email,
  password: string.required('A senha é obrigatória')
})

export { loginUser };