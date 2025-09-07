import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

function Authenticated({children,isRequired=true}) {
    const status = useSelector(state=>state.auth.authStatus)
    const navigate = useNavigate()
    console.log(status);
    
   useEffect(()=>{
    if(isRequired && status !== isRequired){
      // we use replace because
          // when we hit back btn it goes to /consult or /medicine etc
          // then it goes again to login 
          // it means it is looping all time
          // replace: pop out the previous history page i.e. /consult or /medicine
          // out of loop now
         navigate('/login',{replace:true})
        
    }else if(!isRequired && status !== isRequired )
    {
        navigate('/',{replace:true})
    }
    
   },[status,navigate,isRequired]) 
   
  return (
     <div className='w-full'>{children}</div>
  )
}

export default Authenticated