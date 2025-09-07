import React, { Children } from 'react'

function Btn({
    children,
    type,
    className,
    ...props    
})
 {

  return (
    <button className={`${className} cursor-pointer hover:bg-blue-600 bg-blue-500 text-white px-4 py-2 text-center rounded-md w-full cursor-pointer`} type={type} {...props}>{children}</button>
  )
}

export default Btn  
