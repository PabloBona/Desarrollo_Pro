import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbUserCircle } from 'react-icons/tb';
import { IconLogo } from '../../assets/logo/IconLogo';

const Header = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <div>
        <Link href={'/'}>
          <IconLogo />
        </Link>
      </div>
      <div className="block sm:hidden">
        <div className="flex items-center gap-2 text-xs">
          <TbUserCircle size={24} />
          <p>erik@academlo.com</p>
        </div>
      </div>
      <div className="hidden gap-8 items-center sm:flex ">
        <Link href={'#'} className={'text-app-blue flex items-center gap-1'}>
          <AiOutlinePlus size={22} /> <p>Crear publicación</p>
        </Link>
        <div className="flex items-center gap-4 ">
          <Link href={'/login'}>Login</Link>
          <Link href={'/sign-up'}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
