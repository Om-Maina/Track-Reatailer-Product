import * as RestAPI from './rest'

export const getLoginAuth = (data: any) => RestAPI.POST(`/auth/login`, {customer_id:"2324243144232", secret:"fsfdsfdsf", open:"true"})

export const getRefreshToken = (data: any) => RestAPI.GET_WITH_CREDS(`/auth/refresh`,{})
