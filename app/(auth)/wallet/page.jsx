'use client'
import { useEffect, useState } from "react";
import Nav from "../../(components)/Nav";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import axios from 'axios';
import moment from 'moment';
import { useRouter } from "next/navigation";
const Wallet =()=>{
    const [data, setData] = useState('loading..');
    const [trans , setTrans] = useState('');
    const {push} = useRouter();
    const [reData, setRedata] = useState('');
    
  const [modalTitle, setModalTitle] = useState('');
  const [modalHandle, setModalHandle] = useState('none')
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

         axios.get(`http://localhost:5000/login/${data.userphone}`).then((res)=>{
            setRedata(res.data)
}).catch((err)=>{
   console.log(err)
})
     },[]);
     
     const redFunc = ()=>{
        push('/')
     }
     const claim = () => {
      axios
        .post(`http://localhost:5000/reftrans/${data?.userId}`)
        .then((res) => {
          if (res.data) {
            setModalTitle(res.data);
            setModalHandle('flex');
            push('/dashboard');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    
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


        <div className="bg-gradient-to-t from-[#11292d] overflow-x-hidden h-screen to-sky-500 relative ">
       
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
        data ?    <div className="h-screen  w-full bg-[#00000069] flex-col flex justify-start items-center  absolute top-0 left-0">
        <div className="absolute top-0 left-0 w-full">
        <Nav color={'#fff'} visibility={'none'} vl={'block'}  wd={'30%'}/>
        </div>
    <div className="flex justify-between bl_wrap items-center mt-[80px]">
    <div className="w-[350px]  my-4 mx-2 bg-[#0098ff75] rounded-xl">
                <div className="flex flex-col justify-center px-5 my-5 items-start">
                <h2 className="text-white font-black text-xl">Balance</h2>
                <div className="w-full h-[2px] bg-[#fff] my-2"></div>
                <h2 className="text-white font-black text-2xl">₱{Math.floor(reData?.balance)}</h2>
                
                    
                </div>

            
            </div>
    
            <div className="w-[350px]  my-4 mx-2 bg-[#0098ff75] rounded-xl">
                <div className="flex flex-col justify-center px-5 my-5 items-start">
                <h2 className="text-white font-black text-xl">Referral Bonus</h2>
                <div className="w-full h-[2px] bg-[#fff] my-2"></div>
                <h2 className="text-white font-black text-2xl">₱{reData?.refBal}</h2>
                {
  reData?.refBal && reData?.refBal > 0 ? (
    <button onClick={() => claim()} className="text-white bg-black font-black mt-3 w-[150px] h-[40px] px-4 rounded-lg">
      Claim Bonus
    </button>
  ) : (
    ''
  )
}

                    
                </div>
            
            </div>
    </div>

    <div className="w-[350px] justify-center items-center my-2 mx-2  bg-[#0098ff75] rounded-xl">
                <div className="flex flex-col justify-center px-5 my-5 items-start">
                                
                                <a href="/withdraw" className="w-full flex justify-center itmes-center flex-col">
                                    <div className="w-[50px] mx-auto mb-2">   <img src="images/wt.png" alt="add" className="w-[50px] h-[50px] rounded-full addIcon "/></div>
                                    <p className="text-white text-center">Request for Withdraw Balance</p>
                                </a>
                    
                </div>

            
            </div>




            <div className="mt-2 w-full ">
            <div className='trans_wrap  container mx-auto'>
                    <div className="transTowWrap flex justify-between px-5 items-center">
                        <h5 className="font-black text-white">activity</h5>
                        <h5  ><a href="/wallet" className="text-white font-black flex items-center"> <span>transactions</span> <img className="w-[25px] h-[20px] ml-[10px]" src="images/rightArrow.png" alt="arrow"/></a> </h5>
                    </div>
                     
                     <div className="trans_wrapper">
                        <div className="trans_scroll_wrapper h-[250px] overflow-y-scroll no-scrollbar overflow:-webkit-scrollbar:none overflow-x-hidden">
                            
                            
                                {
                                trans &&  trans.map((el) => (
                    
                                   el.type == 'deposit'?  <div key={el._id} className="trans_card my-5 bg-[#0098ff75] w-[60%] mx-auto flex justify-between items-center px-5 py-3 rounded-xl">
                                   <div className="">
                                      <img src="images/transfergreen.png" alt="transfer green"  className="w-[25px] h-[25px]"/>
                                      <p className="text-[#289f8b] text-sm mt-2 ">{el?.type}</p>
                                     
                                   </div>
                                   <div className="">
                                    <p className="text-white text-sm mt-0">{moment(el?.createdAt).format("MMM YYYY h:m:s a")}</p>
                                    {
                                    el.status == 'pending' ?  <p className="text-yellow-600 text-sm mt-0">{el.status}</p> : el.status == 'approved' ? <p className="text-green-600 text-sm mt-0">{el.status}</p>:<p className="text-red-600 text-sm mt-0">{el.status}</p>
                                   }
                                     </div>
                                     <div className="">
                                     <LazyLoadImage
                                            src={el?.proofImg}
                                            alt="trans img"
                                            layout="responsive"
                                            width={35}
                                            height={35}
                                            className="rounded-full h-[35px] w-[35]"
                                            />

                                     </div>

                                     <div className="">
                                     <p className="text-white text-sm font-black">₱{el.amount}</p>
                                     </div>
                               </div> :  <div key={el._id} className="trans_card my-5 bg-[#0098ff75] w-[60%] mx-auto flex justify-between items-center px-5 py-3 rounded-xl">
                                   <div className="">
                                      <img src="images/transfer.png" alt="transfer green"  className="w-[25px] h-[25px]"/>
                                      <p className="text-[red] text-sm mt-2 ">{el.type}</p>
                                     
                                   </div>
                                   <div className="">
                                    <p className="text-white text-sm mt-0">{moment(el.createdAt).format("MMM YYYY h:m:s a")}</p>
                                   {
                                    el.status == 'pending' ?  <p className="text-yellow-600 text-sm mt-0">{el.status}</p> : el.status == 'approved' ? <p className="text-green-600 text-sm mt-0">{el.status}</p>:<p className="text-red-600 text-sm mt-0">{el.status}</p>
                                   }
                                   
                                     </div>
                                     <div className="">
                                     <LazyLoadImage
                                            src={el?.proofImg? el?.proofImg : 'images/fish.png'}
                                            alt="trans img"
                                            layout="responsive"
                                            width={35}
                                            height={35}
                                            className="rounded-full h-[35px] w-[35]"
                                            />

                                     </div>

                                     <div className="">
                                     <p className="text-white text-sm font-black">₱{el.amount}</p>
                                     </div>
                               </div>



                                ))
                                }
                            
                              







                              



                        </div>
                     </div>
                    
                </div>
            </div>
</div> : redFunc()
       }
 </div>
        </>
    )
}



export default Wallet