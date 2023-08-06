
'use client'
import { useEffect, useState } from "react";
import Nav from "../../(components)/Nav";
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import axios from 'axios';
import { useRouter } from "next/navigation";
const Profile =()=>{
 
      const {push} = useRouter();
    
    const [data, setData] = useState('loading..');
    const [trans , setTrans] = useState('');
    
       console.log(trans)
     useEffect(()=>{
        const storedData = localStorage.getItem('usersOb');
        const data = JSON.parse(storedData);
        setData(data);

         axios.get(`http://localhost:5000/getuni/${data?.userId}`).then((res)=>{
               setTrans(res.data);
         }).catch((err)=>{
            console.log(err);
         })


     },[]);
  const logout = ()=>{
    localStorage.removeItem("usersOb");
    alert("you've logout from your account");
    push("/")
  }

  const redFunc = ()=>{
    push("/")
  }
    return(
        <>
        <div className="bg-gradient-to-t from-[#11292d] overflow-hidden h-screen to-sky-500 relative ">
       

       <img src="images/fish.png" alt="fish"  className="w-[140px] h-[140px] fish1 absolute"/>

       <img src="images/fish.png" alt="fish"  className="w-[120px] h-[120px] fish2 absolute"/>

       <img src="images/fish.png" alt="fish"  className="w-[90px] h-[90px] fish3 absolute"/>
  
       <img src="images/fish.png" alt="fish"  className="w-[70px] h-[70px] fish4 absolute"/>
       <img src="images/fish.png" alt="fish"  className="w-[160px] h-[160px] fish5 absolute"/>
       <img src="images/fish.png" alt="fish"  className="w-[200px] h-[200px] fish6 absolute"/>
 


    <div className="bubble_wrap ">
    <img src="images/b2.png" alt="bubble"  className="w-[25px] h-[25px] b1 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[15px] h-[15px] b2 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[15px] h-[15px] b3 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[20px] h-[20px] b4 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[10px] h-[10px] b5 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[25px] h-[25px] b6 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[13px] h-[13px] b7 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[22px] h-[22px] b8 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[15px] h-[15px] b9 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[15px] h-[15px] b10 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[15px] h-[15px] b11 rounded-full absolute"/>
 

    </div>
   {
    data  ?  <div className="h-screen w-full bg-[#00000069] flex-col flex justify-center items-center  absolute top-0 left-0">
    <div className="absolute top-0 left-0 w-full">
    <Nav color={'#fff'} visibility={'none'} vl={'block'}  wd={'30%'}/>
    </div>


<div className="w-[350px] justify-center items-center my-4 mx-2 bg-[#0098ff75] rounded-xl">
          <div className="flex flex-col justify-center px-5 my-5 items-start">
          <img src={data?.userprofile} alt="refer" className="w-[150px] mx-auto h-[150px] rounded-full" />
                <div className="profile_wrap flex justify-center w-full mt-4 flex-col items-center">
                <h4 className="text-white font-black text-center w-full">{data?.username}</h4>
                <h4 className="text-white font-black text-center w-full">+{data?.userphone}</h4>
                  </div>        
          <div className="flex mt-3 flex-col justify-center px-5 w-full items-start">
              <button onClick={logout} className="w-full rounded-2xl flex justify-center items-center mt-5 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black" >
                 <span className="mr-3">Logout</span> <img src="images/logout.png" alt='logout' className="w-[20px] h-[20px]"/>
              </button>
            
          </div>

                
          </div>

       
      </div>
  </div> :  redFunc()
   }
   


 </div>
        </>
    )
}



export default Profile