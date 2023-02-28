import { useEffect,useContext} from 'react'
import AuthContext from '../context/AuthContext'
import axios from 'axios'
import { fetchToCurl } from 'fetch-to-curl';


function Home() {
    let {LogoutUser,emailid,id}=useContext(AuthContext)
    
    const deleteuser=async ()=>{
        // const res = await axios.get('https://api.faceio.net/deletefacialid', 
        // { params: 
        //     { fid:`${id}`,key: "d2b40fe5a7ebddab9471ad9454f8532c" } ,
        //     headers:{"access-control-allow-origin" : "*",
        //     "Content-type": "application/json; charset=UTF-8"}
        // });
        // console.log(res)

        // const response=await fetch(
        //     'https://api.faceio.net/deletefacialid',{
        //         method:'GET',
        //         body:JSON.stringify(params)
        //     }
            
        // ).then((response)=>response.json());
        // console.log(response)
        const response = await fetch('https://api.faceio.net/deletefacialid?' + new URLSearchParams({
            fid:"4ace553efcd841c78f766b2a4aab9feafioa61a9",
            key: "d2b40fe5a7ebddab9471ad9454f8532c",
            method:"GET",
            headers:{
                "access-control-allow-origin" : "*",
      "Content-type": "application/json; charset=UTF-8"
            }
        })).then((response)=>response.json());
         console.log(response)
        // console.log(fetchToCurl({
        //     url: `https://api.faceio.net/deletefacialid?id=${id}&key=d2b40fe5a7ebddab9471ad9454f8532c`,
        //     // headers: new Headers({
        //     //   Authorization: "BASIC SOMEBASE64STRING"
        //     // }),
        //     method: 'get'
        //   }))
    }


    
  return (
    <section>
      <h2>Welcome,{emailid}</h2>
      <button onClick={deleteuser}>Delete Account</button>
      <button onClick={LogoutUser}>Logout</button>
     
    </section>
  )
}

export default Home