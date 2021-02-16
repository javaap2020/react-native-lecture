import axios from 'axios'
import { baseUrl } from './_env'

export default {
  list: ()=> axios.get(`${baseUrl}/actions`),
  post: (data)=> axios.post(`${baseUrl}/actions`, data),
  delete: (id)=> axios.delete(`${baseUrl}/actions/${id}`),
}