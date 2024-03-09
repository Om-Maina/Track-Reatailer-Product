export const isLoggedIn = () => {
  let token: any = localStorage.getItem('token')
  if (token && token.length) {
    return token
  } else {
    // return null
    return null
  }
}
