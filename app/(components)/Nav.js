"use client"

import { useState } from "react";

const Nav =({color, visibility, vl, wd})=>{

 const [dhandle, setDhandle] = useState('none');
    return(
        <>
          <div className="w-full h-[70px]">
                
                 <div className="container naviwrap items-start justify-between flex mx-auto">
                     <div className="h-[60px] m-3 flex items-center justify-start">
                           <img className="rounded-full h-[53px] w-[55px]" src="images/logo.png" alt="log"/>
                           <span className="ml-2 font-black" style={{color:color}}>Isda Farm</span>
                     </div>



                     <div  className="flex menu_wrap justify-between items-center h-[70px] " style={{width:wd, display:dhandle}}>
                        <button onClick={()=> setDhandle('none')} className="w-full flex justify-end"><img className="w-[40] h-[40px] rounded-full" src="images/close.png" alt="close"/></button>
                        <a href="/"style={{color:color, display:visibility}} className="text-sm font-black">Home</a>
                        <a href="/signup" style={{color:color, display:visibility}} className="text-sm font-black">Sign up</a>
                        <a href="/login" style={{color:color, display:visibility}} className="text-sm font-black">Login</a>
                        <a href="/dashboard" style={{color:color, display:vl}} className="text-sm font-black">Dashboard</a>
                        <a href="/wallet" style={{color:color, display:vl}} className="text-sm font-black">wallet</a>
                        <a href="/referral" style={{color:color, display:vl}} className="text-sm font-black">referral</a>
                        <a href="/profile" style={{color:color, display:vl}} className="text-sm font-black">profile</a>
                     </div>
                     <button onClick={()=> setDhandle('flex')} className="w-[40px] navBtn flex justify-end m-4"><img className="w-[35px] h-[35px] rounded-md" src="images/navicon.png" alt="close"/></button>
                     <div className="flex menu_wrap_web justify-between items-center h-[70px] " style={{width:wd}}>
                       

                        <a href="/"style={{color:color, display:visibility}} className="text-sm font-black">Home</a>
                        <a href="/signup" style={{color:color, display:visibility}} className="text-sm font-black">Sign up</a>
                        <a href="/login" style={{color:color, display:visibility}} className="text-sm font-black">Login</a>
                        <a href="/dashboard" style={{color:color, display:vl}} className="text-sm font-black">Dashboard</a>
                        <a href="/wallet" style={{color:color, display:vl}} className="text-sm font-black">wallet</a>
                        <a href="/referral" style={{color:color, display:vl}} className="text-sm font-black">referral</a>
                        <a href="/profile" style={{color:color, display:vl}} className="text-sm font-black">profile</a>
                     </div>
                 </div>
        
          </div>
        </>
    )
}

export default Nav;