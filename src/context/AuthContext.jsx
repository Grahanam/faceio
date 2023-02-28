import React, { useEffect,useState,createContext } from 'react'
import {useNavigate} from 'react-router-dom'

const AuthContext=createContext()

export default AuthContext;



export const AuthProvider=({children})=>{
    let [email,setemailid]=useState(()=>localStorage.getItem('id') ?localStorage.getItem('id'):null)
    let [id,setId]=useState(()=>localStorage.getItem('faceid') ?localStorage.getItem('faceid'):null)
    let [loading,setLoading]=useState(true)
    const navigate=useNavigate()

    let faceio;
    
    let SignupUser=async(e)=>{
        e.preventDefault()
        console.log(e.target.email.value)
        try {
            let response = await faceio.enroll({
              locale: "auto",
              payload: {
                email: e.target.email.value,
                // pin:e.target.pass.value,
              },
            });
        
            console.log(` Unique Facial ID: ${response.facialId}
            Enrollment Date: ${response.timestamp}
            Gender: ${response.details.gender}
            Age Approximation: ${response.details.age}`);
            //Add your Backend endpoint to save user data
            navigate('/faceio')
          } catch (error) {
            console.log(error);
          }
    }
    let LoginUser=async()=>{
        try {
            let response = await faceio.authenticate({
              locale: "auto",
            });
            console.log(response)
        
            console.log(` Unique Facial ID: ${response.facialId}
                PayLoad: ${response.payload.email}
                `);
            localStorage.setItem('faceid',response.facialId)
            localStorage.setItem('id',response.payload.email)          
          } catch (error) {
            console.log(error);
          }
          location.reload();
          // navigate("/faceio");
    }
    let LogoutUser=()=>{
        setId(null)
        setemailid(null)
        localStorage.removeItem('faceid')
        localStorage.removeItem('id')
        
        navigate('/faceio')
    }
    let contextData={
      SignupUser:SignupUser,
      LoginUser:LoginUser,
      LogoutUser:LogoutUser,
      id:id,
      emailid:email

  }



    useEffect(()=>{
        if(id){
            setId(localStorage.getItem('faceid'))
        }
        if(email){
          setemailid(localStorage.getItem('id'))
          navigate('/faceio/dashboard')
        }
        setLoading(false)
        faceio = new faceIO("fioa61a9");
        
    },[email,id,loading])
    return(
        <AuthContext.Provider value={contextData}>
            {loading?null:children}
        </AuthContext.Provider>
    )

}