import { useEffect,useContext} from 'react'
import { Form } from 'react-router-dom';
import AuthContext from '../context/AuthContext';



function Authenticate() {
  let {LoginUser,SignupUser}=useContext(AuthContext)
  let faceio;
useEffect(() => {
    faceio = new faceIO("fioa61a9");
}, []);
const handleSignUp = async () => {
  try {
    let response = await faceio.enroll({
      locale: "auto",
      payload: {
        email: "example@gmail.com",
        pin: "12345",
      },
    });

    console.log(` Unique Facial ID: ${response.facialId}
    Enrollment Date: ${response.timestamp}
    Gender: ${response.details.gender}
    Age Approximation: ${response.details.age}`);
  } catch (error) {
    console.log(error);
  }
};
// const handleLogIn = async () => {
//   try {
//     let response = await faceio.authenticate({
//       locale: "auto",
//     });

//     console.log(` Unique Facial ID: ${response.facialId}
//         PayLoad: ${response.payload}
//         `);
//   } catch (error) {
//     console.log(error);
//   }
// };

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