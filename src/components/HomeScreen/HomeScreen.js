import React, { useContext } from 'react'
import { UserContext } from '../UserContext/UserContext'

export const HomeScreen = () => {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h2>HomeScreen</h2>
      <div>
        <div>token: {user.token}</div>
        <div>email: {user.email}</div>      
      </div>
      <pre>{ JSON.stringify(user, null, 3) }</pre>
    </div>
  )
}
