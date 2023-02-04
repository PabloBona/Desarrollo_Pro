import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import { ActionButton } from '../../components/buttons/ActionButton';
import { login } from '../../lib/services/auth.service';

const LoginPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();
  const onSubmit = async (data: any) => {
    login(data)
      .then((resp) => {
        Cookies.set('token', resp.data.token[0].public);
        window.location.href = '/profile';
        // router.push('/profile');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className='bg-[url("/login-banner.png")] md:flex items-center justify-center hidden '></div>
      <div className="flex flex-col items-center justify-center p-4 sm:p-20 max-w-[580px] mx-auto">
        <Link href={'/'}>
          <Logo variant="blue" onlyIcon={true} />
        </Link>
        <div className="w-full text-left flex flex-col gap-8">
          <div>
            <h1 className="text-[32px] font-medium">Login</h1>
            <p>Login with the data you entered during your registration.</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Email</span>
              <input
                className="p-4 border border-app-grayDark"
                type="text"
                {...register('email')}
              />
            </label>
            <label className="flex flex-col">
              <span className="font-semibold">Password</span>
              <input
                className="p-4 border border-app-grayDark"
                type="password"
                {...register('password')}
              />
            </label>
            <ActionButton>Log in</ActionButton>
            <span className="text-center app-subtitle-2 pt-2">
              Did you forget your password?
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
