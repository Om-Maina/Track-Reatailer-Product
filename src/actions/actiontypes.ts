import { ACCTypes } from './Types'
export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const RESET = 'RESET'

export const createRequestTypes = (base: string) => {
  return [REQUEST, SUCCESS, FAILURE, RESET].reduce((acc: ACCTypes, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const action = (type: string, payload = {}) => {
  return { type, ...payload }
}

export const LOGIN = createRequestTypes('LOGIN')
export const REFRESH = createRequestTypes('REFRESH')