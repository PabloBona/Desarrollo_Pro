import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

type FormValues = {
  email: string;
  password: string;
};

const LoginCard = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = ()=>{
    /*
    Login
    */ 
  }

  return (

    <div className="px-7 py-9 w-fit bg-[rgb(0,0,0,0.7)] text-white app-title-2 rounded-3xl">
      <h2>¡Hola!</h2>
      <p className="py-3 app-texto-1 text-xs">
        Inicie sesión con los datos que ingresó durante su registro
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
      <a
        className="text-xs text-app-gray flex justify-center py-2 hover:underline  font-light"
        href="/reset-password"
      >
        ¿Olvidaste tu contraseña? Recupérala aquí
      </a>
      <button onClick={()=>{Swal.fire(
  'Good job!',
  'You log in correctly!',
  'success'
)}} className="w-full bg-app-yellow rounded-md text-app-black app-texto-2 h-9">
        Iniciar sesión
      </button>
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
