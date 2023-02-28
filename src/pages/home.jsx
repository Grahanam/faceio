import { useContext} from 'react'
import AuthContext from '../context/AuthContext'


function Home() {
    let {LogoutUser,emailid}=useContext(AuthContext)
  
  return (
    <section>
      <h2>Welcome,{emailid}</h2>
      <button onClick={LogoutUser}>Logout</button>
     
    </section>
  )
}

export default Home