import { useState } from 'react'

type AuthUserProps = {
  name: string
  email: string
}

export const UserUseStateFutureValue = () => {
  const [user, setUser] = useState<AuthUserProps | null>(null)
  const handleLogin = () => {
    setUser({
      name: 'Quan Dao',
      email: 'daotrungquan105@gmail.com',
    })
  }
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}
