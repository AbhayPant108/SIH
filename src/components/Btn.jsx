import React, { Children } from 'react'

function Btn({
    children,
    type,
    className,
    ...props    
})
 {

  return (
    <button className={`${className} cursor-pointer hover:bg-blue-600 bg-blue-500 text-white  text-center rounded-md w-full`} type={type} {...props}>{children}</button>
  )
}

export default Btn  
