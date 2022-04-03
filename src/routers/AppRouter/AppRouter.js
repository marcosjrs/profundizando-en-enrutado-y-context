import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { AboutScreen } from '../../components/AboutScreen/AboutScreen'
import { HomeScreen } from '../../components/HomeScreen/HomeScreen'
import { LoginScreen } from '../../components/LoginScreen/LoginScreen'
import { NavBar } from '../../components/NavBar/NavBar'

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
