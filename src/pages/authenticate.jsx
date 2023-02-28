import { useContext} from 'react'
import AuthContext from '../context/AuthContext';


function Authenticate() {
  let {LoginUser,SignupUser}=useContext(AuthContext)

  return (
    <section>
      <h1>Face Authetication</h1>
      <button onClick={LoginUser}>Login</button>
      <br/>
      <br/>
      <hr/>

      <section>
        <h4>New User</h4>
        <form onSubmit={SignupUser}>
          <div>
            <input type="email" name="email" placeholder="Enter Email" required />
          </div>
          <div>
            <input type="password" name="pass" placeholder="Enter 4 Digit Pin"/>
          </div>
          <br/>
          <button type="submit">Signup</button>
        </form>
      </section>
      
      
      
    </section>
  )
}

export default Authenticate