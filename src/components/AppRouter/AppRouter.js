import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { AboutScreen } from '../AboutScreen/AboutScreen'
import { HomeScreen } from '../HomeScreen/HomeScreen'
import { LoginScreen } from '../LoginScreen/LoginScreen'
import { NavBar } from '../NavBar/NavBar'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/' element={ <HomeScreen /> } />
          <Route exact path='/about' element={ <AboutScreen /> } />
          <Route exact path='/login' element={ <LoginScreen /> } />
          <Route exact path='about' element={ <AboutScreen /> } />
          <Route element={ <HomeScreen /> } />
        </Routes>
      </div>
    </Router>
  )
}
