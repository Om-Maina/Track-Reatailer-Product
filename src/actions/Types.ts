import { AnyAction } from 'redux'

export type ACCTypes = {
  [key: string]: string
}

export type data = {
  data: []
}

export interface actions {
  type: string
  payload: any
}
