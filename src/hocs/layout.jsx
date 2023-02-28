import { useEffect,useContext} from 'react'
import {Routes,Route} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import Home from '../pages/home'
import PrivateRoute from '../utils/PrivateRoute'


function Layout() {
  return (
    <Routes>
        <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} exact/>
    </Routes>
  )
}

export default Layout