import axios from 'axios'
import { useGlobal } from '../stores/counter'
const BaseUrl = 'http://api.laboulangerie.net'
const options = {
  url: BaseUrl,
  params: {}
}

export const fetchFromAPI = async (url) => {
  const global = useGlobal()
  global.loading = true
  const { data } = await axios.get(`${BaseUrl}/${url}`, options)
  global.loading = false
  return data
}
