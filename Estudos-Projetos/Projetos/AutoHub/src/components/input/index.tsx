import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps{
  type: string;
  placeholder: string;
  name: string;
  error?: string;
  register: UseFormRegister<any>; 
  rules?: RegisterOptions;
}

export function Input({name, placeholder, type, register, rules, error}: InputProps){
  return(
    <div>
      <input 
        className="w-full border-2 border-gray-200 rounded-md h-11 px-2 outline-none bg-white"
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className='my-1 text-red-500'>{error}</p>}
    </div>
  )
}