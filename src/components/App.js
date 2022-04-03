import { useState } from 'react';
import './App.css';
import { AppRouter } from '../routers/AppRouter/AppRouter';
import { UserContext } from './UserContext/UserContext';

function App() {
  const [user, setUser] = useState({ });

  //Pasamos en el state el user y su setter, para que mediante el context se pueda
  //modificar desde los hijos
  return (
    <UserContext.Provider value={{user, setUser}} >
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
