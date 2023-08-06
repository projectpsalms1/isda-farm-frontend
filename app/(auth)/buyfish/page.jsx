
'use client'
import axios from "axios";
import Nav from "../../(components)/Nav";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const BuyFish =()=>{
  const {push } = useRouter();
  const [userData, setUserData] = useState();
  const [amount, setAmount] = useState('');
  const [res, setRes] = useState('');
  const [buyWrap, setBuyWrap] = useState('none');
  const [catData, setCatData] = useState(null);
  const [catValue , setCatValue] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [modalHandle, setModalHandle] = useState('none');
  const [buyBtn, setBuyBtn] = useState('block');
  useEffect(() => {
    const data = localStorage.getItem('usersOb');
    setUserData(JSON.parse(data));
    axios.get("http://localhost:5000/getcat").then((res)=>{
            setCatData(res.data);
    }).catch((err)=>{
      console.log(err)
    })
  }, []);


  const postHandle = () => {
    try {
        setBuyBtn('none');
      setTimeout(()=>{
        setBuyBtn('block');
      },4000);

      if(amount === ""){
        setModalHandle('flex');
        setModalTitle("please enter minumum amount to buy product");
      }else{
        if (amount && amount < 1000) {
          setModalHandle('flex')
          setModalTitle("minimum buy 1000 peso ");
        }else{
          axios
          .post('http://localhost:5000/buyfish',
          {
              userId:userData.userId,
              buyAmount:amount,
              productId:catValue,
              isBuy:true
          } , {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res) => {
            setRes(res.data);
            if(res.status == 400){
              setModalHandle('flex');
          setModalTitle(res.data);
            }else if(res.status === 200){
              setModalHandle('flex');
              setModalTitle(res.data);
                setTimeout(()=>{
                  push('/dashboard');
                }, 4000)
            }else{
              setBuyWrap(none);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      
        
        
        }
    
      }
    
    
    } catch (error) {
      console.error('Error:', error);
    }
  };


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
      <Nav color={'#fff'} visibility={'none'} vl={'block'}  wd={'30%'}/>
      </div>

     

   <div className=" w-full flex justify-center items-center flex-col">
   <div className="w-full">
   <h2 className="mb-10 text-center text-white font-black text-2xl">Select a product and buy and start earning</h2>
   <div className="w-full  flex justify-center items-center">
  
    <div  className="cat_wrap w-[70%] mx-auto flex-row flex justify-between items-center">
    {catData?.length > 0 &&
  catData.map((el) => (
      <div key={el?._id} onClick={() => {setBuyWrap("flex"); setCatValue(`${el._id}`)}} className="cat_card hover:cursor-pointer my-3 rounded-xl w-[130px] h-[130px] bg-white flex justify-center items-center flex-col">
        <img src={el?.productIcon} alt="fish" className="w-[80px] h-[80px] rounded-full mb-2" />
        <h5>{el?.productName}</h5>
      </div>

))}

    </div>



</div>
   </div>
   


   </div>



    






<div  style={{display:buyWrap}} className="w-full flex justify-center flex-col absolute h-screen left-0 top-0 bg-[#00000079] items-center">
<div className="flex justify-between bl_wrap items-center">
 <div className="w-[350px]  my-4 mx-2 bg-[#0098ff75] mt-10 rounded-xl">
            <div className="flex flex-col justify-center px-5 my-5 items-start">
               <p className="font-black text-white">Buy Now*</p>
               <div className="border-[1px] rounded-lg p-2 flex w-[160px] mb-4  ">
                   <img src="images/fish.png"  alt="bank" className="w-[40px] rounded-lg h-[40px]" />
                   <p className="leading-4 ml-3 text-white font-[400]">Fish Farm <br/> investment</p>
                
               </div>


            </div>

         
        </div>

 </div>
     
 
 <div className="w-[350px] justify-center items-center my-4 mx-2 bg-[#0098ff75] rounded-xl">
            <div className="flex flex-col justify-center px-5 my-5 items-start">
                              <h3 className="text-green-400">{res}</h3>   
            <div className="flex flex-col justify-center px-5 w-full items-start">
                <label  name="phone" className="text-white font-bold ml-3 text-sm">minimum buy fish 1000 peso *</label>
                <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="amount   " />
              
            </div>

            <div className="flex flex-col justify-center px-5 w-full items-start">
                <button style={{display:buyBtn}} type="button" onClick={()=> postHandle()} className="w-full rounded-2xl mt-5 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black" >
                   Buy Now
                </button>
              
            </div>

                  
            </div>

         
        </div>
</div>













    </div>
 
 </div>
        </>
    )
}



export default BuyFish
