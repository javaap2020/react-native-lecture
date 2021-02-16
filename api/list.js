import axios from 'axios'
import { baseUrl } from './_env'

export default {
  list: ()=> axios.get(`${baseUrl}/list`),
  get: (id)=> axios.get(`${baseUrl}/list/${id}`),
  search: (keyword)=> axios.get(`${baseUrl}/list?q=${keyword}`),
}