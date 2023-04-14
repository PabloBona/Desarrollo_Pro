import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { loginUser } from '../lib/services/auth.service';
import Cookie from 'js-cookie'
import { useRouter } from 'next/router';
import { useState } from 'react';

type FormValues = {
  email: string;
  password: string;
};

const LoginCard = () => {

const [password, setPassword] = useState(false)

  const router = useRouter()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data:any)=>{
    
    
    loginUser(data)
    .then((res)=>{

      Cookie.set('token',res.data.token)

      router.push('/')
     return(
      
      Swal.fire({
        title: 'Se ha iniciado sesión correctamente',
        width: 400,
        padding: '1em',
        color: '#fff',
        background: 'rgb(0,0,0,0.7)',
        backdrop: `
            rgba(0,0,123,0.4)
          `,
      })
      
      )
      

     
     
    })
    .catch(
      (err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo o contraseña son incorrectos',
            background: 'rgb(0,0,0,0.7)',
            color: '#fff',
            width: 400,
          backdrop: `
              rgba(0,0,123,0.4)
            `,
          })
      }
    )

    
  }

  return (

    <div className="px-7 py-9 w-fit bg-[rgb(0,0,0,0.7)] text-white app-title-2 rounded-3xl">
      <h2>¡Hola!</h2>
      <p className="py-3 app-texto-1 text-xs">
        Inicie sesión con los datos que ingresó durante su registro
      </p>
      <div className="grid gap-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="app-subtitle-1">Email</label>
            <input
              className="w-full bg-transparent border-app-grayDark border-[1px] rounded-md text-xs h-9 pl-2"
              type="text"
              required
              placeholder="ejemplo@gmail.com "
              {...register('email')}
            />
          </div>
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
      <a
        className="text-xs text-app-gray flex justify-center py-2 hover:underline  font-light"
        href="/reset-password"
      >
        ¿Olvidaste tu contraseña? Recupérala aquí
      </a>
      

      <input type='submit' value='Iniciar sesión' className="w-full bg-app-yellow rounded-md text-app-black app-texto-2 h-9"/>

        </form>
      </div>
        
      
      <a
        className="text-xs font-light text-app-yellow flex justify-center py-2 hover:underline "
        href="/sign-up"
      >
        O crea una cuenta nueva
      </a>
    </div>
  );
};

export default LoginCard;
