import {Navigate} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute=({children})=>{
    let {id}=useContext(AuthContext)
    return(<>
        {!id ?<Navigate to="/faceio" />:children}
        </>
    )
}

export default PrivateRoute;