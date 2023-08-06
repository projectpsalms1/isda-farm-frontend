'use client'
import { useEffect, useState } from "react";
import Nav from "../../(components)/Nav";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import axios from 'axios';
import moment from 'moment';
import { useRouter } from "next/navigation";
const Dashboard =()=>{
    const {push} = useRouter();

    const [data, setData] = useState('loading..');
    const [trans , setTrans] = useState('');
    const [reData, setRedata] = useState('');
    const [cliamRes, setClaimRes]= useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalHandle, setModalHandle] = useState('none');
       console.log(trans)
     useEffect(()=>{
        const storedData = localStorage.getItem('usersOb');
        const data = JSON.parse(storedData);
        setData(data);

         axios.get(`http://localhost:5000/purchasedata/${data?.userId}`).then((res)=>{
               setTrans(res.data.reverse());
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

        const [modalHandle2, setModalHandle2] = useState('none');
        const [pId , setSinlgeId] = useState('')

         const claim = async ()=>{
              
            axios.post(`http://localhost:5000/claim/${data?.userId}`, {pId}).then((res)=>{
                setClaimRes(res.data);
                if(res.status === 200){
                    setModalHandle('flex');
                    setModalTitle(res.data);
                    setModalHandle2('none');
                }
            }).catch((error)=>{
                console.log(error);
            })
         }

       

         const modalFunc=()=>{
            setModalHandle('none');
            push('/buyfish');
            setTimeout(()=>{
                push('/dashboard');
            }, 2000)
           
          }  

          const modalFunc2=()=>{
            setModalHandle2('none');
          }
    return(
        <>
        <div style={{display:modalHandle2}} className="absolute bg-[#000000bb] z-50 top-0 left-0 w-full h-screen flex justify-center items-center">
             <div className="w-[320px] flex flex-col py-10 px-3 justify-center items-center h-[320px] rounded-xl bg-white">
                   <h2 className="text-md font-bold text-center ">do you really want to harvest your Earnings ?</h2>
                  
                   <div className="flex justify-around items-center flex-row  w-full ">
                   <button onClick={modalFunc2} className="bg-black py-3  mt-5 rounded-full text-white px-5 font-black">cancel it</button>
                   <button onClick={claim} className="bg-black py-3 mt-5 rounded-full text-white px-5 font-black">claim it</button>
                   
                   </div>
             </div>
    </div>


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
        data ?   <div className="h-auto  pb-10  w-full bg-[#00000069] flex-col flex justify-start items-center  absolute top-0 left-0">
        <div className="absolute top-0 left-0 w-full">
        <Nav color={'#fff'} visibility={'none'} vl={'block'}  wd={'30%'}/>
        </div>
    <div className="flex justify-between bl_wrap items-center mt-[80px]">
    <div className="w-[350px]  my-4 mx-2 bg-[#0098ff75] rounded-xl">
                <div className="flex flex-col justify-center px-5 my-5 items-start">
                <h2 className="text-white font-black text-xl">Balance</h2>
                <div className="w-full h-[2px] bg-[#fff] my-2"></div>
               {
                reData.balance && reData.balance ?  <h2 className="text-white font-black text-2xl">₱{reData?.balance.toFixed(3)}</h2> : <h2 className="text-white font-black text-2xl">₱0</h2>
               }
                
                    
                </div>

            
            </div>
    
           
    <div className="w-[350px] justify-center items-center my-2 mx-2  bg-[#0098ff75] rounded-xl">
                <div className="flex flex-col justify-center px-5 my-5 items-start">
                <a href="/addbal"  className="w-full mx-auto mb-2"> 
                                <div className="w-full flex justify-center itmes-center flex-col">
                                     <img src="images/add.png" alt="add" className="w-[50px] mx-auto h-[50px] rounded-full addIcon "/>
                                    <p className="text-white text-center">Request for add balance</p>
                                </div>
                    </a>
                </div>

            
            </div>
    </div>

    <div className="w-[350px] justify-center items-center my-2 mx-2  bg-[#0098ff75] rounded-xl">
                <div className="flex flex-col justify-center px-5 my-5 items-start">
                <a href="/buyfish" className="w-full mx-auto mb-2"> 
                                  
                                <div className="w-full flex justify-center itmes-center flex-col">
                 <div className="p-1 w-[70px] mx-auto h-[70px] rounded-full border-[1px]">
                                  
                                    <img src="images/fish.png" alt="fish" className="w-[60px] h-[60px] rounded-full addIcon "/>
                                        </div>
                                    <p className="text-white text-center ">Start Earn</p>
                                </div>
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
                    
                                   el.isWithdrawn == false?  <div key={el._id} className="trans_card my-5 bg-[#0098ff75] w-[60%] mx-auto flex justify-between items-center px-5 py-3 rounded-xl">
                                   <div className="tr_icon">
                                      <img src="images/transfergreen.png" alt="transfer green"  className="w-[25px] h-[25px]"/>
                                      {
                                    el.isWithdrawn == false ?  <p className="text-green-600 text-sm mt-0">bought</p> : el.isWithdrawn == true ? <p className="text-red-600 text-sm mt-0">withdrawn</p>:<p className="text-red-600 text-sm mt-0"></p>
                                   }
                                   </div>
                                   <div className="">
                                    <p className="text-white text-sm mt-0">{moment(el?.createdAt).format("MMM YYYY h:m:s a")}</p>
                                     <p className="text-white">you Earned from <span className="font-black text-black">{el?.productName}</span></p>
                                    <p className="text-white font-black ">₱{el?.earnings.toFixed(4)}</p>
                                    <button onClick={()=> {setModalHandle2('flex'), setSinlgeId(el?._id)}} className="text-white bg-black font-black mt-3 w-[100px] h-[40px] rounded-lg ">harvest</button>
                                     </div>
                                     <div className="">
                                     <LazyLoadImage
                                            src={el.productIcon}
                                            alt="trans img"
                                            layout="responsive"
                                            width={35}
                                            height={35}
                                            className="rounded-full h-[35px] w-[35]"
                                            />
                                            {claim}
                                        <p className="font-black text-black text-sm mt-2 ">{el.productName}</p>
                                     
                                     </div>

                                     <div className="">
                                     <p className="text-white text-sm font-black">₱{el.buyAmount}</p>
                                     </div>
                               </div> :  <div key={el._id} className="trans_card my-5 bg-[#0098ff75] w-[60%] mx-auto flex justify-between items-center px-5 py-3 rounded-xl">
                                   <div className="">
                                      <img src="images/transfer.png" alt="transfer green"  className="w-[25px] h-[25px]"/>
                                      {
                                    el.isWithdrawn == true ?  <p className="text-red-600 text-sm mt-0">withdrawn</p> : ''
                                   }
                                     
                                   </div>
                                   <div className="">
                                    <p className="text-white text-sm mt-0">{moment(el.createdAt).format("MMM YYYY h:m:s a")}</p>
                                  
                                   
                                     </div>
                                     <div className="">
                                     <LazyLoadImage
                                            src={el.productIcon}
                                            alt="trans img"
                                            layout="responsive"
                                            width={35}
                                            height={35}
                                            className="rounded-full h-[35px] w-[35]"
                                            />
   <p className="text-[red] text-sm mt-2 ">{el.productName}</p>
                                     </div>

                                     <div className="">
                                     <p className="text-white text-sm font-black">₱{el.buyAmount}</p>
                                     </div>
                               </div>



                                ))
                                }
                            
                              







                              



                        </div>
                     </div>
                    
                </div>
            </div>
</div>: redFunc()
       }
 </div>
        </>
    )
}



export default Dashboard
