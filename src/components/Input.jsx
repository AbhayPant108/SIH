import React, { forwardRef } from 'react'

function Input({
  error,
    label,
    type="text",
    placeholder="Type here",
    className="",
    disabled=false,
    ...props
},ref) 
{
  return (
    <div className='w-full'>
    {
    label && <label className='text-sm text-gray-500'>{label}</label>
    }
    <input placeholder={placeholder} type={type} ref={ref} disabled={disabled} {...props}
    className={`${className} outline-none bg-white border border-gray-300 rounded-md p-2.5 w-full`} />
    {error?.message && (<span>{error.message}</span>)}
    </div>
  )
  
}


export default forwardRef(Input)