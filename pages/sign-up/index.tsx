import Link from 'next/link';
import Logo_yellow from '../../components/assets/svg/Logo_yellow';
import SignupCard from '../../components/SignupCard';


export default function SingUpPage() {
  
  
  

  return (
    <div className="">
      <div className='bg-[url("/login-banner.png")] md:flex items-center justify-center hidden '></div>
      <div className='flex w-full h-screen bg-[url("/bogota.png")] items-center bg-cover ] justify-between absolute md:px-[10em] px-3'>
      
    <Link href='/'>

    <Logo_yellow />
    </Link>

    <SignupCard />
  
    </div>
    </div>
  );
}
