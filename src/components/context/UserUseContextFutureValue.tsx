import { useContext } from 'react'
import { UserContext } from './UserContext'

export const UserUseContextFutureValue = () => {
  const userContext = useContext(UserContext)
  const handleLogin = () => {
    userContext.setUser({
      name: 'Quan Dao',
      email: 'daotrungquan105@gmail'
    })
  }
  const handleLogout = () => {
      userContext.setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  )
}
