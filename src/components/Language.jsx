import React from 'react'
import { useForm } from 'react-hook-form'


function Language({options=[],className}) {
    const { register, handleSubmit } = useForm({
  defaultValues: {
    language: "English", // must match option value
  },
});
  return (
    <div className='w-full'> <form className={`lang-toggle mr-5 md:mr-10 m-auto ${className}`}><select className='sm:p-0.5 outline-none cursor-pointer' role="tablist" aria-label="Language Toggle"
                        {...register('language')}  >
                            <option value="English">Eng</option>
                        {options?.map(option => (
                            <option
                                key={option}
                                value={option}
                                onChange={(e) => setValue('language',e.target.value)}
                            >
                            
                            {l.label}
                        </option>
                    ))}
                </select>
            </form></div>
  )
}

export default Language