//components
// import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { isLoggedIn } from './Auth'
import Unauthorized from '../shared/Unauthorized'

const ProtectedRoute: React.FC = () => {
  const authenticated = isLoggedIn() 

  return authenticated ? <Outlet/>: <Unauthorized />
}

export default ProtectedRoute
