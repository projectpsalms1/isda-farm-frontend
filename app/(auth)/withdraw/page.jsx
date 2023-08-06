'use client'
import Nav from "../../(components)/Nav";
import axios from 'axios';
import {useState, useEffect} from 'react'
import { useRouter } from "next/navigation";
const Withdraw =()=>{
    const {push} = useRouter();
    const [data, setData] = useState('');
    const [dnone, setdDnone] = useState('block')

    const [bankName, setBankName] = useState('');
    const [bank ,setBank] = useState('');
    const [amount, setAmount] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalHandle, setModalHandle] = useState('none')
    useEffect(()=>{
        const storedData = localStorage.getItem('usersOb');
        const data = JSON.parse(storedData);
        setData(data);
    },[])

    const postHandle = ()=>{
          if(bankName === ""){
            setModalTitle("please enter bank name");
            setModalHandle('flex');
          }else if(bank === ""){
            setModalTitle("please enter bank number");
            setModalHandle('flex');
          }else if(amount  === ""){
            setModalTitle("please enter amount");
            setModalHandle('flex');
          }else{
            const formData = new FormData();
            formData.append('amount', amount);
            formData.append('user', data.userId);
            formData.append('bank', bank);
            formData.append('type', 'withdraw');
            formData.append('bankName', bankName);
              
               axios.post('http://localhost:5000/transaction', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }).then((res)=>{
                if(res.data){
                    setModalTitle(res.data);
                    setModalHandle('flex');
                    setTimeout(()=>{
                      push('/dashboard');
                    },1000)
                  }
               }).catch((err)=>{
                console.log(err);
            });
            setdDnone("none")
        setTimeout(()=>{
          setdDnone('block')
        },3000);
          }
      
    }


 
    const modalFunc=()=>{
        setModalHandle('none');
       
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
        <Nav color={'#fff'} visibility={'none'} vl={'block'}  wd={'30%'}/>
        </div>
  
  
   <div className="w-[350px] justify-center items-center my-4 mx-2 bg-[#0098ff75] rounded-xl">
              <div className="flex flex-col justify-center px-5 my-5 items-start">
                               <h2 className='text-center font-black pt-4 pb-5 text-white text-xl w-full'>Withdraw</h2>
                               <div className="flex flex-col justify-center px-5 w-full items-start">
                  <label  name="phone" className="text-white font-bold ml-3 text-sm">Your Bank Account Name *</label>
                  <input type="text" value={bankName} onChange={(e)=> setBankName(e.target.value)}  className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="Bank Account Name*" />
              </div>
              <div className="flex flex-col mt-4 justify-center px-5 w-full items-start">
                  <label  name="phone" className="text-white font-bold ml-3 text-sm">Your Bank Account Number*</label>
                  <input value={bank} onChange={(e)=> setBank(e.target.value)} type="number" className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="Bank Account Number*" />
              </div>
              <div className="flex flex-col mt-4 justify-center px-5 w-full items-start">
                  <label  name="phone" className="text-white font-bold ml-3 text-sm">Amount *</label>
                  <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="Withdraw Amount*" />
              </div>
                   {/* <h2 className="text-green-500 text-center">
                      {wres ? wres :''}
                   </h2> */}
              <div className="flex mt-3 flex-col justify-center px-5 w-full items-start">
                  <button style={{display:dnone}} onClick={()=> postHandle()} className="w-full rounded-2xl mt-5 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black" >
                      Send Request
                  </button>
                
              </div>
  
                    
              </div>
  
           
          </div>
      </div> 
   



 </div>
        </>
    )
}



export default Withdraw
