import { useState } from 'react'

type AuthUserProps = {
  name: string
  email: string
}

export const UserUseStateTypeAssertion = () => {
  const [user, setUser] = useState<AuthUserProps>({} as AuthUserProps)
  const handleLogin = () => {
    setUser({
      name: 'Quan Dao',
      email: 'daotrungquan105@gmail.com',
    })
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  )
}
