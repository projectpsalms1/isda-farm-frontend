'use client';
import  {useState} from 'react'
import Nav from "../../(components)/Nav"
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login =()=>{
      const {push} = useRouter();
       const [pass, setPass] = useState('');
       const [phone , setPhone] = useState('');
       const [logData, setLogData] = useState(null);
 console.log(logData)
      

 const loginHandle = () => {
     if(phone === ""){
      alert("please enter your phone account phone number")
     }else if(pass === ""){
      alert("please enter your password")
     }else{
      axios.get(`http://localhost:5000/login/${phone}`)
      .then((res) => {
        const logData = res.data;
        const authorizationHeader = res.headers.authorization;
        if(authorizationHeader){
          const token = res.headers.authorization.split(' ')[1];
          setToken(token);
        }
      
        if (logData?.phone == phone && logData?.password == pass) {
          setLogData(res.data); 
          const usersoB = {
             username:  res.data.username,
             userphone: res.data.phone,
             userId:res.data._id,
             userCreatedAt:res.data.createdAt,
             userBal:res.data.balance,
             userprofile:res.data.profilePicture,
             userRefBal:res.data.refBal,
             userTrans: res.data.transactions,
             userReferCode : res.data.referralCode
          }
          localStorage.setItem("usersOb", JSON.stringify(usersoB));
          push('/dashboard');
        } else {
          alert("Your password or phone didn't match");
          push('/login');
        }
      })
      .catch((err) => {
        console.log(err);
     
      });
     }
};
        

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

    <div className="h-screen w-full bg-[#00000069] flex-col flex justify-center items-center  absolute top-0 left-0">
      <div className="absolute top-0 left-0 w-full">
      <Nav color={'#fff'} visibility={'block'} vl={'none'} wd={'200px'}/>
      </div>
        <div className="w-[350px] h-[400px] bg-[#0098ff75] rounded-xl">
            <h2 className="text-center py-3 mt-6 text-xl text-white font-black">
                 Login
            </h2>

           
            <div className="flex flex-col justify-center px-5 items-start">
                <label  name="phone" className="text-white font-bold ml-3 text-sm">Phone *</label>
                <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder=" Phone with country code without + " />
            </div>


            <div className="flex flex-col justify-center px-5 my-5 items-start">
                <label  name="phone" className="text-white font-bold text-sm ml-3">password *</label>
                <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="your password" />
            </div>

            <div className="flex flex-col justify-center px-5  items-start">
                <button type="button" onClick={()=> loginHandle()} className="w-full rounded-2xl mt-5 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black" >
                    Login
                </button>
                <p className="text-white mt-5">i don't have an account  <a className="text-blue-400" href="/signup">sign up</a></p>
            </div>
        </div>
    </div>
 </div>
        </>
    )
}



export default Login