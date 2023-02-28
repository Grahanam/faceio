import { useEffect} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Authenticate from './pages/authenticate'
import Home from './pages/home'
import './App.css'
import PrivateRoute from './utils/PrivateRoute'
import Layout from './hocs/layout'

import { AuthProvider } from './context/AuthContext'

function App() {
  

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
        {/* <Route path="/*" element={<Layout/>} exact/> */}
        <Route path="/authenticate" element={<Authenticate/>}/>
        
      </Routes>
    </AuthProvider>  
    
    </BrowserRouter>
    
  )
}

export default App