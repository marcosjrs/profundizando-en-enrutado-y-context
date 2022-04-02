import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext/UserContext';

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    setUser({...user, email, token:Date.now()})
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={(evt)=>setEmail(evt.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <pre>{ JSON.stringify(user, null, 3) }</pre>
      { user.email && 'En el resto de pantallas ya puedes disponer de estos valores'}
    </>
  )
}
