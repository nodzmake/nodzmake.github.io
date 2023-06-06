import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API
export const submitNodz = async formData => await axios.post('/gfx', formData)
export const genNodz = async num => await axios.get(`/gen-img?num=${num}`)
