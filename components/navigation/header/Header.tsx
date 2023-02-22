import Link from 'next/link';
import { useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { TbUserCircle } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { useUserMe } from '../../../lib/services/user.service';
import { changueStatus } from '../../../store/features/ui/uiSlice';
import { RootState } from '../../../store/store';
import { IconLogo } from '../../assets/logo/IconLogo';
const Header = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.ui.isAuthenticated
  );
  const dispatch = useDispatch();
  const { data } = useUserMe();

  useEffect(() => {
    if (data) {
      dispatch(changueStatus(true));
    } else {
      dispatch(changueStatus(false));
    }
  }, [data]);

  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <div>
        <Link href={'/'}>
          <IconLogo />
        </Link>
      </div>
      <div className="block md:hidden">
        <div className="flex items-center gap-2 text-xs">
          <TbUserCircle size={24} />
          <p>{data?.results?.email}</p>
        </div>
      </div>
      <div className="hidden gap-8 items-center md:flex ">
        <Link
          href={'/create-event'}
          className={'text-app-blue flex items-center gap-1'}
        >
          <AiOutlinePlus size={22} /> <p>Crear publicación</p>
        </Link>
        {isAuthenticated ? (
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <FaRegHeart className="text-app-pink" />
              <Link href={'/profile'}>Mis votos</Link>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <TbUserCircle size={24} />
              <p>{data?.results?.email}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 ">
            <Link href={'/login'}>Login</Link>
            <Link href={'/sign-up'}>Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
