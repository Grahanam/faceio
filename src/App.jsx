import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Authenticate from './pages/authenticate'
import Home from './pages/home'
import './App.css'
import PrivateRoute from './utils/PrivateRoute'

import { AuthProvider } from './context/AuthContext'

function App() {
  

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/faceio" element={<Authenticate/>} exact/>
        <Route path="/faceio/dashboard" element={<PrivateRoute><Home/></PrivateRoute>} exact/>
      </Routes>
    </AuthProvider>  
    
    </BrowserRouter>
    
  )
}

export default App
