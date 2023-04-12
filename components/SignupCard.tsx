import React from 'react'
import { useForm } from 'react-hook-form';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
  };

const SignupCard = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',
          email: '',
          userName: '',
          password: '',
        },
      });

      const onSubmit = async () => {
        
    
        // createUser(data)
        //   .then((resp) => {
        //     console.log(resp);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      };
  return (
    <div className="px-7 py-9 w-fit bg-[rgb(0,0,0,0.7)] text-white app-title-2 rounded-3xl">
      <h2>Todos votamos :)</h2>
      <p className="py-3 app-texto-1 text-xs">
       Regístrate para ingresar
      </p>
      <div className="grid gap-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <h3 className="app-subtitle-1">Email</h3>
            <input
              className="w-full bg-transparent border-app-grayDark border-[1px] rounded-md text-xs h-9 pl-2"
              type="text"
              placeholder="ejemplo@gmail.com "
              {...register('email')}
            />
          </label>

          
          <span className='flex gap-2 py-2'>
          <label >
            <h3 className="app-subtitle-1 ">Nombre</h3>
            <input
              className="w-full bg-transparent border-app-grayDark border-[1px] rounded-md text-xs h-9 pl-2 "
              type="text"
              placeholder='Raúl'
              {...register('firstName')}
            />
          </label>
          <label >
          <h3 className="app-subtitle-1 ">Apellido</h3>
            <input
              className="w-full bg-transparent border-app-grayDark border-[1px] rounded-md text-xs h-9 pl-2 "
              type="text"
              placeholder='Pérez'
              {...register('lastName')}
            />
          </label>
          </span>
          <label >
            <h3 className="app-subtitle-1 ">Contraseña</h3>
            <input
              className="w-full bg-transparent border-app-grayDark border-[1px] rounded-md text-xs h-9 pl-2 "
              type="text"
              {...register('password')}
            />
          </label>
        </form>
      </div>
      <p
        className="text-xs text-app-gray flex justify-center py-2 hover:underline  font-light"
        
      >
        * La contraseña debe tener mayúsculas, minúsculas y números
      </p>
      <button className="w-full bg-app-yellow rounded-md text-app-black app-texto-2 h-9">
        Crear cuenta
      </button>
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