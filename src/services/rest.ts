import axios from 'axios'
import { isLoggedIn } from '../auth/Auth'


const api:any = axios.create({
  // baseURL: `https://reqres.in/api`,
  baseURL: "http://localhost:3000/",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${isLoggedIn()}`,
  },
})

const apiRefresh:any = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    withCredentials: true,
  },
})



export const addAuthToken = () => {
  api.defaults.headers['token'] = isLoggedIn()
  api.defaults.headers['Authorization'] = `Bearer ${isLoggedIn()}`
}

export const GET = async (url: string, params = {}) => {
  const response = await api.get(url, { params })
  return response
}

export const POST = async (url: string, data: object) => {
  const response = await api.post(url, data)
  return response
}

export const PUT = async (url: string, data: object) => {
  const response = await api.put(url, data)
  return response
}

export const DELETE = async (url: string) => {
  const response = await api.delete(url)
  return response
}

export const PATCH = async (url: string, data: object) => {
  const response = await api.patch(url, data)
  return response
}


// export const GET_WITH_CREDS = async (url: string, data: object) => {
//   const response = await api.post(url, data, {
//     headers: {
//       withCredentials: 'true',
//     },
//   })
//   return response
// }

export const GET_WITH_CREDS = async (url: string, params = {}) => {
  const response = await apiRefresh.get(url, {
    params,
    // Include this line to send cookies
  });
  return response
}