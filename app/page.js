import Image from 'next/image'
import Nav from './(components)/Nav'
export default function Home() {
  return (
    <main className="bg-gradient-to-t from-[#11292d] overflow-hidden h-screen to-sky-500 relative ">
       

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
        <h1 className="text-white text-4xl font-black">Welcome To</h1>
        <h1 className="text-white text-4xl px-2  text-center font-black">Isda Farming</h1>
          
          <div className="w-[680px] hero_p  flex justify-center items-center flex-col mx-auto">
            <p className="text-center mt-4  text-white">Dive into Success with Isda Farming - The Future of Aquaculture. Unlock Profitable Opportunities in Aquaculture with Isda Farm. Make Waves in the Aquaculture Industry - Invest in Isda Farm and earn 2% daily profit.
            </p>

            <a href="/login" className="py-4 px-8 backdrop-blur-2xl rounded-xl mt-5 bg-[#00e5ff17] font-black text-white">Get Started</a>
          {/* <p>
        At Fish Farm Investment World, we have meticulously designed a state-of-the-art facility equipped with cutting-edge technology to optimize fish growth, health, and production. Our expert team of aquaculture professionals utilizes sustainable practices, ensuring minimal environmental impact while maximizing profitability.
        </p> */}
        {/* <p className="mt-4 text-white font-[400] ">
        Investing in Fish Farm Investment World means joining a forward-thinking enterprise that not only addresses the growing demand for seafood but also champions the principles of ethical and responsible business. With our strategic location in a region known for its rich aquatic resources and proximity to major markets, we have a competitive advantage in meeting consumer needs efficiently and effectively.
        </p> */}
    
          </div>
       </div>
    </main>
  )
}
