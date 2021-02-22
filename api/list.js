import axios from 'axios'
import { baseUrl } from './_env'

export default {
  // GET http://....:3000/list
  list: () => axios.get(`${baseUrl}/list`),
  // GET http://....:3000/list/:id
  get: (id) => axios.get(`${baseUrl}/list/${id}`),
  // GET http://....:3000/list?q=keyword
  search: (keyword) => axios.get(`${baseUrl}/list?q=${keyword}`), 
}