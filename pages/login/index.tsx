import Link from "next/link";
import LoginCard from "../../components/LoginCard";
import Logo_yellow from "../../components/assets/svg/Logo_yellow";

const index = () => {
  return( 
      <div className='flex w-full h-screen bg-[url("/bogota.png")] items-center bg-cover ] justify-between absolute md:px-[10em] px-3'>
      
    <Link href='/'>

    <Logo_yellow />
    </Link>
    <LoginCard />
  
    </div>
  )
};

export default index;
