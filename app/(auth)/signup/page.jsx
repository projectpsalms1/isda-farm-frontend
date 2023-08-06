'use client'
import { useState } from "react";
import Nav from "../../(components)/Nav";
import axios from 'axios';
import { useRouter } from "next/navigation";
const Signup =()=>{
  const {push} = useRouter();
    const [phone, setPhone] = useState('');
    const [userResponse, setUserResponse] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [selectImage, setSelectImage] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');
    const [referral, setReferral] = useState('');
    const [mod, setMod] = useState(false);
    const [code , setCode] = useState('');
    const [modalTitle, setModalTitle] = useState('');
  const [modalHandle, setModalHandle] = useState('none');
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectImage(file);
  
      // Create a preview URL for the selected image
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    };
  
    const dataURItoBlob = (dataURI) => {
      const byteString = atob(dataURI.split(',')[1]);
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    };
  
    const signupHandle = () => {
      if (!selectImage) {
        alert('Please select your profile photo.');
        return;
      }
    
      if(password === ""){
        alert("please choose a password")
      }else if(phone === ""){
        alert("please enter your phone");
      }else if(username === ""){
        alert("please enter your name ")
      }else{
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("username", username);
      formData.append('password', password);
      formData.append('referralCode', referral);
      const blob = dataURItoBlob(previewUrl);
      const uniqueFilename = `proofImg_${Date.now()}.jpg`;

      formData.append('profilePicture', blob, uniqueFilename);
      axios.post("http://localhost:5000/user", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        setUserResponse(res.data);
        if(res.status == 200){
          setModalHandle('flex');
          setModalTitle(res.data);
           setTimeout(()=>{
            push('/login')
           },2000);
        }





      }).catch((err) => {
        console.log(err);
      });
    }
    };
    const sendCode = ()=>{
                   
         axios.post("http://localhost:5000/sendotp", `+1${phone}`).then((res)=>{
                     
                  if(res.status == 200){
                    setTimeout(()=>{
                        setMod(true)
                    },1000)
                  }else{
                    alert('please enter a valid phone number');
                  }
         }).catch((err)=>{
            console.log(err);
         })

    }
    const verifying = ()=>{
     
    axios.post("http://localhost:5000/getCode",{phone:`+1${phone}`, code:code}).then((res)=>{
                 
               if(res && res.status === 200){
                setMod(false);
                signupHandle();
               
               }else{
                alert("your phone didn't verified")
               }
         }).catch((err)=>{
          console.log(err)
         })
        
        }


        const modalFunc=()=>{
          setModalHandle('none');
          setBuyWrap('none');
        }  
    return(
        <>

<div style={{display:modalHandle}} className="absolute bg-[#000000bb] z-50 top-0 left-0 w-full h-screen flex justify-center items-center">
             <div className="w-[320px] flex flex-col p-10 justify-center items-center h-[320px] rounded-xl bg-white">
                   <h2 className="text-md font-bold text-center ">{modalTitle}</h2>
                   <button onClick={modalFunc} className="bg-black p-5 mt-5 rounded-full text-white px-20 font-black">Okay</button>
                   
             </div>
    </div>
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
      <Nav color={'#fff'} visibility={'block'} wd={'200px'} vl={'none'}/>
      </div>
    {
        mod == false ? '':  <div className="absolute flex justify-center items-center z-50 bg-[#00000076] w-full h-screen left-0 top-0">
        <div className="w-[350px] h-[350px] flex-col flex justify-center items-center p-8 rounded-lg bg-white">
            <h3 className="text-center font-black">Verify Code</h3>
            <input type="number" onChange={(e)=> setCode(e.target.value)} placeholder="enter otp code" className="w-full my-10 outline-none border-[1px] h-[55px] px-3 rounded-lg" />
            <button onClick={verifying} type="button" className="w-full bg-black text-white rounded-lg py-3 px-7">Verify Code</button>
       
        </div>
  </div>
    }
        <div className="w-[350px]   bg-[#0098ff75] rounded-xl">
            <h2 className="text-center py-3 mt-4 text-xl text-white font-black">
                 Sign Up
            </h2>
         
            <div className="flex flex-col justify-center px-5 mb-2 items-start">
                <label  name="username" className="text-white font-bold ml-3 text-sm">Select Your Profile Photo *</label>
                <input onChange={handleImageChange} type="file" className="w-full text-white rounded-2xl profile_photo py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="your full legal name" />
            </div>

            <div className="flex flex-col justify-center px-5 mb-2 items-start">
                <label  name="username" className="text-white font-bold ml-3 text-sm">Your Full Legal Name *</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="your full legal name" />
            </div>

            <div className="flex flex-col justify-center px-5 items-start">
                <label  name="phone" className="text-white font-bold ml-3 text-sm">Phone *</label>
                <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="number" className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder=" Phone with country code without + " />
            </div>


            <div className="flex flex-col justify-center px-5 my-2 items-start">
                <label  name="phone" className="text-white font-bold text-sm ml-3">password *</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="your password" />
            </div>

            <div className="flex flex-col justify-center px-5 my-2 items-start">
                <label  name="phone" className="text-white font-bold text-sm ml-3">refercode optional ! *</label>
                <input type="text" value={referral} onChange={(e)=> setReferral(e.target.value)} className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="refer code optional !" />
            </div>
            <h3 className="text-center text-white my-3">{userResponse}</h3>
            <div className="flex flex-col justify-center px-5  items-start">
                <button type="button" onClick={()=> signupHandle()} className="w-full rounded-2xl mt-4 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black" >
                    Sign Up
                </button>
                <p className="text-white mt-5 mb-10">i don't have an account  <a className="text-blue-400" href="/login">Login</a></p>
            </div>
        </div>
    </div>
 </div>
        </>
    )
}



export default Signup