import * as yup from 'yup';
import { number, string, url } from '../';

export const createGame = yup.object().shape({
  name: string.required('O nome é obrigatório'),
  description: string.required('A descrição é obrigatória'),
  price: number('O preço').required('O preço é obrigatório'),
  platform_id: number('O id da plataforma').required('A plataforma é obrigatória'),
  image_url: url.required('A imagem é obrigatória'),
})
