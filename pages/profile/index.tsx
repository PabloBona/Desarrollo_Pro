import FirstNameInput from '../../components/assets/svg/FirstNameInput';
import LastNameInput from '../../components/assets/svg/LastNameInput';
import { Layout } from '../../components/layout/Layout';
import ProfileBanner from '../../components/ProfileBanner';
import { NextPageWithLayout } from '../page';

const ProfilePage: NextPageWithLayout = () => {

  return <div className='p-0'>
    <ProfileBanner />
    <section className='w-full'>
    <h2 className=' app-title-2 pt-16 pb-8'>Información de contacto</h2>
    <div className='flex pb-5 w-full'>
      <span className='grid h-full'>

      <div className='w-full h-[9em] bg-app-grayLight rounded-xl flex items-center'>
      <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
</svg>
    </div>
    
    <p className='app-texto-1 text-app-gray p-2'>Inserte foto de perfil</p>
      </span>
    <div className='grid'>
      <FirstNameInput />
      <LastNameInput />
    </div>
    </div>

    </section>

    <section className='w-full'>
      <h3>Mis intereses</h3>
      <ul className='flex flex-wrap'>
        <li className='p-3'>
          <button>
          <div className=' w-[200px] h-[5em] bg-app-grayLight rounded-xl flex items-center'>
      <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
</svg>
    </div>
      <p className='text-app-gray app-texto-1 p-1'>Añade una categoría</p>
          </button>
          </li>
        <li className='p-3' >
          <button>
          <div className='w-[200px] h-[5em] bg-app-grayLight rounded-xl flex items-center'>
      <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
</svg>
    </div>
      <p className='text-app-gray app-texto-1 p-1'>Añade una categoría</p>
          </button>
          </li>
        <li className='p-3' >
          <button>
          <div className='w-[200px] h-[5em] bg-app-grayLight rounded-xl flex items-center'>
      <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
</svg>
    </div>
      <p className='text-app-gray app-texto-1 p-1'>Añade una categoría</p>
          </button>
          </li>
      </ul>
      <button className=' flex ml-auto mr-auto bg-app-blue p-3 pl-5 pr-5 mb-3 rounded-l-full rounded-r-full app-texto-2 text-white'>
        Guardar cambios
      </button>
    </section>

  </div>;
};



export default ProfilePage;

ProfilePage.getLayout = (page) =>{
  return <Layout>{page}</Layout>
}