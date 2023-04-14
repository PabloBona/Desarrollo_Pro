import React from 'react'
import { useForm } from 'react-hook-form';
import { createUser } from '../lib/services/auth.service';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useState } from 'react';
type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
  };

const SignupCard = () => {

  const [password, setPassword] = useState(false)

  const router = useRouter()

    const { register, handleSubmit } = useForm({
        defaultValues: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
        },
      });

      const onSubmit =  (data:any) => {
       // setValue('firstName',data.firstName.trim())
          
         createUser(data)
           .then((resp) => {

             router.push('/login')
            return(
            Swal.fire({
              title: 'Cuenta creada exitosamente',
              width: 400,
              padding: '1em',
              color: '#fff',
              background: 'rgb(0,0,0,0.7)',
              backdrop: `
                  rgba(0,0,123,0.4)
                `,
            }
            )
            )

          })
           .catch((error) => {
            
            if (error.response.data.errors[0]?.message === 'email must be unique') {
              return(
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'There is already an account with that email',
                  background: 'rgb(0,0,0,0.7)',
                  color: '#fff',
                  width: 400,
                backdrop: `
                    rgba(0,0,123,0.4)
                  `,
                })
              )
            } else{
             return(
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                background: 'rgb(0,0,0,0.7)',
                color: '#fff',
                width: 400,
              backdrop: `
                  rgba(0,0,123,0.4)
                `,
              })
             )}
             
           });
           
      };
  return (
    <div className="px-7 py-9 w-fit bg-[rgb(0,0,0,0.7)] text-white app-title-2 rounded-3xl  ">
      <h2>Todos votamos :)</h2>
      <p className="py-3 app-texto-1 text-xs">
       Regístrate para ingresar
      </p>
      <div className="grid gap-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            
            <label className="app-subtitle-1">Email</label>
            <input
              className="w-full bg-transparent border-app-grayDark border-[1px] rounded-md text-xs h-9 pl-2"
              type="email"
              placeholder="ejemplo@gmail.com"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              {...register('email')}
            />
            
          </div>
          

          
          <span className='flex gap-2 py-2'>

          <div >
            <label className="app-subtitle-1 ">Nombre</label>
            <input
              className="w-full bg-transparent border-app-grayDark border-[1px] rounded-md text-xs h-9 pl-2 "
              type="text"
              placeholder='Raúl'
              required
              maxLength={12}
              {...register('first_name')}
            />
          </div>
          
          <div >
          <label className="app-subtitle-1 ">Apellido</label>
            <input
              className="w-full bg-transparent border-app-grayDark border-[1px] rounded-md text-xs h-9 pl-2 "
              type="text"
              placeholder='Pérez'
              required
              maxLength={12}
              {...register('last_name')}
            />
          </div>
          </span>
          <div>
            <label className="app-subtitle-1 ">Contraseña</label>
            <span className='flex gap-1'>
            <input
              className="w-full bg-transparent border-app-grayDark border-[1px] rounded-md text-xs h-9 pl-2 "
              type={password?"text" : 'password'}
              required
              {...register('password')}
            />
            <span onClick={()=>{setPassword(!password)}} className='hover:cursor-pointer flex items-center bg-app-yellow rounded-md p-1 app-texto-2 text-sm text-app-black'>Mostrar</span>
            </span>
          </div>
          
      <p
        className="text-xs text-app-gray flex justify-center py-2 hover:underline  font-light"
        
      >
        * La contraseña debe tener mayúsculas, minúsculas y números
      </p>
      <input type='submit' value='Crear cuenta' className="w-full bg-app-yellow rounded-md text-app-black app-texto-2 h-9"/>
      </form>
      </div>
      <a
        className="text-xs font-light text-app-yellow flex justify-center py-2 hover:underline "
        href="/login"
      >
        O inicia sesión
      </a>
    </div>
  )
}

export default SignupCard